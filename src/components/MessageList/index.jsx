import React, { Component } from 'react'

import Message from '../Message'
import styles from './MessageList.module.css'

class MessageList extends Component {
    render () {
        return (
            <div className={styles.root}>
                {this.props.messages.map(msg => {
                    return(
                        <Message 
                            key={msg.id}
                            text={msg.text}
                            picture={msg.picture}
                            displayName={msg.displayName}
                            userName={msg.userName}
                            date={msg.date}
                            numRetweets={msg.retweets}
                            numFavorites={msg.favorites}
                            onReplyTweet={() => this.props.onReplyTweet(msg.id, msg.userName)}
                            onRetweet={() => this.props.onRetweet(msg.id)}
                            onFavorite={() => this.props.onFavorite(msg.id)}
                        />
                    )
                }).reverse()}
            </div>
        )
    }
}

export default MessageList