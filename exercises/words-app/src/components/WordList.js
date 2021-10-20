import WordItem from './WordItem'

function WordList ({words}) {
  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {words.map((word) => (
          <WordItem key={word.id} word={word} />
        ))}
      </ul>
    </div>
  )
}

export default WordList