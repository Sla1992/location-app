import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required/>
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required/>
                <p><button>Login</button></p>
            </div>
        );
    }
}

export default Login;