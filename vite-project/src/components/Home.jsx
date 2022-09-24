import React ,{useState} from "react";
import '../generalstyle.css';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser,setAllUser} from '../store/actions';
import axios from "axios";
import { Link } from "react-router-dom";
import { RepoList } from "./RepoList";
import { InputCont,InputFlex,Input,Button,Image,Pera,FollowersPera,Heading,Profile,UserInfo,Flex } from "../styled/home.styled";

export const Home=()=>{
const [username,setUserName]=useState('');
const {allUser,currentUser}=useSelector((state)=>state);
const dispatch=useDispatch();
console.log(allUser,'alluser');
console.log(currentUser,'currentuser');

const handleChange=(e)=>{
    setUserName(e.target.value);
}

const handleSearch=(e)=>{
    console.log(username,"username");
    let isPresent=false;
    if(allUser.length>0){
        allUser.forEach((user,i)=>{
        if(user[0].owner.login===username){
            isPresent=true;
            dispatch(setCurrentUser(user));
            console.log('present');
        }
        })
    }

     if(!isPresent){
        console.log('unpresent');
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            // console.log(res.data);
            dispatch(setCurrentUser(res.data));
            dispatch(setAllUser(res.data));

        })
        .catch((err)=>console.log("error occurred",err));
     }    
}
    return (<>
    {/* input and search */}
    <InputCont>
    <InputFlex>
    <div><Input type={'text'} value={username} onChange={handleChange} /></div>
    <div><Button onClick={handleSearch}>Search</Button></div>
    </InputFlex>
    </InputCont>

    {/* Profile */}
    {currentUser.length>0 && (
    <div>
    <Profile>
        <Image src={currentUser[0].owner.avatar_url} alt="profile" />
        <UserInfo>
        <div><Pera>{currentUser[0].owner.login}</Pera></div>
        <Flex>
        <Link to="/followers" style={{color:'#4070f4'}}><Heading>Followers</Heading></Link>
        <FollowersPera>21</FollowersPera>
        </Flex>
        </UserInfo>
    </Profile>
    <RepoList reposData={currentUser}/>
    </div>
    )}
    </>)
}