function WordDefinition({
  definitions
}) {
  return (
    <div>
      <h1> Definition </h1>
      <ul>
        {definitions.map((definition) => (
          <li key={definition.index}>{definition.definition}</li>
        ))}
      </ul>
    </div>
  )
}

export default WordDefinition