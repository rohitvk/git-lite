import React from  "react";
import "./UserDetail.css";


const UserDetail = (props) => {
    const userDetail = props.userData;
    if(userDetail){      
        const username = userDetail.user.name;
        const location = userDetail.user.location;
        const avatar = userDetail.user.avatar_url;
        //const orgs = userDetail.orgs;
    return(
          <div className="userDetail"> 
            <div><img className ="userImg" alt="UserImage" src={avatar}></img></div>
            <div><p>Name: {username}</p><p> Location: {location}</p></div>    
          </div>
        );
    }else{
        return <div></div>
    }

    }
export default UserDetail;
