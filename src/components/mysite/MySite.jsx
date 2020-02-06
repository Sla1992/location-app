import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from "../auth/Login";
import Logout from "../auth/Logout";
import ListOfUsers from "./ListOfUsers";
import ListOfPlaces from "./ListOfPlaces";
import Error from "./Error"
import AuthenticatedRoute from "./AuthenticatedRoute";
import SignUp from "../auth/SignUp";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import PlacesComponent from "../places/PlacesComponent";
import AuthenticationService from "../service/AuthenticationService";

class MySite extends Component {
    render(){
        return (
            <div className="MySite.jsx">
                <Router>
                    <MyHeader/>
                        <Switch>
                            <Route path="/" exact component={ListOfUsers}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>
                            <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                            <AuthenticatedRoute path="/places/:id" component={PlacesComponent}/>
                            <AuthenticatedRoute path="/places" component={ListOfPlaces}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route component={Error}/>
                        </Switch>
                    <MyFooter/>
                </Router>
            </div>
        )
    }
}

export default MySite;