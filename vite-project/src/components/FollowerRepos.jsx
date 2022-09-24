import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RepoList } from "./RepoList";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";

export const FollowerRepos=()=>{
    const {allFollowerRepos,currentFollowerRepos}=useSelector((state)=>state);
    const {username}=useParams();
    console.log(username);

    useEffect(()=>{
        let isPresent=false;
     if(allFollowerRepos.length>0){
      allFollowerRepos.forEach((user)=>{
        if(user[0].owner.login===username){
            isPresent=true;
            dispatch(setCurrentFollowerRepos(user));
        }
      })
     }

     if(!isPresent){
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            console.log(res.data,'response');
            dispatch(setCurrentFollowerRepos(res.data))
            dispatch(setAllFollowerRepos(res.data))
        })
     }
    },[])
    return (<>
    {/* <RepoList reposData={}/> */}
    
    </>)
}