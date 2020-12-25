// Imports from React, Components and Bootstrap
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Content } from './components/content';
import { Read } from './components/read';
import { Create } from './components/create';
import { Edit } from './components/edit';

// App Class - inherits from React.Component
class App extends React.Component {

  // Render Start
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navbar for all components */}
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">View Ads</Nav.Link>
              <Nav.Link href="/create">Make a new Ad</Nav.Link>
            </Nav>
          </Navbar>

          {/* Switch that manages the pages on the application */}
          <Switch>
            {/* Route to the home page with the Content component */}
            <Route path='/' component={Content} exact></Route>
            {/* Route to the create page with the Create Component */}
            <Route path='/create' component={Create}></Route>
            {/* Route to the read page with the Footer Component*/}
            <Route path='/read' component={Read}></Route>
            {/* Route to the edit page with the Edit Component*/}
            <Route path='/edit/:id' component={Edit}></Route>
          </Switch>
        </div>
      </Router>
    ); // Return end
  } // Render End
} // Class End

export default App;