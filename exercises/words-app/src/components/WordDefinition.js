function WordDefinition({
  definitions,
  loadingDefinition
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
        {definitions ? definitions.map((definition) => (
          <li key={definition.index}>{definition.definition}</li>
        )): 'No Definitions available'}
      </ul>
    </div>
  )
}

export default WordDefinition