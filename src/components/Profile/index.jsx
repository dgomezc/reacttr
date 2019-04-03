import React, { Component } from 'react'
import styles from './Profile.module.css'

class Profile extends Component {
    constructor () {
        super()
    }

    render()
     {
        return (
            <div className={styles.root}>
                <img className={styles.avatar} src={this.props.picture} />
                <span className={styles.name}>{this.props.displayName}</span>
                <ul className={styles.data}>
                    <li>
                        <span  className='fa fa-user'></span> {this.props.userName}
                    </li>
                    <li>
                    <span  className='fa fa-envelope'></span> {this.props.emailAddress}
                    </li>
                    <li>
                    <span  className='fa fa-map-marker'></span> {this.props.location}
                    </li>
                </ul>
            </div>
         )
     }
}

export default Profile