function WordDefinition({
  definitions,
  loadingDefinition,
  error
}) {
  return (
    <div className="mx-12 bg-purple-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Definition </h1>
      {loadingDefinition && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul className="list-disc pl-12">
        {definitions.length >= 1 ? definitions.map((definition) => (
          <li key={definitions.indexOf(definition)}>{definition.definition}</li>
        )): error ? `No Definitions Available (${error})`:null}
      </ul>
    </div>
  )
}

export default WordDefinition