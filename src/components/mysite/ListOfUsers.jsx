import React, {Component} from 'react';
import AuthenticationService from "../service/AuthenticationService";

class ListOfUsers extends Component {
    render() {
        return (
                <div>
                    <h2>Hello {AuthenticationService.getLoggedInUserName()}! Welcome to your personal Favourite Places Site!</h2>
                </div>
        );
    }
}

export default ListOfUsers;