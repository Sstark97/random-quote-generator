export const setRandomQuote = (payload) => ({
  type: 'SET_RANDOM_QUOTE',
  payload,
});

export const getRandomQuote = (payload) => ({
    type: 'GET_RANDOM_QUOTE',
    payload,
});

export const setQuotes = (payload) => ({
  type: 'SET_QUOTES',
  payload,
});