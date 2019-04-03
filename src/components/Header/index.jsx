import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

class Header extends Component {
    render ()
    {
        return (
            <header className={styles.root}>            
            <Link to='/'>
                <h1 className={styles.logo}>
            <span className='fab fa-twitter-square' /> Reactrr</h1>
            </Link>
            </header>
        )
    }
}

export default Header