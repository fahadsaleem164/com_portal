import React, { Component } from 'react';
import styles from './main_header.css'
import { BrowserRouter as Router , Route , Link } from "react-router-dom";
import Event from '../components/events/add'
import GetAllEvents from '../components/events/get_all'
import EditEvent from '../components/events/edit'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Form , FormControl , Button} from 'react-bootstrap'

class MainHeader extends Component {

    render() {

        return (

             <Router>
                    <Navbar bg="dark" variant="dark">
                        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                        <Nav className="mr-auto">
                        <Nav><Link to='/event'>Event</Link></Nav>
                      
                        </Nav>
                      
                        
                      
                    </Navbar>
                      
                    <Route exact path="/edit_event" component={EditEvent}/>
                      <Route exact path="/all_events" component={GetAllEvents}/>
                      <Route exact path="/event" component={Event}/>

             </Router>
        
            );
    }

}

export default MainHeader;