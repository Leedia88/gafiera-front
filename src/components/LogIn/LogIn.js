import React, { useState, useContext } from "react";
import { Container, Card, Col, Form, InputGroup, Nav, Row, Button } from "react-bootstrap";
import { Link  } from 'react-router-dom';
import { UserContext } from "./UserDetails";

export default function LogIn(props) {

    const {user, setUser } = useContext(UserContext);

    const [inputs, setInputs] = useState({ email: "", password: "" })

    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    // }

    const handleSubmit = () => {
        // event.preventDefault();
        fetch("http://localhost:8081/api/users/login",
            {//mode: 'cors',
            method: "post",
            headers: {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: inputs.email, password: inputs.password})
             })
        .then(response => response.json())
        .then(json =>{ 
            setUser({
                                id: json.id,
                                name: json.name,
                                lastname: json.lastName,
                                email: json.email,
                                    })
                    });
            
                };
    
      // function fetchUser(email,password){
  //   // event.preventDefault();
  //   fetch("http://localhost:8081/api/users/login",
  //       {//mode: 'cors',
  //       method: "post",
  //       headers: {
  //            "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ email: email, password: password})
  //        })
  //   .then(response => response.json())
  //   .then(json =>{ 
  //       setUser({
  //                           id: json.id,
  //                           name: json.name,
  //                           lastname: json.lastName,
  //                           email: json.email,
  //                               })
  //               });
        
  //           };

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center p-3 pt-5">
                <Card className="max-width-50-rem p-0">
                <Card.Header className="text-center">Authentification</Card.Header>
                    <Row className="mx-5 pt-4 ps-3 pe-3">
                        {/* <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Email</output>
                        </Col> */}
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
                    <Row className="mx-5 ps-3 pe-3">
                        {/* <Col sm={{ offset: 1, span: 10 }} md={3} lg={2}>
                            <output>Password</output>
                        </Col> */}
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
                            <Button variant="primary">
                                <Nav.Link 
                                    
                                    // className="btn bg-black w-100 text-white"
                                    as={Link} to="/agenda" 
                                    onClick={handleSubmit}
                                    // onClick={() => props.fetchUser(inputs.email, inputs.password)}
                                >
                                    Log in
                                </Nav.Link>
                            </Button>
                            <Nav.Link 
                                className="pt-3"
                                >
                                Forgot your password?
                            </Nav.Link>
                        </Col>

                    </Row>
                </Card>
            </Row>
            </Container>
            
        </>
    )
}