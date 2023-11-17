import React, { useState } from "react";
import { Card, Col, Form, InputGroup, Nav, Row } from "react-bootstrap";
import { Link  } from 'react-router-dom';

export default function LogIn(props) {

    const [inputs, setInputs] = useState({ email: "", password: "" })

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }

    const handleSubmit = () => {
        // event.preventDefault();
        alert(inputs);
        fetch("http://localhost:8081/authenticate")
        .then(response => response.json())
        .then(json => props.setOwner({
            name: json.name,
            lastname: json.lastname,
            email: json.email,
            name: json.owner.name,
            surname: json.owner.surname
        }));
    }

    return (
        <>
            <Row className="d-flex justify-content-center p-3 pt-5">
            <Card className="max-width-50-rem p-0">
            <Card.Header className="text-center">Authentification</Card.Header>
                <Row className="pt-4 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Email</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpLogin"><i className="fa fa-user"></i></InputGroup.Text>
                            <Form.Control 
                                type="text"
                                aria-describedby="inpLogin"
                                placeholder="Please enter your email"
                                value={inputs.email}
                                onChange={form => setInputs({...inputs, email: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                        <output>Password</output>
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} md={{ offset: 0, span: 7 }} lg={7}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inpPassword"><i className="fa fa-key"></i></InputGroup.Text>
                            <Form.Control 
                                type="text" 
                                aria-describedby="inpPassword"
                                placeholder="Please enter your password"

                                value={inputs.password}
                                onChange={form => setInputs({...inputs, password: form.target.value})}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="pb-3 ps-3 pe-3">
                    <Col sm={{ offset: 1, span: 10 }} lg={4} className="p-1">
                        <Nav.Link 
                            variant="primary"
                            className="btn bg-black w-100 text-white"
                            as={Link} to="/agenda" 
                            onClick={handleSubmit}
                            // onClick={() => props.fetchOwner(inputs.login, fields.password)}
                        >
                            Connexion
                        </Nav.Link>
                        
                    </Col>
                    <Col sm={{ offset: 1, span: 10 }} lg={4} className="p-1">
                        <Nav.Link className="btn bg-black w-100 text-white">
                            Mot de passe oublié
                        </Nav.Link>
                    </Col>
                </Row>
            </Card>
        </Row>
        </>
    )
}