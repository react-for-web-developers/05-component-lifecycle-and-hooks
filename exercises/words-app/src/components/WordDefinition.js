function WordDefinition({
  definitions,
  loadingDefinition,
  error
}) {
  return (
    <div className="mx-12 bg-purple-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Definition </h1>
      {loadingDefinition && (
        <div>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
          <span className="visually-hidden">Looking for word definition(s)...</span>
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