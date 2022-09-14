import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen: false
        };

        // Another way to bind is via arrow function in onClick - same
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.modal = React.createRef();
    }

    // Toggles nav collapse bar
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // To toggle opening and closing of Login Modal
    // Used in onClick Login button, and the 
    toggleModal(){

        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

        // [Debug]
        console.log("isModalOpen - ", this.state.isModalOpen);

    }

    // Handles login with event parameter
    handleLogin(event){
        // Close modal on submit login modal form
        this.toggleModal();

        // [Debug]
        alert("Username: " + this.username.value + "Password: " + this.password.value + " Remember: " + this.remember.checked);
        
        // Prevent submit to trigger next page rendering
        event.preventDefault();
    }

    render() {

        // <> === <React.Fragment>
        return (
            <>
                {/* Navbar Component */}
                {/* expand="md" === navbar won't collapse on md to xl screens */}
                <Navbar dark expand="md">

                    <div className="container">

                        {/* Navbar Toggler for collapse nav */}
                        {/* Ways to bind a function in props: 1. Arrow Function | 2. .bind(..) in constructor */}
                        <NavbarToggler onClick={this.toggleNav} />

                        {/* Navbar Brand */}
                        <NavbarBrand className="mr-auto" href="/">
                            <img src='assets/images/logo.png' height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>

                        {/* Navbar Links - Collapse for xs and sm screen */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    {/* Login Button */}
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>

                {/* Jumbotron Component */}
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                {/* Login Modal Component */}
                <Modal ref={this.modal} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                {/* Using innerRef to pass a reference of  */}
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef ={(input) => this.remember = input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </>
        )

    }

}

export default Header;