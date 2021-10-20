import WordItem from './WordItem'

function WordList ({words}) {
  return (
    <div className="mx-12 bg-yellow-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl">Search History</h1>
      <ul className="list-none flex flex-row flex-wrap justify-left ml-5 mr-5">
        {words.map((word) => (
          <WordItem key={word.id} word={word} />
        ))}
      </ul>
    </div>
  )
}

export default WordList