import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import Profile from '../Profile'
import Login from '../Login'
import './App.module.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: null
        }

        this.handleOnAuth = this.handleOnAuth.bind(this);
    }

    handleOnAuth()
    {
        console.log('Auth');
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => {
                        if(this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        } else {
                            return (
                        <Login onAuth={this.handleOnAuth} />
                        )                      
                        }
                    }} />
                    <Route path='/profile' render={() => {
                        return (
                            <Profile 
                            picture={this.state.user.photoURL}
                            userName={this.state.user.email.split('@')[0]}
                            displayName={this.state.user.displayName}
                            location={this.state.user.location}
                            emailAddress={this.state.user.email}
                        />
                        )
                    }} />
                    
                    <Route path='/user/:username' render={(props) => {
                        let username = props.match.params.username
                        return (
                            <Profile 
                            displayName={username}
                            userName={username}
                        />
                        )
                    }} />
                </Switch>
            </Router>           
        )
    }
}

export default App