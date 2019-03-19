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

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
    }

    handleSendText (event) {
        event.preventDefault()
        let newMessage = { 
            id: uuid.v4(),
            userName: this.props.user.email.split('@')[0],
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value,
            picture: this.props.user.photoURL,
        }

        this.setState({
            messages: this.state.messages.concat([newMessage]),
            openText: false
        })
        
    }

    handleCloseText (event) {
        event.preventDefault()
        this.setState({ openText: false })
    }

    handleOpenText (event) {
        event.preventDefault()
        this.setState({ openText: true })
    }

    renderOpenText () {
        if (this.state.openText)
        {
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    userName={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main