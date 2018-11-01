import React from "react";
import './UserSearch.css';
import { getRepos, getUserData } from '../services/github-api';


const UserSearch = (props) => { 
    

return (
    <div className = "form-container">
        <form onSubmit={props.getGitData}>
        <input className="userName" type="text" name="username"/>
        <button className="subBtn">Search</button>
      </form>
    </div>

    );
  }
  
  export default UserSearch;