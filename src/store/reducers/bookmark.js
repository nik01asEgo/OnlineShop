
export default (state = { count: 0 }, action) => {
    let newCount;
    switch (action.type) {
        case "ADD_BOOKMARK":
            newCount = state.count + action.payload
            return { ...state, count: newCount }

        case "DEL_BOOKMARK":
            newCount = Math.max(state.count - action.payload, 0)
            return { ...state, count: newCount }
        default:
            return state
    }
}


