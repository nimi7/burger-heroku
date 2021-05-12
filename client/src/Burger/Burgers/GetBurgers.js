import React, { useState } from 'react';
import { Button, Card, Media, Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Carusela from '../Carusela/Carusela';


import { getAllGuides } from '../../api/index'


export default function GetBUrgers() {

    const [allBurgers, setallBurgers] = useState([]);
    console.log('process.env.URI', process.env.URI)
    console.log('process.env.PORT', process.env.PORT)
    getAllGuides.then(data => {
        console.log('data', data)
        setallBurgers(data)
    }).catch(err => {
        console.log(err)
    })

    const isLoaded = () => {
        window.scroll(0, 0);
    }








    return (
        <div>
            <form method='POST' action='/Burgers'>

                    <input type='text' name="Food"  placeholder="Food"/>
                    <input type="text" name="Discription" placeholder="Discription"/>
                    <input type="text" name="WitheDiscription" placeholder="WitheDiscription" />
                    <input type="text" name="Pic" placeholder="Pic"/>
                    <input type="Number" name="Price" placeholder="Price"/>
                    <input type="text" name="Rating" placeholder="Rating" />
                    <button type='submit' value='creat'/>
            </form>

            <Carusela />


            <div className='display: grid  '>


                <Col className=' grid-template-columns: auto auto' sm={4}>

                    {allBurgers.map((props) => {

                        return <Card >
                            <Card.Img variant="top" src={props.Pic} />
                            <Card.Body>
                                <Card.Title><Link onClick={isLoaded} to={{
                                    pathname: `/Burgers/${props._id}`,
                                    state: {
                                        Food: props.Food,
                                        Discription: props.Discription,
                                        WitheDiscription: props.WitheDiscription,
                                        Pic: props.Pic,
                                        Price: props.Price,
                                        Rating: props.Rating

                                    },
                                }}
                                > <h5>{props.Food}</h5></Link></Card.Title>
                                <Card.Text>
                                    <h6>{`${props.Price}₪`}</h6>
                                    <h6>  Rating :   {[0, 1, 2, 3, 4].map((i) => {
                                        if (Number(props.Rating) > i)
                                            return (
                                                <span >☆</span>
                                            );
                                        else {
                                            return (
                                                <div></div>
                                            )
                                        }
                                    })}</h6>
                                    <h6>{props.WitheDiscription}</h6>

                                </Card.Text>

                            </Card.Body>
                        </Card>




                    })}
                </Col>

















            </div>
        </div >

    )
}

