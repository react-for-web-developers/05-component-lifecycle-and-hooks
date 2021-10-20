function WordExample({
  examples
}) {
  return (
    <div>
      <h1> Examples </h1>
      <ul>
        {examples.length >= 2 ? examples.map((example) => (
          <li key={example.index}>{example}</li>
        )):'No Examples Available'}
      </ul>
    </div>
  )
}

export default WordExample