import React, {useState, useEffect} from "react"
import {Container, Form, Row, Col, Button, Table} from "react-bootstrap"

function Home() {

    useEffect(() => {
        document.body.style.backgroundColor = "#FFC107";
    }, [])

    return(
        <Container>
            <section id="header">
                <div className="text-center p-5">
                    <h1>REPOSITORIES RETRIEVER</h1>
                </div>
                <hr></hr>
            </section>

            <section id="input-user">
                <div className="mb-3 p-3">
                    <Form>
                        <Form.Label className="d-flex">Github Username</Form.Label>
                        <Row>
                            <Col md={10} xs={8}>
                                <Form.Group className="mb-3">
                                    
                                    <Form.Control type="text" placeholder="Enter username.."/>
                                </Form.Group>
                            </Col>
                            <Col md={2} col={4} >
                                <Button variant="primary" type="submit">SUBMIT</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                
                <hr></hr>
            </section>

            <section id="content">
                <div className="d-flex mb-3">
                    <h3>LIST OF PUBLIC REPOSITORIES</h3>
                </div>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>URL</th>
                        <th>Created_At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Argon Assault</td>
                            <td>Unity</td>
                            <td>https://github.com/rezanasu/Argon_Assault</td>
                            <td>https://github.com/rezanasu/Argon_Assault</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Project-Boost</td>
                            <td>Unity</td>
                            <td>https://github.com/rezanasu/Project-Boost</td>
                            <td>https://github.com/rezanasu/Argon_Assault</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Realm-Rush</td>
                            <td>Unity</td>
                            <td>https://github.com/rezanasu/Realm-Rush</td>
                            <td>https://github.com/rezanasu/Argon_Assault</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Realm-Rush</td>
                            <td>Unity</td>
                            <td>https://github.com/rezanasu/Realm-Rush</td>
                            <td>https://github.com/rezanasu/Argon_Assault</td>
                          </tr>
                    </tbody>
                </Table>
            </section>
        </Container>
    );
}

export default Home;