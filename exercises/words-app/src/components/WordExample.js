function WordExample({
  examples,
  loadingExamples
}) {
  return (
    <div>
      <h1> Examples </h1>
      {loadingExamples && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <ul>
        {examples.length >= 2 ? examples.map((example) => (
          <li key={example.index}>{example}</li>
        )):'No Examples Available'}
      </ul>
    </div>
  )
}

export default WordExample