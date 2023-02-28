import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, Col, Button } from 'react-bootstrap';
import '../../App.css';
import Menu from '../../components/Menu/Menu.jsx'
import List from '../../components/List/List.jsx'

class Home extends Component {

    render() {

        return (
            <div>
                <Menu />
                <br></br>
                <List />
            </div>
        )
    }
}

export default Home;