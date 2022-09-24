import React from "react";
import styled from "styled-components";
import {MdVerified} from 'react-icons/md';
import { Link } from "react-router-dom";

const ReposCont=styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:20px;
`
const RepoName=styled.p`
color:#3260d4;
font-size:18px;
font-weight:800;
`
const IconDiv=styled.div`
padding:20px 0px 0px 7px;
color:#4fa80b ;
`
const Pera=styled.p`

`
const Image=styled.img`
width:80px;
height:80px;
border-radius:50px;
`
const FlexCont=styled.div`
display:flex;
width:70%;
margin:auto;
// margin-left:100px;
`

const Heading=styled.h1`
text-align:center;
`
const RepoInfo=styled.div`
position:relative;
top:-10px;
left:20px;

`
const RepoDesc=styled.p`
margin-top:-15px;
font-size:16px;
// font-weight:500;
color:grey;
`
const Flex=styled.div`
display:flex;
`
export const RepoList=({reposData})=>{
    return (<>
    <Heading>Repositories</Heading>
    <ReposCont>
    {reposData.map((repo)=>{
     return <FlexCont key={repo.id}>
        <Link to={`/description/${repo.id}`}>
        <div><Image src="https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="repo image" /></div>
        </Link>

        <Link to={`/description/${repo.id}`} style={{textDecoration:'none'}}>
        <RepoInfo>
        <Flex>
        <RepoName>{repo.name}</RepoName>
        <IconDiv><MdVerified /></IconDiv>
        </Flex>
        <RepoDesc>{repo.description}</RepoDesc>
        </RepoInfo>
        </Link>
     </FlexCont>
    })}
    </ReposCont>
    </>)
}