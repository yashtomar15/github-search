import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setAllUserFollowers, setCurrentUserFollowers } from "../store/actions";
import {Link} from 'react-router-dom';
import { FollowerCont,Image,Pera,Heading, } from "../styled/followers.styled";

export const Followers=()=>{
const {allUserFollowers,currentUserFollowers,currentUser}=useSelector((state)=>state);
const dispatch=useDispatch();

    useEffect(()=>{
    if(currentUser.length>0){
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
    }
    },[])

    return (<>
    <Heading>Followers</Heading>
    <FollowerCont>
    {
     currentUserFollowers.map((user)=>{
        return (
            <div key={user.id}>
                <Link to={`/followerRepos/${user.login}`} style={{textDecoration:'none'}}>
                <Image src={user.avatar_url} />
                <Pera>{user.login}</Pera>
                </Link>
            </div>
        )
     })
    }
    </FollowerCont>
    </>)
}