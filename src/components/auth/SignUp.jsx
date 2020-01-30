import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignUp extends Component {
    render() {
        return (

            <div>
                <div className="container justify-content-center">
                    <div className="text-left w-50">
                        <h3>Sign Up</h3>

                        <label>Username</label>
                        <input type="username" className="form-control m-1" placeholder="Username" />

                        <label>Password</label>
                        <input type="password" className="form-control m-1" placeholder="Password" />

                        <label>Confirm Password</label>
                        <input type="password" className="form-control m-1" placeholder="Confirm Password" />

                        <label>E-Mail</label>
                        <input type="email" className="form-control m-1" placeholder="E-Mail Address" />

                        <button className="btn btn-success m-1" onClick={this.loginClicked}>Submit</button><span className="text-muted text-right">
                            Already have an Account? <Link to="/Login">Click here!</Link>
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;