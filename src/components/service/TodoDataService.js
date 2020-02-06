import {Component} from 'react';
import axios from 'axios'
import {JPA_API_URL} from '../../Constants'


class TodoDataService extends Component {
    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/places`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/places/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/places/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/places/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/places/`, todo);
    }
}

export default new TodoDataService()