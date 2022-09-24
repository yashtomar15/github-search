
const initstate={
    allUser:[],
    currentUser:[],
    allUserFollowers:{},
    currentUserFollowers:[],
    allFollowerRepos:[],
    currentFollowerRepos:[]
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
    case "SET_ALL_FOLLOWER_REPOS":{
        return{...state,allFollowerRepos:[...state.allFollowerRepos,payload]}
    }
    case "SET_CURRENT_FOLLOWER_REPOS":{
        return{...state,currentFollowerRepos:payload}
    }
    default:{
        return state;
    }
}
}