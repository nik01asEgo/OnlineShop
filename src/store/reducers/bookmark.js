

const bookmark = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_BOOK_MARK":
            return { ...state, bookMark: state.bookMark + action.payload }

        case "DEL_BOOK_MARK":
            return { ...state, bookMark: state.bookMark ? state.bookMark - action.payload : 0 }
        default:
            return state
    }
}
