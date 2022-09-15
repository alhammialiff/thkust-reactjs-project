import React, { Component } from 'react';

// [Commented] To make way for Redux Form Exercise
// import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Input, Label, Col, Row, FormFeedback } from 'reactstrap';

import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

// Validation functions - val = user input
const required = (val) => val && val.length;
// Max Length - Checks for 'not val' OR if val is less than specified length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props) {
        super(props);

        // [Comment] To make way for Redux Form Exercise
        // this.state = {
        //     firstname: '',
        //     lastname: '',
        //     telnum: '',
        //     email: '',
        //     agree: false,
        //     contactType: 'Tel.',
        //     message: '',
        //     // Tracking mechanism to see if input has been changed/updated or not
        //     touched: {
        //         firstname: false,
        //         lastname: false,
        //         telnum: false,
        //         email: false
        //     }
        // }

        // Like an arrow function that is passed in props
        this.handleSubmit = this.handleSubmit.bind(this);

        // [Commented] To make way for Redux Form Exercise
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);

    }

    // [Comment] To make way for Redux Form Exercise
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     console.log("target var - ", target);

    //     // Set state of event.target.name : event.target.value (target: value)
    //     // Eg. If there is any input (Eg. Alhammi) in firstname, setState will result in => firstname:'Alhammi' 
    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit(values) {

        // [Debug]
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));

        // event.preventDefault();

    }

    // [Commented] Tracks any input field has been modified when component has 'lost focus'
    // This is called curried function. (See below for the normal function)
    // handleBlur = (field) => (evt) => {

    //     // [Debug]
    //     console.log("In handleBlur - ", { ...this.state.touched, [field]: true });

    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     });

    // }

    // [For ref only] Curried function in non-arrow form
    // handleBlur(field){
    //     return function(evt){
    //         this.setState({
    //             touched: { ...this.state.touched, [field]: true }
    //         })
    //     }
    // }

    // [Commented] To make for React Redux Form Exercise
    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     // First name & last name validation 
    //     if (this.state.touched.firstname && firstname.length < 3) {
    //         errors.firstname = 'First Name should be >= 3 characters';
    //     } else if (this.state.touched.firstname && firstname.length > 10) {
    //         errors.firstname = 'First Name should be <= 10 characters';
    //     } else if (this.state.touched.lastname && lastname.length < 3) {
    //         errors.lastname = 'First Name should be >= 3 characters';
    //     } else if (this.state.touched.lastname && lastname.length > 10) {
    //         errors.lastname = 'First Name should be <= 10 characters';
    //     }

    //     // Regex for tel validation = All string chars should be numbers and nothing else
    //     const reg = /^\d+$/;

    //     // Tel validation
    //     if (this.state.touched.telnum && !reg.test(telnum)) {
    //         errors.telnum = 'Telephone no. should contain only number';
    //     }

    //     // Email validation
    //     if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
    //         errors.email = 'Please type in a valid email address';
    //     }

    //     return errors;

    // }

    render() {
        // [Commented] To make way for React Redux Form
        // const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (

            <div className="container">

                <div className="row">

                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/contactus'>Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">

                        {/* Form */}
                        <LocalForm onSubmit={(values, form) => this.handleSubmit(values)}>
                            <Row className="form-group">

                            </Row>
                            {/* First Name */}
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    {/* Redux Control Form Component */}
                                    <Control.text
                                        model=".firstname"
                                        className="form-control"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />
                                    {/* React Control Form Error Component */}
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                                </Col>
                            </Row>

                            {/* Last Name */}
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>

                                    <Control.text
                                        model=".lastname"
                                        className="form-control"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="Last Name"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />

                                </Col>
                            </Row>

                            {/* Tel. No */}
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>

                                    <Control.text
                                        model=".telnum"
                                        className="form-control"
                                        id="telnum"
                                        name="telnum"
                                        placeholder="Tel. No."
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 number',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />

                                </Col>
                            </Row>

                            {/* Email */}
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>

                                    <Control.text model=".email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        validators={{
                                            required,
                                            validEmail
                                        }} />

                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                    />

                                </Col>
                            </Row>

                            {/* Checkbox */}
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox
                                                model=".agree"
                                                className="form-check-input"
                                                name="agree" />
                                            {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select
                                        model=".contactType"
                                        className="form-control"
                                        name="contactType">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            {/* Feedback*/}
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".message"
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Feedback here..."
                                        rows="12" />
                                </Col>
                            </Row>

                            {/* Submit Button */}
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </div>
                </div>
            </div>

        );

    }


}

export default Contact;