import React from 'react'
import PropTypes from 'prop-types';
import styles from './Profile.module.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

function Profile( {picture, displayName, userName, emailAddress, location} ) {
    return (
        <div className={styles.root}>
            <img className={styles.avatar} src={picture} alt="avatar" />
            <span className={styles.name}>{displayName}</span>
            <ul className={styles.data}>
                <li>
                    <span  className='fa fa-user'></span> {userName}
                </li>
                <li>
                <span  className='fa fa-envelope'></span> {emailAddress}
                </li>
                <li>
                <span  className='fa fa-map-marker'></span> {location}
                </li>
            </ul>
        </div>
     )
}

Profile.propTypes = propTypes

export default Profile