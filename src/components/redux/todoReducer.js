const todoReducer = (state = { list: [], listMode: 'all' }, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log(state.list)
            return {
                list: [...state.list, {
                    id: new Date(),
                    value: action.value,
                    isCompleted: false,
                    edit: false
                }]
            }

        case "LIST_TO_MAP":
            console.log(state.listMode)
            if (state.listMode === 'all') {
                return state.list
            }
            if (state.listMode === 'active') {
                return [...state.list].filter(item => item.isCompleted === false)
            }
            if (state.listMode === 'completed') {
                return [...state.list].filter(item => item.isCompleted === true)
            }
            return [...state.list].filter(item => item.isCompleted === false)

        case "DELETE_ITEM":
            return [...state.list].filter(item => item.id !== action.id)

        case "EDIT_ITEM":
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.edit = true
                }
                return item
            })

        case 'ALL':
            return {listMode:'all'}
        case 'ACTIVE':
            return {listMode:'active'}
        case 'COMPLETED':
            return {listMode:'completed'}

        default:
            return state
    }
}

export default todoReducer