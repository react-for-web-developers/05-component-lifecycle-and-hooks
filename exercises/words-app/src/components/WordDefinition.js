function WordDefinition({
  definitions,
  loadingDefinition,
  error
}) {
  return (
    <div>
      <h1> Definition </h1>
      {loadingDefinition && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {definitions.length >= 1 ? definitions.map((definition) => (
          <li key={definition.index}>{definition.definition}</li>
        )): error ? `No Definitions Available (${error})`:null}
      </ul>
    </div>
  )
}

export default WordDefinition