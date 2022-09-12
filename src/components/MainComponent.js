// Main Component is the container component because it deals with the behaviour of the app

import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    // To store state we need to define a constructor
    constructor(props) {

        super(props);

        // Set class state to store DISHES, essentially lifting the state up to MainComponent.js (Parent) so that
        // other components (children) may serve as presentation components 
        // Eg. Declaring dishes in this.state (below) makes it available for Menu component to use it as props
        this.state = {
            dishes: DISHES,
            // [Commented]
            // selectedDish: null
        };

    }

    // [Commented] Set state of selectedDish to a value (used for onClick event)
    // onDishSelect(dishId) {

    //     this.setState({
    //         selectedDish: dishId
    //     });

    // }

    render() {

        // [Debug]
        // console.log("In Main - dish", this.state.dishes.filter((dish) => dish.id === this.state.selectedDish? dish: null)[0]);

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>

                {/* Header Component */}
                <Header />


                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/* 1. exact === exact match no more no less | 2. Use arrow function to pass props to Menu Component */}
                    <Route exact path="/menu" component={() => <Menu dishes= {this.state.dishes} />} />
                    {/* Anything that doesn't match the above will be redirected to Home */}
                    <Redirect to="/home" />
                </Switch>

                {/* Menu Component */}
                {/* <Menu dishes={this.state.dishes} 
                      // Passing inline arrow func (this.onDishSelect(dishId)) as a prop 
                      onClick={(dishId) => this.onDishSelect(dishId)} /> */}

                {/* Dish Details - with value of a filter function to filter out the selectedDish during onclick event */}
                {/* <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish? dish: null)[0]} /> */}

                {/* Footer Component */}
                <Footer />

            </div>
        );

    }

}

export default Main;
