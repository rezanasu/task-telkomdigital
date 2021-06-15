import React, {useState, useEffect} from "react";
import {Container, Form, Row, Col, Button, Table} from "react-bootstrap";
import axios from "../API/axios";
import moment from "moment";
import Swal from "sweetalert2";

function Home() {
    const [username, setUsername] = useState("");
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = "#E1E8EB";
    }, [])

    const fetchRepo = () => {
        axios({
            method: "GET",
            url: `/users/${username}/repos`,
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        })
        .then(response => {
            const data = response.data;
            setRepos(data);
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Repositories Found',
              })
        })
        .catch(err => {
            console.log(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Repositories Not Found',
              })
        })
    }

    const handleUsername = (event) => {
        event.preventDefault();
        fetchRepo();
    } 

    return(
        <Container>
            <section id="header">
                <div className="text-center p-5">
                    <h1>GITHUB REPOSITORIES</h1>
                </div>
                <hr></hr>
            </section>

            <section id="input-user">
                <div className="mb-3 pt-3 pb-3">
                    <Form onSubmit={(event) => handleUsername(event)}>
                        <Form.Label className="d-flex">Github Username</Form.Label>
                        <Row>
                            <Col md={10} xs={8}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter username.." onChange={(event) => setUsername(event.target.value)}/>
                                </Form.Group>
                            </Col>
                            <Col md={2} xs={4} >
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
                        {
                            repos.map((repo, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{repo.name}</td>
                                        <td>{repo.description}</td>
                                        <td>{repo.html_url}</td>
                                        <td>{moment(repo.created_at).format("MMMM Do YYYY")}</td>
                                    </tr>
                                )
                            })
                        }   
                    </tbody>
                </Table>
            </section>
        </Container>
    );
}

export default Home;