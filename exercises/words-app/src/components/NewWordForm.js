// CORE
import { useState } from 'react'

function NewWordForm( { searchWord }) {
  const [newWord, setNewWord] = useState('')

  const updateNewWord = (event) => {
    setNewWord(event.target.value)
  }

  const formSubmitted = (event) => {
    event.preventDefault()
    if(newWord && newWord.trim() !== "") {
    searchWord({
      id: Date.now(),
      word: newWord
    })
    setNewWord('')
  }
  }

  return (
    <div className="flex flex-wrap justify-center bg-indigo-300 mx-full mb-12 h-24 content-center">
      <form onSubmit={formSubmitted}>
        <label htmlFor="newWord"> Enter a word: </label>
        <input className="rounded-xl bg-gray-100 pl-2" onChange={updateNewWord} id="newWord" value={newWord} />
        <button className="rounded-lg bg-indigo-500 shadow-xl m-2 p-1 w-24 text-white ring-4">Search</button> 
      </form>
    </div>
  );
}

export default NewWordForm;
