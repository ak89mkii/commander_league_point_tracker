import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Card, Col, Row, Button, Dropdown, Toast } from 'react-bootstrap';
import '../../App.css';
import Reset from '../../components/Reset/Reset.jsx'
// import Footer from '../../components/Welcome/Welcome.jsx'
// import CardsMain from '../../components/CardsMain/CardsMain.jsx'
import Footer from '../../components/Footer/Footer.jsx'
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
    resetCard= () => {
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
            descriptionArr: this.state.descriptionArr.concat('[ END OF GAME # ' + this.state.incrementor + ' ]'), 
            incrementor: this.state.incrementor + 1});
            console.log(this.state.descriptionArr)        
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

    render() {

        return (
            <div>
                <Container>
                    <Toast onClose={() => setState({show: this.state.false})} show={show} delay={1000} autohide>
                        <Toast.Body>Added!</Toast.Body>
                    </Toast>
                </Container>
                { this.state.newData.map((list) => (
                <Container>
                <Card>
                    <Card.Header>
                    <Row>
                        <Col>
                            <p><b>Achievement:</b> {(list.description)}</p>
                            {/* <p><b>Date:</b> {(list.date)}</p> */}
                        </Col>
                        <Col>
                            <p><b>Point(s):</b> {(list.point)}</p>
                        </Col>
                        <Col>
                            <Button size="lg" variant="success" onClick={() => this.setState({points: this.state.points + list.point, descriptionArr: this.state.descriptionArr.concat(list.description), show: false})}><h1>+</h1></Button>
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
                    <Button 
                        variant="primary" 
                        onClick={this.handleTrackerSubmit}>Save List
                    </Button>
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