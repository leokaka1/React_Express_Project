const initalState = {
    count:1
}

export function Demo1Reducer(state=initalState,action){
    console.log(action)
    switch(action.type){
        case 'add':{
            return {...state,count:state.count+action.payload}
        }
        case 'minus':{
            return {...state,count:state.count-action.payload}
        }
        default:
            return state
    }
}
