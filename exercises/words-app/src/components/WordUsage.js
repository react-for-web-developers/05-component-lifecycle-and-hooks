function WordUsage({
  usages,
  loadingUsage,
  error
}) {
  return (
    <div className="mx-12 bg-red-200 rounded-3xl shadow-xl p-5">
      <h1 className="font-mono font-bold text-2xl"> Usage Of </h1>
      {loadingUsage && (
        <div>
          <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
          <span className="visually-hidden">Looking for word usage...</span>
        </div>
      )}

      <div className="flex flex-row flex-wrap">
        {usages ? usages.map((usage) => (
          <div className="border-2 border-red-300 m-1 pl-3 pr-3 rounded-2xl" key={usage}>{usage}</div>
        )): error ? `No Usage Available (${error})`:null}
      </div>
    </div>
  )
}

export default WordUsage