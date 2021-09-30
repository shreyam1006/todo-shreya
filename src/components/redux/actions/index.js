export const addListItem=(value)=>{
    return{
    type:'ADD_ITEM',
    value
    }
}

export const deleteListItem=(id)=>{
    return{
    type:'DELETE_ITEM',
    id
    }
}

export const editListItem=(id)=>{
    return{
    type:'EDIT_ITEM',
    id:id
    }
}

export const clickAllButtom=()=>{
    return{
    type:'ALL'
    }
}

export const clickActiveButton=()=>{
    return{
    type:'ACTIVE'
    }
}

export const clickCompletedButton=()=>{
    return{
    type:'COMPLETED'
    }
}