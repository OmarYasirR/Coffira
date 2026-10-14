/**
 * Inline "mad-lib" sentence filter — a row of pill-styled <select> tokens
 * dropped into a sentence, each changing what's shown below as you pick it.
 * `sentence` is an ordered list of { text } / { token } parts (see
 * src/i18n/filterSentences.js); `fields` maps each token id to its
 * { value, onChange, options, ariaLabel }.
 */
export default function MadLibFilter({ sentence, fields, className = 'text-brand-dark' }) {
  return (
    <h2 className={`fit-content font-serif text-2xl font-semibold leading-relaxed md:text-3xl ${className}`}>
      {sentence.map((part, i) =>
        part.text ? (
          <span key={i}> {part.text} </span>
        ) : (
          <select
            key={i}
            className="madlib-token"
            aria-label={fields[part.token]?.ariaLabel}
            value={fields[part.token]?.value}
            onChange={(e) => fields[part.token]?.onChange(e.target.value)}
          >
            {fields[part.token]?.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )
      )}
    </h2>
  )
}
