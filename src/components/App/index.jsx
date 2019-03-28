import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'normalize-css'

import Header from '../Header'
import Main from '../Main'
import './App.module.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                photoURL: 'https://avatars3.githubusercontent.com/u/12777039',
                email: 'dgomezc@github.com',
                displayName: "David Gómez",
                onOpenText: false
            }
        }
    }
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    
                    <Route exactly pattern='/' render={() => {
                        if(this.state.user) {
                            return (
                                <Main user={this.state.user}/>
                            )
                        } else {
                            // Render <Login />
                        }
                    }} />
                    
                    <Route pattern='/profile' render={() => {
                        // Render <Profile />
                    }} />
                    
                    <Route pattern='/user/:username' render={({ params }) => {
                        // Render <Profile /> pasando params.username
                    }} />
                </div>
            </Router>
        )
    }
}

export default App