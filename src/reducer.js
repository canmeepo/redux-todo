const reducer = (state = {}, action ) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, items: [...state.items, action.payload] }
        case 'DELETE':
            return {items: state.items.filter(state => state.id !== action.id)}
        case 'DONE':
            return {...state, items: state.items.map(x => x.id == action.id ? 
                {...x, done: !x.done} : x)
            }
        default:
            return state
    }
}

export default  reducer;