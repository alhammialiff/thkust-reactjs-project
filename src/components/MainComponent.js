// Main Component is the container component because it deals with the behaviour of the app

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';


import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


class Main extends Component {

    // To store state we need to define a constructor
    constructor(props) {

        super(props);

        // Set class state to store DISHES, essentially lifting the state up to MainComponent.js (Parent) so that
        // other components (children) may serve as presentation components 
        // Eg. Declaring dishes in this.state (below) makes it available for Menu component to use it as props
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
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
                // Filter dish, promotions and leaders based on featured bool value true
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotions={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        return (
            <div>

                {/* Header Component */}
                <Header />


                <Switch>
                    {/* component={HomePage} => Passing in components without props */}
                    <Route path="/home" component={HomePage} />
                    {/* 1. exact === exact match no more no less | 2. Use arrow function to pass props to Menu Component */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path="/contactus" component={Contact} />
                    {/* Anything that doesn't match the above will be redirected to Home */}
                    <Redirect to="/home" />
                </Switch>

                {/* [Commented] Menu Component */}
                {/* <Menu dishes={this.state.dishes} 
                      // Passing inline arrow func (this.onDishSelect(dishId)) as a prop 
                      onClick={(dishId) => this.onDishSelect(dishId)} /> */}

                {/* [Commented] Dish Details - with value of a filter function to filter out the selectedDish during onclick event */}
                {/* <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish? dish: null)[0]} /> */}

                {/* Footer Component */}
                <Footer />

            </div>
        );

    }

}

export default Main;
