import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, Col, Row, Button, Dropdown, Alert } from 'react-bootstrap';
import '../../App.css';
import Reset from '../../components/Reset/Reset.jsx'
import Save from '../../components/Save/Save.jsx'
// import CardsMain from '../../components/CardsMain/CardsMain.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import qr from '../../Img/01.png'
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
        descriptionArr: [],
        incrementor: 1,
        check: 0,
        show: false,  
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

    // // Function: Sends delete request to backend based on id.
    // deleteCommandList  = (id) => {
    //     fetch('/backend/command-delete/' + id, {method: 'DELETE',})
    //         .then(res => {
    //             return res.json()
    //         }) 
    //         .then(window.location.reload())
    // }

    // Function: Save list to local storage:
    resetCard = () => {
        this.setState({
            points: 0,
            descriptionArr: [],
            incrementor: 1,
            check: 0,
            show: false
        })
    }

    // Function: Update Card State
    updateCard = () => {
        this.setState({
            show: false,
            descriptionArr: this.state.descriptionArr.concat('[ END OF GAME # ' + this.state.incrementor + ' | ' + this.state.points + ' earned achievement point(s) ]'), 
            incrementor: this.state.incrementor + 1,
            points: 0,
        });
            // console.log(this.state.descriptionArr)        
        this.handleTrackerSubmit();
    }

    // Function: Save list to local storage:
    handleTrackerSubmit = () => {
        localStorage.setItem('check', 1);
        localStorage.setItem('points', this.state.points);
        localStorage.setItem('descriptionArr', JSON.stringify(this.state.descriptionArr));
        localStorage.setItem('incrementor', this.state.incrementor);
    };

    // Function: Retrieve saved list from local storage:
    componentDidMount() {
        this.getAchievementList();
        const check = localStorage.getItem('check');
        this.setState({ check });

        if (check == 1) {
            const points = localStorage.getItem('points');
            this.setState({points: JSON.parse(points)});
            const descriptionArr = localStorage.getItem('descriptionArr');
            this.setState({descriptionArr: JSON.parse(descriptionArr)});
            const incrementor = localStorage.getItem('incrementor');
            this.setState({incrementor: JSON.parse(incrementor)});
        }
    }

    componentDidUpdate() {
        if (this.state.show == true) {
            clearTimeout(this.timer);
            this.timer = setTimeout(() => this.setState({show: false}), 5000)
        }
    }

    render() {
        return (
            <div> 
                <h2 className='addAlert'>
                    <Alert show={this.state.show} onClose={() => this.setState({show: false})}>
                        Added &quot;{this.state.descriptionArr[this.state.descriptionArr.length -1]}&quot; to list.
                    </Alert>
                </h2>
                <Container className='center'>
                <img
                    alt=""
                    src={qr}
                    width="120"
                    height="120"
                    className="qRCode"
                />{' '}
                </Container>
                <br></br>
                <br></br>
                <Container>
                <h1>Standard Achievements</h1>
                </Container>

                { this.state.newData.filter(list => list.vote === false).map((list) => (
                <Container>
                <Card>
                    <Card.Header>
                    <Row>
                        <Col>
                            <p><b>Achievement:</b> {(list.description)}</p>
                            {/* <p><b>Date:</b> {(list.date)}</p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><h4>{(list.point)} point(s)</h4></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                        <div className="d-grid gap-2">
                            <Button size="md" variant="success" onClick={() => this.setState({points: this.state.points + list.point, descriptionArr: this.state.descriptionArr.concat(list.description), show: true})}><h1>+</h1></Button>
                        </div>
                        </Col>
                    </Row>
                    </Card.Header>
                </Card>
                <br></br>
                </Container>
                ))}
                <br></br>
                <br></br>
                <Container>
                <h1>Voting Achievements</h1>
                </Container>
                { this.state.newData.filter(list => list.vote === true).map((list) => (
                <Container>
                <Card bg='info'>
                    <Card.Header>
                    <Row>
                        <Col>
                            <p><b>Achievement:</b> {(list.description)}</p>
                            {/* <p><b>Date:</b> {(list.date)}</p> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><h4>{(list.point)} point(s)</h4></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col> 
                        <div className="d-grid gap-2">
                            <Button size="md" variant="success" onClick={() => this.setState({points: this.state.points + list.point, descriptionArr: this.state.descriptionArr.concat(list.description), show: true})}><h1>+</h1></Button>
                        </div>
                        </Col>
                    </Row>
                    </Card.Header>
                </Card>
                <br></br>
                </Container>
                ))}
                <Container className='center'>
                <Card style={{ width: '18rem', textAlign: 'center' }}>
                    <Card.Img variant="top" src="https://cdn.chaoscards.co.uk/uploads/prod_img/2_93287_e.png?v=1592295420" />
                    {/* <Card.Img variant="top" src="http://media.wizards.com/2016/images/daily/MM20161114_Wheel.png" /> */}
                    <Card.Body>
                        <Card.Title>League Match Points Tracker</Card.Title>
                        <Dropdown.Divider />
                        <Card.Text>
                            <h1>{this.state.points}</h1>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        { this.state.descriptionArr.map((text) => (
                        <small className="text-muted"><p>{(text)}</p></small>
                        ))}
                    </Card.Footer>
                    </Card>
                </Container>
                <br></br>
                <Container className='center'>
                    <Button 
                        variant="dark" 
                        onClick={this.updateCard}>End Round
                    </Button>
                </Container>
                <br></br>
                <Container className='center'>
                    <Save
                        handleTrackerSubmit={this.handleTrackerSubmit}
                    />
                </Container>
                <br></br>
                <Container className='center'>
                    <Reset 
                        resetCard={this.resetCard}
                    />
                </Container>
                <br></br>
                {/* <Container> */}
                    <Footer />
                {/* </Container> */}
            </div>
        )
    }
}

export default List;