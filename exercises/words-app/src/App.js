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

function App() {
  const [words, setWords] = useState([])  // History of prior searched words
  const [hasDefinition, setHasDefinition] = useState(false)
  const [wordDefinition, setWordDefinition] = useState([])
  const [wordSynonyms, setWordSynonyms] = useState([])
  const [hasSynonyms, setHasSynonyms] = useState(false)
  const [hasWords, setHasWords] = useState(false)
  const [word, setWord] = useState(null)

  const searchWord = (newWord) => {
    setWords([...words, newWord])
    setWord(newWord)
    setHasWords(true)
  }

  useEffect(() => {
    async function getDefinition() {
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
    }
    getDefinition()
  }, [word])

  useEffect(() => {
    async function getSynonyms() {
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

      }
    }
    getSynonyms()
  }, [word])

  return (
    <div>
      <NewWordForm searchWord={searchWord} />
      {hasDefinition ? <WordDefinition definitions={wordDefinition} />: null}
      {hasSynonyms ? <WordSynonym synonyms={wordSynonyms} />: null}
      {hasWords ? <WordList words={words} />: null}
    </div>
  );
}

export default App;
