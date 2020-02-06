import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import AuthenticationService from "../service/AuthenticationService";
import TodoDataService from "../service/TodoDataService";
import moment from 'moment';

class ListOfPlaces extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos : [],
            message : null
        };
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    componentWillUnmount() {
        console.log('ComponentWillUnmount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }


    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({ todos: response.data })
                }
            )
    }


    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of todo ${id} Successful` })
                    this.refreshTodos()
                }
            )

    }

    addTodoClicked(id){
        console.log('update' + id)
        this.props.history.push(`/places/-1`)
    }

    updateTodoClicked(id) {
        console.log('update' + id);
        this.props.history.push(`/places/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // // console.log("deleteClicked")
        // TodoDataService.deleteTodo(username, id).then(response =>{
        //     this.setState({message : `Delete of todo ${id} Successful`});
        //     this.refreshTodos();
        // })
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true;
    }

    render() {
        return(
            <div>
                <h1>List of Your Places</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}

                <div className="container">
                    <div className="card mb-5">

                        {

                            this.state.todos.map(
                                todo =>

                                    <span key={todo.id}>
                                        <p><img src="https://cdn.getyourguide.com/img/location_img-489-2532435674-148.jpg" className="card-img-top" alt="..."/></p>
                                        <h5 className="card-title">{todo.title}</h5>
                                        <p className="card-text">{todo.description}</p>
                                        <p className="card-text">{todo.done.toString()}</p>
                                        <p className="card-text">{moment(todo.targetDate).format('YYYY-MM-DD')}</p>
                                        <p className="card-text">
                                            <button id="scrollBtn" className="btn btn-success mr-3 mb-3" onClick={this.addTodoClicked}>Add New Place</button>
                                            <button className="btn btn-warning mr-3 mb-3" onClick={() => this.updateTodoClicked(todo.id)}>Update</button>
                                            <button className="btn btn-danger mb-3" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>

                                        </p>
                                    </span>

                            )
                        }

                    </div>

                </div>
            </div>
        )
    }


}

export default withRouter(ListOfPlaces);