import {Component} from 'react';
import axios from 'axios'

class TodoDataService extends Component {
    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/places`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/users/${name}/places/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`http://localhost:8080/users/${name}/places/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`http://localhost:8080/users/${name}/places/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`http://localhost:8080/users/${name}/places/`, todo);
    }
}

export default new TodoDataService()