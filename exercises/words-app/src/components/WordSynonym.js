function WordSynonym({
  synonyms,
  loadingSynonyms,
  error
}) {
  return (
    <div>
      <h1> Synonyms </h1>
      {loadingSynonyms && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {synonyms ? synonyms.map((synonym) => (
          <li key={synonym}>{synonym}</li>
        )): error ? `No Synonyms Available (${error})`:null}
      </ul>
    </div>
  )
}

export default WordSynonym