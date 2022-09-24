import { SET_ALL_USER,SET_CURRENT_USER,SET_CURRENT_USER_FOLLOWERS,SET_ALL_USER_FOLLOWERS } from "./actionsCreater";

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

export const setAllUserFollowers=(payload)=>{
    return {
        type:SET_ALL_USER_FOLLOWERS,
        payload
    }
}

export const setCurrentUserFollowers=(payload)=>{
    return {
        type:SET_CURRENT_USER_FOLLOWERS,
        payload
    }
}