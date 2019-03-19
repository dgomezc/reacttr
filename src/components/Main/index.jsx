import React, { Component } from 'react'
import uuid from 'uuid'
import MessageList from '../MessageList'
import ProfileBar from '../ProfileBar'
import InputText from '../InputText'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: Object.assign({}, this.props.user, { retweets: [] }, { favorites: [] } ),
            openText: false,
            userNameToReply: '',
            messages: [
                { 
                    id: uuid.v4(),
                    text: "Mensaje del tweet",
                    picture: "https://avatars3.githubusercontent.com/u/12777039",
                    displayName: "David Gómez",
                    userName: "dgomezc",
                    date: Date.now(),
                    retweets: 0,
                    favorites: 0
                }
            ]
        }

        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
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
            retweets: 0,
            favorites: 0
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
        this.setState (
            { openText: true,
                userNameToReply: ''
             })
    }

    handleReplyTweet(msgId, userNameToReply) {
        this.setState ({
            openText: true,
            userNameToReply
        })
    }

    handleRetweet (msgId) {
        let alreadyRetweet = this.state.user.retweets.filter(rt => rt === msgId)

        if (alreadyRetweet.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.retweets++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)

            this.setState({
                messages,
                user
            })
        }        
    }

    handleFavorite (msgId) {
        let alreadyFavorite = this.state.user.favorites.filter(fav => fav === msgId)

        if (alreadyFavorite.length === 0) {
            let messages = this.state.messages.map(msg => {
                if (msg.id === msgId) {
                    msg.favorites++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)

            this.setState({
                messages,
                user
            })
        }       
    }

    renderOpenText () {
        if (this.state.openText)
        {
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
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
                <MessageList 
                    messages={this.state.messages}
                    onReplyTweet={this.handleReplyTweet}
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                 />
            </div>
        )
    }
}

export default Main