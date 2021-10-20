function WordDefinition({
  definitions
}) {
  return (
    <div>
      <h1> Definition </h1>
      <ul>
        {definitions ? definitions.map((definition) => (
          <li key={definition.index}>{definition.definition}</li>
        )): 'No Definitions available'}
      </ul>
    </div>
  )
}

export default WordDefinition