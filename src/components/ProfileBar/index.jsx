import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProfileBar.module.css'

class ProfileBar extends Component {
    render()
     {
         return (
            <div className={styles.root}>
                <Link to='/profile'>
                <figure>
                    <img className={styles.avatar} src={this.props.picture} alt="avatar"/>
                </figure>
                </Link>
                <span className={styles.userName}> Hola @{this.props.userName}!</span>
                <button onClick={this.props.onOpenText} className={styles.button}>
                    <span className="fa fa-lg fa-edit"></span> Tweet!
                </button>
            </div>
         )
     }
}

export default ProfileBar