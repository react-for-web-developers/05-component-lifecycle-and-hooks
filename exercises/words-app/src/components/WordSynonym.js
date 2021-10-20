function WordSynonym({
  synonyms,
  loadingSynonyms,
  error
}) {
  return (
    <div>
      <h1> Synonyms </h1>
      {loadingSynonyms && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {synonyms.length >= 2 ? synonyms.map((synonym) => (
          <li key={synonym.index}>{synonym}</li>
        )): error ? `No Synonyms Available (${error})`:null}
      </ul>
    </div>
  )
}

export default WordSynonym