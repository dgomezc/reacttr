import React, { Component } from 'react'
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
            <div>
                <Header />
                <Main user={this.state.user}/>
            </div>
        )
    }
}

export default App