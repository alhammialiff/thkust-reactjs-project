import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// Validator function for 'Your Name' form field
const minLength = (length) => (inputVal) => (inputVal) && inputVal.length >= length;
const maxLength = (length) => (inputVal) => !(inputVal) || inputVal.length <= length;

// [Alternative] If minLength were to be coded in function structure
// function minLen(length) {

//     return function (inputVal) {
//         return (inputVal) && inputVal.length >= length;
//     };

// }

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);

    }

    // Toggles Modal open state
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

        console.log("In toggleModal - isModalOpen", this.state.isModalOpen);
    }

    // Submission handler for debug
    // 
    handleSubmit(values) {
        this.toggleModal();
        // console.log("In handleSubmit - values", JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        console.log("handleSubmit - this.props",this.props);
    }

    render() {

        return (
            <>
                {/* Submit Comment Button */}
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-comment"></span> Submit Comment
                </Button>

                {/* Comment Form Modal */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        {/* 'values' (object) is what is returned when Redux LocalForm detects input changes */}
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

                            {/* Rating */}
                            <Row className="form-group">
                                <Col>
                                    {/* Rating Label */}
                                    <Row>
                                        <Col>
                                            <Label htmlFor="rating">Rating</Label>
                                        </Col>
                                    </Row>
                                    {/* Redux Control Select - Rating */}
                                    <Row>
                                        <Col>
                                            <Control.select
                                                id="rating"
                                                className="form-control"
                                                model=".rating">
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {/* Your Name */}
                            <Row className="form-group">
                                <Col>

                                    {/* Commenter Name Label */}
                                    <Row>
                                        <Col>
                                            <Label>Your Name</Label>
                                        </Col>
                                    </Row>

                                    {/* Redux Control Text - Username */}
                                    <Row>
                                        <Col>
                                            <Control.text
                                                id="author"
                                                className="form-control"
                                                name="author"
                                                model=".author"
                                                validators={{
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(15),
                                                }
                                                } />

                                            {/* Error validation messages */}
                                            <Errors
                                                className="text-danger"
                                                model=".author"
                                                show="touched"
                                                messages={{
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }} />
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>

                            {/* Comment Box */}
                            <Row className="form-group">

                                <Col>

                                    {/* Comment Box Label */}
                                    <Row>
                                        <Col>
                                            <Label>Comment</Label>
                                        </Col>
                                    </Row>

                                    {/* Redux Control Textarea - Comment Box */}
                                    <Row>
                                        <Col>
                                            <Control.textarea
                                                id="comment"
                                                className="form-control"
                                                name="comment"
                                                model=".comment" />
                                        </Col>
                                    </Row>

                                </Col>
                            </Row>

                            <Button type="submit" color="primary">Submit</Button>

                        </LocalForm>

                    </ModalBody>
                </Modal>

            </>
        );

    }

}

export default CommentForm;