import React ,{useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import styled from "styled-components";
import '../generalstyle.css';
import {MdVerified} from 'react-icons/md';

const RepoCont=styled.div`
display:flex;
width:60%;
margin:50px 0px 0px 300px;
`
const Image=styled.img`
width:110px;
height:110px;
border-radius:55px;
`
const RepoImgDiv=styled.div`
width:250px;
`
const RepoDesc=styled.div`
width:500px;
margin:-20px 0px 0px 50px;
`
const Flex=styled.div`
display:flex;
`
const IconDiv=styled.div`
padding:17px 5px 0px 0px;
color:#4fa80b ;
`
const Pera1=styled.p`
font-weight:20px;
font-weight:600;
`
const Pera=styled.p`
margin:-8px 0px 0px 0px;
`
const RepoName=styled.p`
font-size:30px;
font-weight:600;
`
export const Description=()=>{
    const[currentRepo,setCurrentRepo]=useState({});
    const {currentUser}=useSelector((state)=>state);
  
    const {id}=useParams();
    console.log(id);
    useEffect(()=>{
        console.log(currentUser);
        currentUser.forEach((repo)=>{
            if(repo.id=== Number(id)){
                setCurrentRepo({...repo});
            }
        })
    },[])
    // console.log(currentuser);
    return (<>
    {currentRepo && (
   <RepoCont>
   <RepoImgDiv>
   <Image src="https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="repo image" />     
   <Flex>
   <IconDiv><MdVerified /></IconDiv>
   <Pera1>Verified by Github</Pera1>
   </Flex>
   <Pera>Github contains that this apps meets the <span className="Span">requirements for verification.</span></Pera>
   </RepoImgDiv>

   <RepoDesc>
       <RepoName>{currentRepo.name}</RepoName>
       <p>{currentRepo.description}</p>
   </RepoDesc>
</RepoCont>
    )}
    </>)
}