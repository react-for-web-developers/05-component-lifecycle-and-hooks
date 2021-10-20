function WordExample({
  examples,
  loadingExamples,
  error
}) {
  return (
    <div className="mx-12 bg-green-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Examples </h1>
      {loadingExamples && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul className="list-disc pl-12">
        {examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>
    </div>
  )
}

export default WordExample