function WordSynonym({
  synonyms
}) {
  return (
    <div>
      <h1> Synonyms </h1>
      <ul>
        {synonyms.length >= 2 ? synonyms.map((synonym) => (
          <li key={synonym.index}>{synonym}</li>
        )):'No Synonyms Available'}
      </ul>
    </div>
  )
}

export default WordSynonym