import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { setAllUserFollowers, setCurrentUserFollowers } from "../store/actions";

const FollowerCont=styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:20px;
width:70%;
margin:0px 0px 0px 30%;
`
const Image=styled.img`
width:200px;
height:200px;
border-radius:50px;
margin:0px 0px 0px 0px;
`
const Pera=styled.p`
font-size:20px;
font-weight:600;
color:#3260d4;
`
export const Followers=()=>{
const {allUserFollowers,currentUserFollowers,currentUser}=useSelector((state)=>state);
const dispatch=useDispatch();

    useEffect(()=>{
    //     console.log(currentUser[0].owner.login)
    let isPresent=false;
      if(allUserFollowers[currentUser[0].owner.login]){
        isPresent=true;
        console.log('present');
      dispatch(setCurrentUserFollowers(allUserFollowers[currentUser[0].owner.login]));    
      }

      if(!isPresent){
        axios.get(currentUser[0].owner.followers_url)
        .then((res)=>{
            console.log('unpresent');
            // console.log(res.data,'response');
            const tempData={...allUserFollowers,};
            tempData[currentUser[0].owner.login]=res.data;
            dispatch(setCurrentUserFollowers(res.data));
            dispatch(setAllUserFollowers(tempData))
        })
        .catch((err)=>console.log('err ocured',err));
      }
    },[])

    return (<>
    <FollowerCont>
    {
     currentUserFollowers.map((user)=>{
        return (
            <div key={user.id}>
                <Image src={user.avatar_url} />
                <Pera>{user.login}</Pera>
            </div>
        )
     })
    }
    </FollowerCont>
    </>)
}