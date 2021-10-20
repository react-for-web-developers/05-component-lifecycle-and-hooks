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

function App() {
  const [word, setWord] = useState(null)
  const [words, setWords] = useState([])  // History of prior searched words
  
  const [wordDefinition, setWordDefinition] = useState([])
  const [wordSynonyms, setWordSynonyms] = useState([])
  const [wordExamples, setWordExamples] = useState([])

  const [hasDefinition, setHasDefinition] = useState(false)
  const [hasSynonyms, setHasSynonyms] = useState(false)
  const [hasWords, setHasWords] = useState(false)
  const [hasExamples, setHasExamples] = useState(false)

  // LOADING STATES
  const [loadingDefinition, setLoadingDefinition] = useState(false)
  const [loadingSynonyms, setLoadingSynonyms] = useState(false)
  const [loadingExamples, setLoadingExamples] = useState(false)

  const searchWord = (newWord) => {
    setWords([...words, newWord])
    setWord(newWord)
    setHasWords(true)
  }

  // API DEFINITION CALL
  useEffect(() => {
    async function getDefinition() {
      setLoadingDefinition(true)
      setWordDefinition([])
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
        if(data.results) { setHasDefinition(true) }
      } catch (error) {
        console.log(error)
      }
      setLoadingDefinition(false)
    }
    getDefinition()
  }, [word])

  // API SYNONYM CALL
  useEffect(() => {
    async function getSynonyms() {
      setLoadingSynonyms(true)
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
        if(data.synonyms) { setHasSynonyms(true) }
      } catch (error) {
        console.log(error)
      }
      setLoadingSynonyms(false)
    }
    getSynonyms()
  }, [word])

  // API EXAMPLES CALL
  useEffect(() => {
    async function getExamples() {
      setLoadingExamples(true)
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
        if(data.examples) { setHasExamples(true) }
      } catch (error) {
        console.log(error)
      }
      setLoadingExamples(false)
    }
    getExamples()
  }, [word])

  return (
    <div>
      <NewWordForm searchWord={searchWord} />
      { hasDefinition ? <WordDefinition definitions={wordDefinition} loadingDefinition={loadingDefinition} />: null }
      { hasSynonyms ? <WordSynonym synonyms={wordSynonyms} loadingSynonyms={loadingSynonyms} />: null }
      { hasExamples ? <WordExample examples={wordExamples} loadingExamples={loadingExamples} />: null }

      { hasWords ? <WordList words={words} />: null }
    </div>
  );
}

export default App;
