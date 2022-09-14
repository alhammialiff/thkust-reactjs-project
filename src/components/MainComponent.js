// Main Component is the container component because it deals with the behaviour of the app

import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

// [Commented] Redux is used instead as the point of commenting
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';

// Redux states - From this point onwards, this.state.x becomes this.props.x
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {

    // To store state we need to define a constructor
    constructor(props) {

        super(props);

        // [Commented] Set class state to store DISHES, essentially lifting the state up to MainComponent.js (Parent) so that
        // other components (children) may serve as presentation components 
        // Eg. Declaring dishes in this.state (below) makes it available for Menu component to use it as props
        // Commented to make way for redux implementation
        // this.state = {

        //     dishes: DISHES,
        //     comments: COMMENTS,
        //     promotions: PROMOTIONS,
        //     leaders: LEADERS
        //     [Commented]
        //     selectedDish: null
        // };

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
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leaders={this.props.leaders.filter((leader) => leader.featured)[0]}
                />

            );
        }

        const DishWithId = ({ match }) => {

            console.log("In DishWithId - match:", match);

            return (
                <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                />
            );

        }

        return (
            <div>

                {/* Header Component */}
                <Header />

                {/* Routes in switch should be listed in sequence of match */}
                <Switch>
                    {/* Home - component={HomePage} => Passing in components without props */}
                    <Route path="/home" component={HomePage} />

                    {/* About Us - pass this.state.leaders as props to AboutComponent.js*/}
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />

                    {/* Menu - 1. exact = exact match | 2. Use arrow function to pass props to Menu Component */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />

                    {/* Menu /w Params - Route path with param that calls DishWithId functional component */}
                    <Route path="/menu/:dishId" component={DishWithId} />

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

// Export with Redux withRouter(connect(mapStateToProps)(Main))
export default withRouter(connect(mapStateToProps)(Main));
