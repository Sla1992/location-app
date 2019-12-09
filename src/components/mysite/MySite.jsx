import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import ListOfUsers from "./ListOfUsers";
import NewPlace from "../places/NewPlace";
import ListOfPlaces from "./ListOfPlaces";

class MySite extends Component {
    render(){
        return (
            <div className="MySite.jsx">
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={ListOfUsers}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/welcome/:name" component={NewPlace}/>
                            <Route path="/places" component={ListOfPlaces}/>
                            <Route path="/users" component={ListOfUsers}/>
                            <Route path="/logout" component={Logout}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-md">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Username</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/todos" className="text-white text-decoration-none">All Places</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/todos" className="text-white text-decoration-none">Add Place</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li>
                            <Link to="/login" className="text-white text-decoration-none">Login</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/logout" className="text-white text-decoration-none">Logout</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="#" className="text-white text-decoration-none">Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved 2019 @Sla</span>
            </footer>


        )
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div>An Error Occured. There is no Support. Pls leave.</div>
        )
    }
}

export default MySite;