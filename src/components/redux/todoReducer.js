const todoReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return ([...state, {
                id: new Date(),
                value: action.value,
                isCompleted: false,
                edit: false
            }])

        case "DELETE_ITEM":
            return [...state].filter(item => item.id !== action.id)

        case "EDIT_ITEM":
            return [...state].map(item => {
                if (item.id === action.id) {
                    item.edit = true
                }
                return item
            })
        
        default:
            return state
    }
}

export default todoReducer