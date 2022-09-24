import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RepoList } from "./RepoList";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { setAllFollowerRepos,setCurrentFollowerRepos } from "../store/actions";

export const FollowerRepos=()=>{
    const {allFollowerRepos,currentFollowerRepos}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const {username}=useParams();
    console.log(username);

    useEffect(()=>{
        let isPresent=false;
     if(allFollowerRepos.length>0){
      allFollowerRepos.forEach((user)=>{
        if(user[0].owner.login===username){
            console.log('present');
            isPresent=true;
            dispatch(setCurrentFollowerRepos(user));
        }
      })
     }

     if(!isPresent){
        console.log('un present');
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            console.log(res.data,'response');
            dispatch(setCurrentFollowerRepos(res.data))
            dispatch(setAllFollowerRepos(res.data))
        })
     }
    },[])

    return (<>
    <RepoList reposData={currentFollowerRepos}/>
    
    </>)
}