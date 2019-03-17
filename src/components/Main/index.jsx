import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            messages: [
                { 
                    text: "Mensaje del tweet",
                    picture: "https://avatars3.githubusercontent.com/u/12777039",
                    displayName: "David Gómez",
                    userName: "dgomezc",
                    date: Date.now()
                }
            ]
        }
    }

    render() {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main