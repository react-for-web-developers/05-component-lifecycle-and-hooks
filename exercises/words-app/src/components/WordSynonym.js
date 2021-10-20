function WordSynonym({
  synonyms,
  loadingSynonyms
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
        )):'No Synonyms Available'}
      </ul>
    </div>
  )
}

export default WordSynonym