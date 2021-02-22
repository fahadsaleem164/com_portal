import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert , Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"


class EditEvent extends Component {
    constructor() {
        super()    
        this.state = {

             msg: ''
        }
       

    }

    handleSubmit(event){

        alert()

    }



    render() {
      
        return (

            <Container>
                <h1 style={{textAlign:'center'}}>Edit Event</h1>
                    <Form name="event form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                        
                        <p>{this.state.msg}</p>
                          
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                            Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="password" placeholder="" name="name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Description
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Start Date
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="Date" placeholder="" name="start_date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            End Date
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="Date" placeholder="" name="end_date" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Orgnization
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="orgnization" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contact Details
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="contact_details" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Contact Person
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="contact_person" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Venue
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="Venue" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Phone#
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="phone" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            Mobile
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="" name="mobile" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            website
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="url" placeholder="" name="website" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                            </Form.Label>
                            <Col sm="10">
                           
                            <Button as="input" type="submit" variant="success" className="float-right" value="Reset" />

                            </Col>
                        </Form.Group>

                    </Form>
            </Container>


        );
    }
}

export default EditEvent;