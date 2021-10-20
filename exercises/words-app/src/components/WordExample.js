function WordExample({
  examples,
  loadingExamples,
  error
}) {
  return (
    <div>
      <h1> Examples </h1>
      {loadingExamples && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>
    </div>
  )
}

export default WordExample