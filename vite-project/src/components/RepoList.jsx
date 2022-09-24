import React from "react";
import {MdVerified} from 'react-icons/md';
import { Link } from "react-router-dom";
import { ReposCont,RepoName,IconDiv,Pera,Image,FlexCont,Heading,RepoInfo,RepoDesc,Flex } from "../styled/reposlist.styled";

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