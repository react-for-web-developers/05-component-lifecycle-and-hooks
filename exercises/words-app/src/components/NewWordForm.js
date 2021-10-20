// CORE
import { useState } from 'react'

function NewWordForm( { searchWord }) {
  const [newWord, setNewWord] = useState('')

  const updateNewWord = (event) => {
    setNewWord(event.target.value)
  }

  const formSubmitted = (event) => {
    event.preventDefault()
    searchWord({
      id: Date.now(),
      word: newWord,
      hasDefinition: false,
    })
    setNewWord('')
  }

  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newWord"> Lookup the following word: </label>
        <input onChange={updateNewWord} id="newWord" value={newWord} />&nbsp;
        <button>Search</button> 
      </form>
    </div>
  );
}

export default NewWordForm;
