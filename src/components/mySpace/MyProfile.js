import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

export default function MyProfile() {

    const user = JSON.parse(localStorage.getItem("user"));

  return (
      <>
        <div className="vh-100" >
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="5" className="mt-5">
                        <Card style={{ borderRadius: '15px' }}>
                            <Card.Body className="p-4">
                                {/* <div className="d-flex text-black"> */}
                                    {/* <div className="flex-shrink-0"> */}
                                        {/* <Card.Image
                                        style={{ width: '180px', borderRadius: '10px' }}
                                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                                        alt='Generic placeholder image'
                                        fluid /> */}
                                    {/* </div> */}
                                    {/* <div className="flex-grow-1 ms-3"> */}
                                        <Card.Title>{user && user.name ? `${user.name} ${user.lastname}` : "" }</Card.Title>
                                        <Card.Text>{user && user.email ? `${user.email}` : "" }</Card.Text>
{/* 
                                        <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                        style={{ backgroundColor: '#efefef' }}>
                                            <div>
                                                <p className="small text-muted mb-1">Articles</p>
                                                <p className="mb-0">41</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="small text-muted mb-1">Followers</p>
                                                <p className="mb-0">976</p>
                                            </div>
                                            <div>
                                                <p className="small text-muted mb-1">Rating</p>
                                                <p className="mb-0">8.5</p>
                                            </div>
                                            </div>
                                            <div className="d-flex pt-1">
                                                <Button outline className="me-1 flex-grow-1">Chat</Button>
                                                <Button className="flex-grow-1">Follow</Button>
                                        </div>
                                    </div>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}