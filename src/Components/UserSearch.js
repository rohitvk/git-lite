import React from "react";
import './UserSearch.css';

const UserSearch = (props) => { 
    

return (
    <div className = "form-container">
        <form onSubmit={props.getGitData}>
        <input className="userName" type="text" placeholder="Git username here" name="username"/>
        <button className="subBtn">Search</button>
      </form>
    </div>

    );
  }
  
  export default UserSearch;
