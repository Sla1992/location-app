import React, {Component} from 'react';
import AuthenticationService from "../service/AuthenticationService";
import {Link, withRouter} from "react-router-dom";


class MyHeader extends Component {
    render() {

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header className="header">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        {!isUserLoggedIn &&<li className="nav-link">
                            <Link to="/login" className="text-white text-decoration-none">Who?</Link>
                        </li>}
                        {isUserLoggedIn &&<li className="nav-link">
                            <Link to="/" className="text-white text-decoration-none">{AuthenticationService.getLoggedInUserName()}</Link>
                        </li>}
                        {isUserLoggedIn &&<li className="nav-link">
                            <Link to="/places" className="text-white text-decoration-none">All Places</Link>
                        </li>}
                        {isUserLoggedIn &&<li className="nav-link">
                            <Link to="/places/-1" className="text-white text-decoration-none">Add Place</Link>
                        </li>}
                        {isUserLoggedIn &&<li className="nav-link">
                            <Link to="/vision" className="text-white text-decoration-none">Vision</Link>
                        </li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li>
                            <Link to="/login" className="text-white text-decoration-none">Login</Link>
                        </li>}
                        {isUserLoggedIn && <li className="nav-link">
                            <Link to="/logout" className="text-white text-decoration-none" onClick={AuthenticationService.logout}>Logout</Link>
                        </li>}
                        {!isUserLoggedIn &&<li className="nav-link">
                            <Link to="/signup" className="text-white text-decoration-none">Sign Up</Link>
                        </li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MyHeader);