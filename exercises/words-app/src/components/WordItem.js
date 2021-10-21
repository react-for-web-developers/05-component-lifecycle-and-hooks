function WordItem({
  word
}) {
  return (
    <div className="border-2 m-1 border-yellow-700 rounded-xl pl-5 pr-5 text-center hover:bg-yellow-300 hover:border-yellow-500">
      {word.word}
    </div>
  )
}

export default WordItem