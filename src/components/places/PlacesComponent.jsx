import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import moment from 'moment'
import {Formik, Form, Field, ErrorMessage} from "formik";
import TodoDataService from "../service/TodoDataService";
import AuthenticationService from "../service/AuthenticationService";

class PlacesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            title : '',
            description : '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {

        if(this.state.id===-1){
            return;
        }

        let username = AuthenticationService.getLoggedInUserName();

        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                    title: response.data.title,
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                }))
    }

    validate(values){
        let errors = {}
        console.log(values);
        if(!values.title) {
            errors.title = 'Enter a Title'
        }else if (values.title.length<5){
            errors.title = 'Enter atleast 5 Charackters in Description'
        }
        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length<5){
            errors.description = 'Enter atleast 5 Charackters in Description'
        }
        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a valid Target Date'
        }
        return errors;
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName();

        let todo = {
            id: this.state.id,
            title: values.title,
            description: values.description,
            targetDate: values.targetDate
        }

        if(this.state.id===-1){

            TodoDataService.createTodo(username, todo, {
                id: this.state.id,
                title: values.title,
                description: values.description,
                targetDate: values.targetDate
            }).then(() => this.props.history.push('/places'));

        }else {

            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push('/places'));

        }

        console.log(values)

    }

    render() {
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        let {title, description, targetDate} = this.state; // Abkürzung

        return (
            <div>
                <h1>Place</h1>
                <div className="container">
                    <Formik
                        initialValues={{
                            // description : description,
                            // targetDate : targetDate
                            title,description,targetDate //Abkürzung
                        }}
                        onSubmit = {this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="title" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label>Title</label>
                                        <Field className="form-control" type="text" name="title"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default withRouter(PlacesComponent)