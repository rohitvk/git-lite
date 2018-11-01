import React from "react";
import "./OrgDetail.css";

const OrgDetail = (props) => {
    const organizations = props.orgs;
    if(organizations) {
        if(organizations.length===0){
            return <div> </div>
        }
        var arr = organizations.map(org => {
            const url = org.blog;
            const avatar_url = org.avatar_url;
            return (   
                <a href={url}>
                    <img className ="orgImg" alt="OrganizationImage" src={avatar_url}></img>
                </a>     
            );
        }); 
        return <div className="orgContainer">Organizations<div className="orgDetail">{arr}</div></div>;
    }else{
        return <div></div>
    }
   
}

export default OrgDetail;
