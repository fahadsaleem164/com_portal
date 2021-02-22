import React, {Component, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Table , Alert , Form , FormControl ,Modal , Button} from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"



class GetAll extends Component {
    constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
		};
	}

    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
        
    
    render() {



        return (
            <div>
               <div> 
                   <Container fluid >
                    <h1 style={{textAlign:'center'}}>All Events</h1>
 
                    <Table responsive="lg">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Orgnization</th>
                            <th>Contact Details</th>
                            <th>Contact Person</th>
                            <th>Venue</th>
                            <th>Phone#</th>
                            <th>Mobile</th>
                            <th>website</th>
                            <th>Delete</th>
                            
                  
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td><a style={{cursor:'pointer'}} variant="primary" onClick={this.handleShow}>
					                Delete
                                </a>
                            </td>
                            
                        </tr>
                      
                      
                        </tbody>
                    </Table>

                    <Modal show={this.state.show} onHide={this.handleClose}>
					
					<Modal.Body style={{textAlign:'center'}}>Are You Sure You Want to delete this?</Modal.Body>
					<Modal.Footer>
						<Button  variant="secondary" onClick={this.handleClose}>
							No
                        </Button>
                                    <Button variant="danger" onClick={this.handleClose}>
                                      Yes
                        </Button>
					</Modal.Footer>
				</Modal>
                    


                    </Container>
  
            </div>
        </div>
        );
    }
}

export default GetAll;