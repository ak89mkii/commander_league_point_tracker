import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../App.css';
// import Nav from '../../components/Nav/Nav.jsx'
// import Welcome from '../../components/Welcome/Welcome.jsx'
// import CardsMain from '../../components/CardsMain/CardsMain.jsx'
// import Footer from '../../components/Footer/Footer.jsx'
// import sun from '../../Img/sun.png'
// import moon from '../../Img/moon.png'

class Home extends Component {
    state = {
        // open: false,
        // mode: 'dark',
        // mode2: 'darkNoText',
        // cardMode: 'light',
        // icon: moon,
        // show: false
    }

    render() {

        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

export default Home