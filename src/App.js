import React, { Component } from 'react';
import './App.css';
import { getRepos, getUserData } from './services/github-api';

import UserSearch from './Components/UserSearch';
import UserDetail from './Components/UserDetail';
import RepoDetail from './Components/RepoDetail';
import OrgDetail from './Components/OrgDetail';




class App extends Component {
    state = {
        repos : undefined,
        userData: undefined,
        orgs:undefined
    }
    getGitData = async(e) => {
            e.preventDefault();
            const username = e.target.elements.username.value;
            const userData = await getUserData(username);
            const repos = await getRepos(username);
            if (repos && userData) {
                this.setState ({
                    repos,
                    userData,
                    orgs: userData.orgs
            });
        }
    } 

    render() {
        return (
            <div>   
                    <UserSearch getGitData={this.getGitData}/>
                    <UserDetail userData = {this.state.userData} />
                    <OrgDetail orgs = {this.state.orgs} />
                    <RepoDetail repos = {this.state.repos} /> 
                          
            </div>
        );
    }
}

export default App;
