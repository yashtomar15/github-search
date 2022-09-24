import React ,{useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import '../generalstyle.css';
import {MdVerified} from 'react-icons/md';
import { RepoCont,Image,RepoImgDiv,RepoDesc,Flex,IconDiv,Pera1,Pera,RepoName } from "../styled/description.styled";

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