const reducer = (state, action) => {

    switch (action.type) {

        case 'SET_RANDOM_QUOTE':
            return {
                ...state,
                randomQuote: action.payload
            };
        
        case 'GET_RANDOM_QUOTE':
            return {
                ...state,
                randomQuote: state.randomQuote
            }

        default:
            return state;
    }

}

export default reducer;