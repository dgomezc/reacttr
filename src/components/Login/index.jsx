import React, { Component } from 'react'
import styles from './Login.module.css'

class Login extends Component {
    constructor () {
        super()
    }

    render()
     {
        return (
            <div className={styles.root}>
                <p className={styles.text}>
                    Necesitamos que inicies sesión con tu cuenta de Github 
                    para que puedas leer y escribir mensajes.
                </p>
                <button 
                    onClick={this.props.onAuth}
                    className={styles.button}
                    >
                    <span className='fab fa-github '></span> Login con GitHub
                    </button>
            </div>
         )
     }
}

export default Login