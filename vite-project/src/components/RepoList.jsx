import React from "react";
import styled from "styled-components";

const ReposCont=styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:20px;
`
const RepoName=styled.div`
 display:flex;
`
const Pera=styled.p`

`
export const RepoList=({reposData})=>{
    return (<>
    {reposData.map((repo)=>{
     return <div>
        <div><Image src="https://images.unsplash.com/photo-1542831371-d531d36971e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="repo image" /></div>
        <RepoName><Pera>{repo.name}</Pera></RepoName>
     </div>
    })}
    </>)
}