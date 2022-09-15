// DishdetailComponents is now a presentation component via functional components
// Functional Components cannot store local state, unlike Class Components
// Functional Components cannot access lifecycle hooks


import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalBody, ModalHeader, Row, Col, Label } from 'reactstrap';
import { Control, Errors, LocalForm} from 'react-redux-form';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

// // [To remove after assignment 3] Validator function for 'Your Name' form field
// const minLength = (length) => (inputVal) => (inputVal) && inputVal.length >= length;
// const maxLength = (length) => (inputVal) => !(inputVal) || inputVal.length <= length;

// // [To remove after assignment 3] CommentForm Class Component
// class CommentForm extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             isModalOpen: false
//         }

//         this.toggleModal = this.toggleModal.bind(this);

//     }

//     // Toggles Modal open state
//     toggleModal() {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         })

//         console.log("In toggleModal - isModalOpen", this.state.isModalOpen);
//     }

//     // Submission handler for debug
//     handleSubmit(values) {
//         this.toggleModal();
//         console.log("In handleSubmit - values", JSON.stringify(values));
//     }

//     render() {

//         return (
//             <>
//                 {/* Submit Comment Button */}
//                 <Button outline onClick={this.toggleModal}>
//                     <span className="fa fa-comment"></span> Submit Comment
//                 </Button>

//                 {/* Comment Form Modal */}
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>

//                             {/* Rating */}
//                             <Row className="form-group">
//                                 <Col>
//                                     {/* Rating Label */}
//                                     <Row>
//                                         <Col>
//                                             <Label htmlFor="rating">Rating</Label>
//                                         </Col>
//                                     </Row>
//                                     {/* Redux Control Select - Rating */}
//                                     <Row>
//                                         <Col>
//                                             <Control.select
//                                                 id="rating"
//                                                 className="form-control"
//                                                 model=".rating">
//                                                 <option value="1">1</option>
//                                                 <option value="2">2</option>
//                                                 <option value="3">3</option>
//                                                 <option value="4">4</option>
//                                                 <option value="5">5</option>
//                                             </Control.select>
//                                         </Col>
//                                     </Row>
//                                 </Col>
//                             </Row>

//                             {/* Your Name */}
//                             <Row className="form-group">
//                                 <Col>

//                                     {/* Commenter Name Label */}
//                                     <Row>
//                                         <Col>
//                                             <Label>Your Name</Label>
//                                         </Col>
//                                     </Row>

//                                     {/* Redux Control Text - Username */}
//                                     <Row>
//                                         <Col>
//                                             <Control.text
//                                                 id="username"
//                                                 className="form-control"
//                                                 name="username"
//                                                 model=".username"
//                                                 validators={{
//                                                     minLength: minLength(2),
//                                                     maxLength: maxLength(15),
//                                                 }
//                                                 } />

//                                             {/* Error validation messages */}
//                                             <Errors
//                                                 className="text-danger"
//                                                 model=".username"
//                                                 show="touched"
//                                                 messages={{
//                                                     minLength: 'Must be greater than 2 characters',
//                                                     maxLength: 'Must be 15 characters or less'
//                                                 }} />
//                                         </Col>
//                                     </Row>

//                                 </Col>
//                             </Row>

//                             {/* Comment Box */}
//                             <Row className="form-group">

//                                 <Col>

//                                     {/* Comment Box Label */}
//                                     <Row>
//                                         <Col>
//                                             <Label>Comment</Label>
//                                         </Col>
//                                     </Row>

//                                     {/* Redux Control Textarea - Comment Box */}
//                                     <Row>
//                                         <Col>
//                                             <Control.textarea
//                                                 id="commentBox"
//                                                 className="form-control"
//                                                 name="commentBox"
//                                                 model=".commentBox" />
//                                         </Col>
//                                     </Row>

//                                 </Col>
//                             </Row>
                            
//                             {/* Submit Button */}
//                             <Button type="submit" color="primary">Submit</Button>

//                         </LocalForm>
//                     </ModalBody>
//                 </Modal>

//             </>
//         );

//     }

// }


function RenderComments({ dishComments }) {

    console.log("In RenderComments", dishComments)

    // If dishComments is empty, return empty div
    if (dishComments === undefined) {

        return (
            <div>
            </div>
        );

    } else {

        // Return individual dish comments via .map(...)
        const eachComment = dishComments.map((comment) => {

            return (

                <ul key={comment.id} className="list-unstyled">
                    <li><p>{comment.comment}</p></li>
                    <li><p>--{comment.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                            .format(new Date(Date.parse(comment.date)))}</p></li>
                </ul>

            );

        });

        // return Comment Section
        return (

            <div className="row">
                <div className="col-12 col-md m-1">
                    {eachComment}
                    {/* [Assignment 3] Add Submit Comment Button to pop up Comment Modal*/}
                    <CommentForm />
                </div>

            </div>

        );

    }

}

// Props passed into Render Dish are enclosed with { } as an object
function RenderDish({ dish }) {

    // [Debug]
    console.log("In RenderDish - thisDish", dish);

    if (dish === undefined) {

        return (
            <div></div>
        )

    } else {

        // Return Dish Detail Card Component
        return (
            <Card key={dish.id}>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );

    }


}

// Two ways to pass in props:
// 1. { prop-name } - as object literal
// 2. Do away the curly braces and name the props however you want (i.e 'props' below)
const Dishdetail = (props) => {

    const thisDish = props.dish;

    // [Debug]
    console.log("In Dishdetail - thisDish", props);

    // [Resolve] Display empty div when this.props.dish (thisDish) is undefined on first render
    if (thisDish === undefined) {

        return (
            <div></div>
        );

    } else {

        return (

            // Return Dish Detail Component and Comment Section
            <div className="container">

                {/* Row 1 - BreadCrumb */}
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{thisDish.name}</BreadcrumbItem>
                </Breadcrumb>

                {/* Row 2 - Dish Name Header */}
                <div className="row">
                    <div className="col-12">
                        <h3>{thisDish.name}</h3>
                        <hr />
                    </div>
                </div>

                {/* Row 3 - Dish Detail and Comments */}
                <div className="row">
                    {/* Dish Detail Card */}
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={thisDish} />
                    </div>

                    {/* Comment Section */}
                    <div className="col-12 col-md-5 m-1">
                        <div className="row">
                            <div className="col-12 col-md m-1">
                                <h4>Comments</h4>
                            </div>
                        </div>
                        <RenderComments dishComments={props.comments} />
                    </div>
                </div>
            </div>

        );
    }

}

export default Dishdetail;