import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// import Dishdetail from './DishdetailComponent';


class Menu extends Component {

    constructor(props) {

        super(props);

        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log("Menu Component componentDidount is invoked")
    }

    // 
    // renderDish(dish) {

    //     // If dish is null (or not selected/clicked), return div will be empty
    //     if (dish != null) {
    //         console.log("Dishdetail is invoked");
    //         return (
    //             // [Commented] Card here
    //             // <Card>
    //             //     <CardImg top width="100%" src={dish.image} alt={dish.name} />
    //             //     <CardBody>
    //             //         <CardTitle>{dish.name}</CardTitle>
    //             //         <CardText>{dish.description}</CardText>
    //             //     </CardBody>
    //             // </Card>

    //             // Dishdetail Component with 'dish' prop here
    //             // <Dishdetail dish={dish} />


    //         );

    //     } else {

    //         return (
    //             <div></div>
    //         );

    //     }
    // }

    render() {

        // [Debug]
        // var dishTest = this.props.dishes;


        // Making use of menu var to create component for each dish in this.state
        const menu = this.props.dishes.map((dish) => {
            
            console.log("Menu Comp. - Inside map - dish.id: ", dish.id);

            return (
                
                // key props helps React recognise each element to be rendered uniquely
                <div className="col-12 col-md-5 m-1">
                    {/* Card */}
                    <Card key={dish.id} onClick={()=> this.props.onClick(dish.id)}>
                        {/* Card image */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        {/* Card Image Overlay */}
                        <CardImgOverlay>
                            <CardTitle> {dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            );

        });

        console.log('Menu Component render function is invoked');

        return (

            // Menu Component to be returned
            <div className="container">

                <div className="row">
                    {/* Media list - The menu */}
                    {menu}
                </div>

            </div>


        );



    }

}

export default Menu;