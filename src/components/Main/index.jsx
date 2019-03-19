import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            openText: false,
            messages: [
                { 
                    id: uuid.v4(),
                    text: "Mensaje del tweet",
                    picture: "https://avatars3.githubusercontent.com/u/12777039",
                    displayName: "David Gómez",
                    userName: "dgomezc",
                    date: Date.now()
                }
            ]
        }
    }

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    renderOpenText () {
        if (this.state.openText)
        {
            return <InputText />
        }
    }

    render() {
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    userName={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText.bind(this)}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main