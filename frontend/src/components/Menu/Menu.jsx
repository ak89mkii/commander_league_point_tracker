import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Col, Button } from 'react-bootstrap';
import '../../App.css';

class Menu extends Component {

    render() {

        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='title'>ComCard</Navbar.Brand>
                    <Navbar.Brand>
                    <iframe src="https://drive.google.com/file/d/1yZDexhHf40cvdd5Rw4gKTpeghAbtai3W/preview" width="640" height="100" allow="autoplay"></iframe>
                    <br></br>
                    <img
                        alt=""
                        src="https://cdn.chaoscards.co.uk/uploads/prod_img/2_93287_e.png?v=1592295420"
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                </Container>
                </Navbar>
            </div>
        )
    }
}

export default Menu;