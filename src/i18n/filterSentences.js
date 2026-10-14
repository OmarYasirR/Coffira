// Mad-lib style filter sentence structures, per language.
// Each entry is either { text: '...' } (static, already-localized text)
// or { token: 'fieldId' } (an inline <select> supplied by the component).
// Word order is defined independently per language since EN and AR
// sentence grammar differ — this is not just string substitution.

export const shopFilterSentence = {
  en: [
    { text: 'I want' },
    { token: 'category' },
    { text: 'coffee,' },
    { token: 'roast' },
    { text: 'roast, from' },
    { token: 'origin' },
    { text: ', for' },
    { token: 'price' },
    { text: ', sorted by' },
    { token: 'sort' },
    { text: '.' },
  ],
  ar: [
    { text: 'أريد قهوة' },
    { token: 'category' },
    { text: 'بتحميص' },
    { token: 'roast' },
    { text: 'من' },
    { token: 'origin' },
    { text: 'بسعر' },
    { token: 'price' },
    { text: '، مرتبة حسب' },
    { token: 'sort' },
    { text: '.' },
  ],
}

export const teaFilterSentence = {
  en: [
    { text: 'I want' },
    { token: 'category' },
    { text: 'tea, priced' },
    { token: 'price' },
    { text: ', sorted by' },
    { token: 'sort' },
    { text: '.' },
  ],
  ar: [
    { text: 'أريد شاي' },
    { token: 'category' },
    { text: 'بسعر' },
    { token: 'price' },
    { text: '، مرتب حسب' },
    { token: 'sort' },
    { text: '.' },
  ],
}
