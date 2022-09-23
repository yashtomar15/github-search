
const initstate={
    allUser:[],
    currentUser:[],
}

export const reducer=(state=initstate,{type,payload})=>{
switch(type){
    case "SET_ALL_USER":{
        return {...state,allUser:[...allUser,payload]}
    }
    case "SET_CURRENT_USER":{
        return {...state,currentUser:payload};
    }
    default:{
        return state;
    }
}
}