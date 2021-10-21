// CORE
import { useEffect, useState } from 'react'
import axios from 'axios'

// STYLING
import './App.css';

// COMPONENTS
import NewWordForm from './components/NewWordForm'
import WordList from './components/WordList'
import WordDefinition from './components/WordDefinition'
import WordSynonym from './components/WordSynonym'
import WordExample from './components/WordExample'
import WordUsage from './components/WordUsage'

function App() {
  const [word, setWord] = useState(null)
  const [words, setWords] = useState([])  // History of prior searched words
  
  const [wordDefinition, setWordDefinition] = useState([])
  const [wordSynonyms, setWordSynonyms] = useState([])
  const [wordExamples, setWordExamples] = useState([])
  const [wordUsage, setWordUsage] = useState([])

  const [hasDefinition, setHasDefinition] = useState(false)
  const [hasSynonyms, setHasSynonyms] = useState(false)
  const [hasWords, setHasWords] = useState(false)
  const [hasExamples, setHasExamples] = useState(false)
  const [hasUsage, setHasUsage] = useState(false)

  // LOADING STATES
  const [loadingDefinition, setLoadingDefinition] = useState(false)
  const [loadingSynonyms, setLoadingSynonyms] = useState(false)
  const [loadingExamples, setLoadingExamples] = useState(false)
  const [loadingUsage, setLoadingUsage] = useState(false)

  // ERROR HANDLING
  const [wordDefinitionError, setWordDefinitionError] = useState('')
  const [wordSynonymsError, setWordSynonymsError] = useState('')
  const [wordExamplesError, setWordExamplesError] = useState('')
  const [wordUsageError, setWordUsageError] = useState('')

  const searchWord = (newWord) => {
    setWords([...words, newWord])
    setWord(newWord)
    setHasWords(true)
  } 

  // API DEFINITION CALL
  useEffect(() => {
    async function getDefinition() {
      setLoadingDefinition(true)
      setHasDefinition(false)
      setWordDefinition([])
      setWordDefinitionError('')
      try {
        const { data } = await axios.request({
          method: 'GET',
          url: `https://${process.env.REACT_APP_WORDAPI_HOST}/words/${word.word}`,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_WORDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_WORDAPI_HOST
          }
          })
        setWordDefinition(data.results)
        if(data.results.length > 0) { setHasDefinition(true) }
      } catch (error) {
        setWordDefinitionError(error.message)
      }
      setLoadingDefinition(false)
    }
    getDefinition()
  }, [word])

  // API SYNONYM CALL
  useEffect(() => {
    async function getSynonyms() {
      setLoadingSynonyms(true)
      setHasSynonyms(false)
      setWordSynonyms([])
      setWordSynonymsError('')
      try {
        const { data } = await axios.request({
          method: 'GET',
          url: `https://${process.env.REACT_APP_WORDAPI_HOST}/words/${word.word}/synonyms`,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_WORDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_WORDAPI_HOST
          }
          })
        
        setWordSynonyms(data.synonyms)
        if(data.synonyms.length > 0) { setHasSynonyms(true) }
      } catch (error) {
        setWordSynonymsError(error.message)
      }
      setLoadingSynonyms(false)
    }
    getSynonyms()
  }, [word])

  // API EXAMPLES CALL
  useEffect(() => {
    async function getExamples() {
      setLoadingExamples(true)
      setWordExamples([])
      setHasExamples(false)
      setWordExamplesError('')
      try {
        const { data } = await axios.request({
          method: 'GET',
          url: `https://${process.env.REACT_APP_WORDAPI_HOST}/words/${word.word}/examples`,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_WORDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_WORDAPI_HOST
          }
          })
        
        setWordExamples(data.examples)
        if(data.examples.length > 0) { setHasExamples(true) }
      } catch (error) {
        setWordExamplesError(error.message)
      }
      setLoadingExamples(false)
    }
    getExamples()
  }, [word])

  // API USAGE CALL
  useEffect(() => {
    async function getUsage() {
      setLoadingUsage(true)
      setWordUsage([])
      setHasUsage(false)
      setWordUsageError('')
      try {
        const { data } = await axios.request({
          method: 'GET',
          url: `https://${process.env.REACT_APP_WORDAPI_HOST}/words/${word.word}/usageOf`,
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_WORDAPI_KEY,
            'x-rapidapi-host': process.env.REACT_APP_WORDAPI_HOST
          }
          })
        
        setWordUsage(data.usageOf)
        if(data.usageOf.length > 0) { setHasUsage(true) }
      } catch (error) {
        setWordUsageError(error.message)
      }
      setLoadingUsage(false)
    }
    getUsage()
  }, [word])

  return (
    <div>
      <div>
        <NewWordForm searchWord={searchWord} />
      </div>
      <div>
      { hasWords ? <WordList words={words} />: null }
      </div>
      <div className="grid gap-5 mt-5">
        {wordDefinitionError && wordSynonymsError && wordExamplesError && wordUsageError ? <h4 className="flex flex-wrap justify-center content-center">Enter a word and click search to receive word analysis...</h4>:null}
        { hasDefinition ? <WordDefinition definitions={wordDefinition} loadingDefinition={loadingDefinition} error={wordDefinitionError} />: null }
        { hasSynonyms ? <WordSynonym synonyms={wordSynonyms} loadingSynonyms={loadingSynonyms} error={wordSynonymsError} />: null }
        { hasExamples ? <WordExample examples={wordExamples} loadingExamples={loadingExamples} error={wordExamplesError} />: null }
        { hasUsage ? <WordUsage usages={wordUsage} loadingExamples={loadingUsage} error={wordUsageError} />: null }
      </div>
    </div>
  );
}

export default App;
