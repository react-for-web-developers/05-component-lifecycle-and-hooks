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
  const [word, setWord] = useState('')

  const searchWord = (newWord) => {
    console.log(newWord)
    setWords([...words, newWord])
    setWord(newWord)
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
        setHasDefinition(true)
        setWordDefinition(data.results)
      } catch (error) {

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
        console.log(data)
      } catch (error) {

      }
    }
    getSynonyms()
  }, [word])

  return (
    <div>
      <NewWordForm searchWord={searchWord} />
      <WordDefinition definitions={wordDefinition} />
      <WordSynonym synonyms={wordSynonyms} />
      <WordList words={words} />
    </div>
  );
}

export default App;
