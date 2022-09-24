
const initstate={
    allUser:[],
    currentUser:[],
    allUserFollowers:{},
    currentUserFollowers:[]
}

export const reducer=(state=initstate,{type,payload})=>{
switch(type){
    case "SET_ALL_USER":{
        return {...state,allUser:[...state.allUser,payload]}
    }
    case "SET_CURRENT_USER":{
        return {...state,currentUser:payload};
    }
    case "SET_ALL_USER_FOLLOWERS":{
        return {...state,allUserFollowers:{...state.allUserFollowers,...payload}}
    }
    case "SET_CURRENT_USER_FOLLOWERS":{
        return {...state,currentUserFollowers:payload};
    }
    default:{
        return state;
    }
}
}