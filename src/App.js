import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component{

  // To store state we need to define a constructor
  constructor(props) {

    super(props);

    // Set class state to store DISHES, essentially lifting the state up to App.js (Parent) so that
    // other components (children) can use it 
    // Eg. Declaring dishes in this.state (below) makes it available for Menu component to use it as props
    this.state = {
      dishes: DISHES
    };

  }

  render() {
    return (
      <div>
        {/* Navbar Component */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>

        {/* Menu Component */}
        {/* dishes (below) is the props passed down by App.js */}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }

}

export default App;
