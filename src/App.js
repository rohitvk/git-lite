import React, { Component } from 'react';
import UserSearch from './Components/UserSearch';
import UserDetail from './Components/UserDetail';
import { getRepos, getUserData } from './services/github-api';
import Loader from 'react-loader-spinner';

import './App.css';
import RepoDetail from './Components/RepoDetail';

class App extends Component {
    state = {
        repos : undefined,
        userData: undefined,
        loading: true
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
                    loading: false
            });
        }
    } 

    render() {
        return (
            <div>   
                    <UserSearch getGitData={this.getGitData}/>
                    <UserDetail userData = {this.state.userData} />
                    <RepoDetail repos = {this.state.repos} />       
            </div>
        );
    }
}

export default App;
