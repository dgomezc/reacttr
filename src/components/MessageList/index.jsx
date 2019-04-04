import React from 'react'
import PropTypes from 'prop-types';

import Message from '../Message'
import styles from './MessageList.module.css'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onReplyTweet: PropTypes.func.isRequired,
    onRetweet: PropTypes.func.isRequired,
    onFavorite: PropTypes.func.isRequired,
}

function MessageList ( {messages, onReplyTweet, onRetweet, onFavorite } ) {
    return (
        <div className={styles.root}>
            { messages.map(msg => {
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
                        onReplyTweet={() => onReplyTweet(msg.id, msg.userName)}
                        onRetweet={() => onRetweet(msg.id)}
                        onFavorite={() => onFavorite(msg.id)}
                    />
                )
            }).reverse()}
        </div>
    )
}

MessageList.propTypes = propTypes
export default MessageList