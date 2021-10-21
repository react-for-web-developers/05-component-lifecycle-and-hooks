function WordExample({
  examples,
  loadingExamples,
  error
}) {
  return (
    <div className="mx-12 bg-green-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Examples </h1>
      {loadingExamples && (
        <div>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
          <span className="visually-hidden">Looking for word example(s)...</span>
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