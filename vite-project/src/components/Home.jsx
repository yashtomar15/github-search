import React ,{useState} from "react";
import styled from 'styled-components';
import '../generalstyle.css';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser,setAllUser} from '../store/actions';
import axios from "axios";
import { Link } from "react-router-dom";
import { RepoList } from "./RepoList";

const InputCont=styled.div`
// position:fixed;
`
const InputFlex=styled.div`
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
margin:0px 0px 0px 10px;
`
const Pera=styled.p`
font-size:22px;
padding:0px 0px 10px 10px ;
position:relative;
top:25px;
`
const FollowersPera=styled.p`
font-size:20px;
padding:0px 0px 10px 10px ;
`

const Heading=styled.h3`
padding-left:10px;
`
const Profile=styled.div`
display:flex;
justify-content:space-between;
`
const UserInfo=styled.div`
margin:6% 74% 0% 0%;
`
const Flex=styled.div`
display:flex;
`

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