// Main Component is the container component because it deals with the behaviour of the app

import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {

    // To store state we need to define a constructor
    constructor(props) {

        super(props);

        // Set class state to store DISHES, essentially lifting the state up to App.js (Parent) so that
        // other components (children) can use it 
        // Eg. Declaring dishes in this.state (below) makes it available for Menu component to use it as props
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };

    }

    // Set state of selectedDish to a value (used for onClick event)
    onDishSelect(dishId) {

        this.setState({
            selectedDish: dishId
        });

    }

    render() {

        // [Debug]
        // console.log("In Main - dish", this.state.dishes.filter((dish) => dish.id === this.state.selectedDish? dish: null)[0]);
        
        return (
            <div>

                {/* Navbar Component */}
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>

                {/* Menu Component */}
                <Menu dishes={this.state.dishes} 
                      onClick={(dishId) => this.onDishSelect(dishId)} />

                {/* Dish Details - with value of a filter function to filter out the selectedDish during onclick event */}
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish? dish: null)[0]} />
            
            </div>
        );

    }

}

export default Main;
