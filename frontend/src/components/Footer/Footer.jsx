import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Col, Button } from 'react-bootstrap';
import '../../App.css';

class Footer extends Component {

    render() {

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Container>          
                    <Navbar.Text>
                        <a href='https://commander-league-point-tracker.herokuapp.com/admin/'>
                        <Button variant='secondary'>Admin Login</Button>  
                        </a>
                        <br></br>     
                        <br></br>
                        <p className='footer'>© 2023, ComCard | Ponder Code | Ponder Enterprises LLC</p>   
                    </Navbar.Text>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer;