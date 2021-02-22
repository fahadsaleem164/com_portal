import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert , Form , FormControl , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"


class Event extends Component {

    constructor() {
        super() 

        this.state = {

             msg: '' ,
             name : '' , last_name: '' , email: '', message : ''
        }
       

    }

    handleSubmit(event){

        alert()

    }

    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
      }


      handleSubmit(event) {

      
        event.preventDefault()
        const formData = {}
        var fd = new FormData();
        // fd.append('form-name','Contact Form')
        // fd.append( 'name', this.state.name);
        // fd.append( 'last_name', this.state.last_name);
        // fd.append( 'email', this.state.email);
        // fd.append( 'message', this.state.message);

        
        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }
       
       
        // Object.keys(this.domRef.current.value).map(key => (formData[key] = this.domRef.current.value))
      
        // Set options for axios. The URL we're submitting to
        // (this.props.location.pathname) is the current page.
        const axiosOptions = {
          url: 'https://strapi-postgres-demo-abc.herokuapp.com/contacts',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData)
        }
      
        // Submit to Netlify. Upon success, set the feedback message and clear all
        // the fields within the form. Upon failure, keep the fields as they are,
        // but set the feedback message to show the error state.
        axios(axiosOptions)
          .then(response => {
            console.log(this.state.email)
            const res =  fetch('api/send_email?email='+this.state.email)


            this.setState({
              feedbackMsg: "Form submitted successfully!",
              name: '',
              last_name : '',
              email: '',
              message : '',

            })
            // this.domRef.current.reset()
          })
          .catch(err =>
            console.log(err)
            // this.setState({
            //   f.",
            // })
          )
      }
  



    render() {
      
        return (

            <Container>
                <h1 style={{textAlign:'center'}}>Add Event</h1>
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
                            <Button as="input" type="reset" variant="light" value="Reset" />
                            <Button as="input" type="submit" variant="success" className="float-right" value="Reset" />

                            </Col>
                        </Form.Group>

                    </Form>
            </Container>


        );
    }
}

export default Event