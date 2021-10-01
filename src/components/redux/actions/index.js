
export const clickAll=(itemsLeft)=>{
    return{
        type:'CLICK_ALL',
        itemsLeft
    }
}

export const addListItem=(value)=>{
    return{
    type:'ADD_ITEM',
    value
    }
}

export const click=(id)=>{
    return{
        type:'CLICK',
        id
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
    id
    }
}

export const replaceListItem=(id,value)=>{
    return{
        type:"REPLACE_ITEM",
        id,
        value
    }
}

export const clickAllButton=()=>{
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

export const clickClearCompletedButton=()=>{
    return{
    type:'CLEAR_COMPLETED'
    }
}