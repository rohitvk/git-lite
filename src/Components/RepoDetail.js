import React from "react";
import "./RepoDetail.css"

const RepoDetail = (props) => {
    const repositories = props.repos;
    if(repositories) {
        var arr = repositories.map(repo => {
            const repoName = repo.name;
            const repoUrl = repo.html_url;
            const description = repo.description;
            const language = repo.language;

            return (
                <div className="repoDetail">  
                    <p>Repository Name: <a href={repoUrl}>{repoName}</a></p>
                    <p> Description: {description}</p>
                    <p> Language: {language}</p>    
                </div>
                );
        }); 
        
        return <div className="repoContainer">User Repository Details{arr}</div>;
    }else{
        return <div></div>
    }
   
}

export default RepoDetail;
