import React, { Component } from 'react'
import '../css/login.css'

const API_HOST = process.env.REACT_APP_API_HOST || 'http://localhost:4000'

export default class Login extends Component {

    state = {
        loggedIn: false,
        user: "",
        showModal: false,
        loading: false,
        error: null,
        username: "",
        password: ""

    }

    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            error: null
        });
    }

    handleUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin = (e) => {

        e.preventDefault();
        fetch(`${API_HOST}/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
            // TODO: bcrypt
          })
          .then(res => res.json())
          .then(user => {
            this.setState({ user })
          })
    }

    render() {
        return (
            <div className="login-app">
                <div className="login-header">
                    { this.state.user ?
                        <p className="user">{this.state.user}</p>
                        :
                        <div className="login-copy">
                            <div className="join"> join | </div>
                            <div className="login" onClick={this.openModal}>log in</div>
                        </div>
                    }
                </div>
                { this.state.showModal ?
                    <div className="login-modal">
                        <form onSubmit={this.handleLogin}>
                            <input name="username" type="text" placeholder="username" required="required" value={this.state.username} onChange={this.handleUsername} /><br />
                            <input name="password" type="text" placeholder="password" required="required" value={this.state.password} onChange={this.handlePassword} /><br />
                            <input type="submit" value="Log In" />
                        </form>
                    </div>
                : null}

            </div>
        )
    }
}
