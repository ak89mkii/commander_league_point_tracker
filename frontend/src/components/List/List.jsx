import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, Col, Row, Button, Dropdown, Alert } from 'react-bootstrap';
import '../../App.css';
// import Nav from '../../components/Nav/Nav.jsx'
// import Welcome from '../../components/Welcome/Welcome.jsx'
// import CardsMain from '../../components/CardsMain/CardsMain.jsx'
// import Footer from '../../components/Footer/Footer.jsx'
// import sun from '../../Img/sun.png'
// import moon from '../../Img/moon.png'

class List extends Component {
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
        showed: 'Copied',
        points: 0,
        descriptionArr: ['goku', 'tifa'],
        incrementor: 1
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
                    <Row>
                        <Col>
                            <p><b>Achievement:</b> {(list.description)}</p>
                            <p><b>Date:</b> {(list.date)}</p>
                        </Col>
                        <Col>
                            <p><b>Point(s):</b> {(list.point)}</p>
                        </Col>
                        <Col>
                            <Button onClick={() => this.setState({points: this.state.points + list.point, descriptionArr: this.state.descriptionArr.concat(list.description)})}>Add</Button>
                        </Col>
                    </Row>
                    </Card.Header>
                </Card>
                <br></br>
                </Container>
                ))}
                <Container className='center'>
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img variant="top" src="http://media.wizards.com/2016/images/daily/MM20161114_Wheel.png" />
                    <Card.Body>
                        <Card.Title>Total Points Tracker</Card.Title>
                        <Dropdown.Divider />
                        <Card.Text>
                            <h1>{this.state.points}</h1>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        { this.state.descriptionArr.map((goku) => (
                        <small className="text-muted"><p>{(goku)}</p></small>
                        ))}
                    </Card.Footer>
                    </Card>
                </Container>
                <br></br>
                <Container className='center'>
                    <Button variant="primary" onClick={() => this.setState({descriptionArr: this.state.descriptionArr.concat(<h5>- End of Game {this.state.incrementor} -</h5>), incrementor: this.state.incrementor + 1})}>Save | Set Round</Button>
                </Container>
            </div>
        )
    }
}

export default List;