import React ,{useState} from "react";
import styled from 'styled-components';
import '../generalstyle.css';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser,setAllUser} from '../store/actions';
import axios from "axios";
import { Link } from "react-router-dom";
import { RepoList } from "./RepoList";

const InputCont=styled.div`
display:flex;
width:50%;
margin:auto;
margin-top:20px;
justify-content:space-around;
`
const Input=styled.input`
width:200px;
height:40px;
`
const Button=styled.button`
width:100px;
height:40px;
outline:none;
border:none;
border-radius:5px;
font-size:17px;
cursor:pointer;
margin-top:2px;
background-color:#4b90fe;
color:white;
`
const Image=styled.img`
width:200px;
height:200px;
border-radius:50px;
margin:0px 0px 0px 400px;
`
const Pera=styled.p`

`
const Heading=styled.h3`

`

export const Home=()=>{
const [username,setUserName]=useState('');
const {allUser,currentUser}=useSelector((state)=>state);
const dispatch=useDispatch();

const handleChange=(e)=>{
    setUserName(e.target.value);
    // console.log(e.target.value);
}

const handleSearch=(e)=>{
    console.log(username,"username");
    let isPresent=false;
    if(allUser.length>0){
        allUser.forEach((user,i)=>{
        if(user[0].owner.login===username){
            isPresent=true;
            dispatch(setCurrentUser(user));
        }
        })
    }

     if(!isPresent){
        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            console.log(res.data);
            dispatch(setCurrentUser(res.data));
            dispatch(setAllUser(res.data));
        })
        .catch((err)=>console.log("error occurred",err));
     }    
}
    return (<>
    <InputCont>
    <div><Input type={'text'} value={username} onChange={handleChange} /></div>
    <div><Button onClick={handleSearch}>Search</Button></div>
    </InputCont>
    {currentUser.length>0 && (
    <div>
    <div>
        <Image src={currentUser[0].owner.avatar_url} alt="profile" />
        <div><Heading>Username</Heading><Pera>{username}</Pera></div>
        <div><Link to="/followers"><Heading>Followers</Heading></Link><Pera>followers count</Pera></div>
    </div>
    <RepoList reposData={currentUser}/>
    </div>
    )}
    </>)
}