import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, Col, Button } from 'react-bootstrap';
import '../../App.css';
// import Nav from '../../components/Nav/Nav.jsx'
// import Welcome from '../../components/Welcome/Welcome.jsx'
// import CardsMain from '../../components/CardsMain/CardsMain.jsx'
// import Footer from '../../components/Footer/Footer.jsx'
// import sun from '../../Img/sun.png'
// import moon from '../../Img/moon.png'

class Home extends Component {
    state = {
        //  Temporary array before JSON data mapped from fetch.
        newData: [],
        // Dark mode state.
        open: false,
        mode: 'dark',
        mode2: 'darkNoText',
        // icon: moon,
        value: '',
        copied: false,
        show: 'Copy',
        showed: 'Copied'
    }

    toggleMode = () => {
        if (this.state.mode == 'light') {
            this.setState({
                mode: 'dark',
                mode2: 'darkNoText',
                icon: moon,
            })
        } else if (this.state.mode == 'dark') {
            this.setState({
                mode: 'light',
                mode2: 'lightNoText',
                icon: sun,
            })
        }
    }

    // Function: Sets state to data from backend Bug model.
    // Need arrow function to use setState.
    getAchievementList = () => {
        fetch("/backend/achievement-list")
            .then((response) => response.json())
            .then((data) => {
                this.setState ({
                    // "Bug" model data.
                    newData: data
                })
            })
    }

    // Function: Sends delete request to backend based on id.
    deleteCommandList  = (id) => {
        fetch('/backend/command-delete/' + id, {method: 'DELETE',})
            .then(res => {
                return res.json()
            }) 
            .then(window.location.reload())
    }

    componentDidMount() {
        this.getAchievementList();
    }

    render() {

        return (
            <div>
                { this.state.newData.map((list) => (
                    <Container>
                        <Card>
                            <Card.Header>
                                <p><b>Achievement:</b> {(list.description)}</p>
                                <p><b>Point(s):</b> {(list.point)}</p>
                                <p><b>Date:</b> {(list.date)}</p>
                            </Card.Header>
                        </Card>
                        <br></br>
                    </Container>
                ))}
            </div>
        )
    }
}

export default Home;