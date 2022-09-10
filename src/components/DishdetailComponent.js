// DishdetailComponents is now a presentation component via functional components
// Functional Components cannot store local state, unlike Class Components

import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// [Commented Class Dishdetail] For future ref
// class Dishdetail extends Component {

//     constructor(props) {
//         super(props);

//     }


//     componentDidMount() {
//         console.log("Dishdetail Component componentDidMount is invoked")
//     }

//     componentDidUpdate() {
//         console.log("Dishdetail Component componentDidUpdate is invoked")
//     }

//     renderComments(dishComments) {

//         // Test print
//         // console.log(dishComments.comments);

//         // If dishComments is empty, return empty div
//         if (dishComments == null) {

//             return (
//                 <div>
//                 </div>
//             );

//         } else {

//             // Return individual dish comments via .map(...)
//             const eachComment = dishComments.comments.map((comment) => {
//                 return (

//                     <>
//                         <li><p>{comment.comment}</p></li>
//                         <li><p>--{comment.author},
//                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
//                                 .format(new Date(Date.parse(comment.date)))}</p></li>
//                     </>

//                 );
//             })

//             // return Comment Section
//             return (

//                 <div className="row">
//                     <div className="col-12 col-md m-1">
//                         <ul className="list-unstyled">
//                             {eachComment}
//                         </ul>
//                     </div>
//                 </div>

//             );
//         }



//     }

//     render() {

//         // Linking with 'dish' props with data that is passed by parent (MenuComponent.js)
//         const thisDish = this.props.dish;

//         // [Undefined] Dish details undefined
//         //console.log("DishDetails - thisDish", thisDish === undefined ? true: false);

//         // [Debug]
//         console.log("Dishdetail Component render invoked")

//         // [Resolve] Display empty div when this.props.dish (thisDish) is undefined on first render
//         if (thisDish === undefined) {

//             return (

//                 <div></div>
//             );

//         } else {

//             return (

//                 // Return Dish Detail Component and Comment Section
//                 <div className="container">
//                     <div class="row">
//                         {/* Dish Detail Card */}
//                         <div className="col-12 col-md-5 m-1">
//                             <Card key={thisDish.id}>
//                                 <CardImg top width="100%" src={thisDish.image} alt={thisDish.name} />
//                                 <CardBody>
//                                     <CardTitle>{thisDish.name}</CardTitle>
//                                     <CardText>{thisDish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>

//                         {/* Comment Section */}
//                         <div className="col-12 col-md-5 m-1">
//                             <div className="row">
//                                 <div className="col-12 col-md m-1">
//                                     <h4>Comments</h4>
//                                 </div>
//                             </div>
//                             {this.renderComments(thisDish)}
//                         </div>
//                     </div>


//                 </div>

//             );

//         }

//     }

// }

// ===================

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
    console.log("In Dishdetail - thisDish", thisDish); 

    // [Resolve] Display empty div when this.props.dish (thisDish) is undefined on first render
    if (thisDish === undefined) {

        return (
            <div></div>
        );

    } else {

        return (

            // Return Dish Detail Component and Comment Section
            <div className="container">
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
                        <RenderComments dishComments={thisDish.comments} />
                    </div>

                </div>
            </div>

        );
    }

}

export default Dishdetail;