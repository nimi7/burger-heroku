import React, { useEffect, useState, useContext } from 'react';
import Axios from 'axios';
import { AppContext } from "../src/context/appContext";
import { getAllGuides } from './api/index'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Card,Button} from 'react-bootstrap';

export default function GetData() {
    const appContext = useContext(AppContext);
    const [allBurgers, setallBurgers] = useState([]);
    getAllGuides.then(data => {
        console.log('data', data)
        setallBurgers(data)
    }).catch(err => {
        console.log(err)
    })




    return (
        <div>

            {allBurgers.map((props) => {
                return <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            })}

            <h1>This is get data</h1>

        </div>
    )
}


















