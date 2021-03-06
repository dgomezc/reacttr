import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from './ProfileBar.module.css'

const propTypes = {
    picture: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

function ProfileBar( {picture, userName, onOpenText} ) {
    return (
        <div className={styles.root}>
            <Link to='/profile'>
            <figure>
                <img className={styles.avatar} src={picture} alt="avatar"/>
            </figure>
            </Link>
            <span className={styles.userName}> Hola @{userName}!</span>
            <button onClick={onOpenText} className={styles.button}>
                <span className="fa fa-lg fa-edit"></span> Tweet!
            </button>
        </div>
     )
}

ProfileBar.propTypes = propTypes

export default ProfileBar