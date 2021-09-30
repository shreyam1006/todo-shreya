const displayReducer=(state='all',action)=>{
    switch(action.type){
        case 'ALL':
            return state='all'
        case 'ACTIVE':
            return state='active'
        case 'COMPLETED':
            return state='completed'
        default:
            return 'all'
    }
}

export default displayReducer