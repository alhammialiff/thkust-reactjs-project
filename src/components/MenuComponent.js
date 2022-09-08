import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';


class Menu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log("Menu Component componentDidount is invoked")
    }

    // Set state of selectedDish to a value (used for onClick event)
    onDishSelect(dish) {

        this.setState({ 
            selectedDish: dish
        });

    }

    // 
    renderDish(dish) {

        // If dish is null (or not selected/clicked), return div will be empty
        if (dish != null) {
            console.log("Dishdetail is invoked");
            return (
                // [Commented] Card here
                // <Card>
                //     <CardImg top width="100%" src={dish.image} alt={dish.name} />
                //     <CardBody>
                //         <CardTitle>{dish.name}</CardTitle>
                //         <CardText>{dish.description}</CardText>
                //     </CardBody>
                // </Card>

                // Dishdetail Component with 'dish' prop here
                <Dishdetail dish={dish} />


            );

        } else {

            return (
                <div></div>
            );

        }
    }

    render() {

        // Making use of menu var to create component for each dish in this.state
        const menu = this.props.dishes.map((dish) => {

            return (

                // key props helps React recognise each element to be rendered uniquely
                <div className="col-12 col-md-5 m-1">
                    {/* Card */}
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
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

                <div className="row">
                    {/* this component will be displayed conditionally */}
                    {this.renderDish(this.state.selectedDish)}
                </div>

            </div>


        );



    }

}

export default Menu;