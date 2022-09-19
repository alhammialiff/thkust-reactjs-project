import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

// import Dishdetail from './DishdetailComponent';

// [Commented] For future ref when dealing with Class Component
// class Menu extends Component {

//     componentDidMount() {
//         console.log("Menu Component componentDidMount is invoked")
//     }

//     render() {

//         // [Debug]
//         // var dishTest = this.props.dishes;


//         // Making use of menu var to create component for each dish in this.state
//         const menu = this.props.dishes.map((dish) => {

//             // [Debug]
//             // console.log("Menu Comp. - Inside map - dish.id: ", dish.id);

//             return (

//                 // key props helps React recognise each element to be rendered uniquely
//                 <div className="col-12 col-md-5 m-1">
//                     {/* Card */}
//                     <Card key={dish.id} onClick={()=> this.props.onClick(dish.id)}>
//                         {/* Card image */}
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />

//                         {/* Card Image Overlay */}
//                         <CardImgOverlay>
//                             <CardTitle> {dish.name}</CardTitle>
//                         </CardImgOverlay>
//                     </Card>
//                 </div>

//             );

//         });

//         console.log('Menu Component render function is invoked');

//         return (

//             // Menu Component to be returned
//             <div className="container">

//                 <div className="row">
//                     {/* Media list - The menu */}
//                     {menu}
//                 </div>

//             </div>


//         );



//     }

// }

function RenderMenuItem({ dish, onClick }) {

    // [Debug]
    console.log("In RenderMenuItem:", dish);

    return (
        <>
            {/* Card */}
            {/* <Card onClick={() => onClick(dish.id)}> */}
            <Card>
                {/* <Link> with params. is used to display individual dish (via dish.id) */}
                <Link to={`/menu/${dish.id}`}>
                    {/* Card image */}
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />

                    {/* Card Image Overlay */}
                    <CardImgOverlay>
                        <CardTitle> {dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        </>
    );

}


// [Debug]
// var dishTest = this.props.dishes;

const Menu = (props) => {

    // Making use of menu var to create component for each dish in this.state
    const menu = props.dishes.dishes.map((dish) => {

        // [Debug]
        // console.log("Menu Comp. - Inside map - dish.id: ", dish.id);

        return (

            // key props helps React recognise each element to be rendered uniquely
            <div className="col-12 col-md-5 m-1">
                {/* [Commented] prop.onClick = MainComponent's () => this.onDishSelect(dishId)  */}
                {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
                <RenderMenuItem dish={dish} />
            </div>

        );

    });

    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );

    } else if (props.dishes.errMess) {

        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    } else {
        return (

            // Menu Component to be returned
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {/* Media list - The menu */}
                    {menu}
                </div>

            </div>


        );
    }


}






export default Menu;