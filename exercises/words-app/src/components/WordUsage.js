function WordUsage({
  usages,
  loadingUsage,
  error
}) {
  return (
    <div>
      <h1> Usage Of </h1>
      {loadingUsage && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {usages ? usages.map((usage) => (
          <li key={usage}>{usage}</li>
        )): error ? `No Usage Available (${error})`:null}
      </ul>
    </div>
  )
}

export default WordUsage