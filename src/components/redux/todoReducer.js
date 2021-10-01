const initialState = { list: [], listMode: 'all' }

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case "CLICK_ALL":
            let flag = action.itemsLeft > 0 ? false : true;
            return {
                ...state, list:

                    [...state.list].map(item => {
                        if (item.isCompleted === flag) {
                            item.isCompleted = !flag;
                        }
                        return item
                    })
            }

        case "ADD_ITEM":
            return {
                ...state, list: [...state.list, {
                    id: new Date(),
                    value: action.value,
                    isCompleted: false,
                    edit: false
                }]
            }

        case "CLICK":
            return {
                ...state, list: [...state.list].map(item => {
                    if (item.id === action.id) {
                        item.isCompleted = !item.isCompleted;
                    }
                    return item
                })
            }

        case "DELETE_ITEM":
            return { ...state, list: [...state.list].filter(item => item.id !== action.id) }

        case "EDIT_ITEM":
            return {
                ...state, list: [...state.list].map(item => {
                    if (item.id === action.id) {
                        item.edit = true
                    }
                    return item
                })
            }

        case "REPLACE_ITEM":
            return {
                ...state, list: [...state.list].map(item => {
                    if (item.id === action.id) {
                        item.value = action.value
                        item.edit = false
                    }
                    return item
                })
            }

        case 'ALL':
            return { ...state, listMode: 'all' }

        case 'ACTIVE':
            return { ...state, listMode: 'active' }

        case 'COMPLETED':
            return { ...state, listMode: 'completed' }

        case "CLEAR_COMPLETED":
            return { ...state, list: [...state.list].filter(item => item.isCompleted !== true) }

        default:
            return state
    }
}

export default todoReducer