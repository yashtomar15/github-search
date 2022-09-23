import { SET_ALL_USER,SET_CURRENT_USER } from "./actionsCreater";

export const setAllUser=(payload)=>{
    return {
        type:SET_ALL_USER,
        payload
    }
}

export const setCurrentUser=(payload)=>{
    return {
        type:SET_CURRENT_USER,
        payload
    }
}