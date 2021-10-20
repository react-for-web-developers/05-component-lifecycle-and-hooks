function WordSynonym({
  synonyms,
  loadingSynonyms,
  error
}) {
  return (
    <div className="mx-12 bg-blue-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Synonyms </h1>
      {loadingSynonyms && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <div className="flex flow-row flex-wrap">
        {synonyms ? synonyms.map((synonym) => (
          <div className="border-2 border-blue-300 m-1 pl-3 pr-3 rounded-2xl" key={synonym}>{synonym}</div>
        )): error ? `No Synonyms Available (${error})`:null}
      </div>
    </div>
  )
}

export default WordSynonym