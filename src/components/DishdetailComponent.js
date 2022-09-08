import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);

    }

    renderComments(dishComments) {

        // Test print
        // console.log(dishComments.comments);

        // If dishComments is empty, return empty div
        if (dishComments == null) {
            return (
                <div>
                </div>
            );
        } else {

            // Return individual dish comments via .map(...)
            const eachComment = dishComments.comments.map((comment) => {
                return (
                    <>
                        <li><p>{comment.comment}</p></li>
                        <li><p>--{comment.author}, {comment.date}</p></li>
                    </>
                );
            })

            // return Comment Section
            return (
                <div className="row">
                    <div className="col-12 col-md m-1">
                        <ul className="list-unstyled">
                            {eachComment}
                        </ul>
                    </div>
                </div>
            );
        }
        


    }

    render() {

        // Linking with 'dish' props with data that is passed by parent (MenuComponent.js)
        const thisDish = this.props.dish;

        return (

            // Return Dish Detail Component and Comment Section
            <>
                {/* Dish Detail Card */}
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={thisDish.image} alt={thisDish.name} />
                        <CardBody>
                            <CardTitle>{thisDish.name}</CardTitle>
                            <CardText>{thisDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                {/* Comment Section */}
                <div className="col-12 col-md-5 m-1">
                    <div className="row">
                        <div className="col-12 col-md m-1">
                            <h4>Comments</h4>
                        </div>
                    </div>
                    {this.renderComments(thisDish)}
                </div>
            </>

        );


    }

}

export default Dishdetail;