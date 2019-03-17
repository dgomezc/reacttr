import React, { Component } from 'react'
import styles from './Header.module.css'

class Header extends Component {
    render ()
    {
        return (
            <header className={styles.root}>
                <h1 className={styles.logo}>Reactrr</h1>
            </header>
        )
    }
}

export default Header