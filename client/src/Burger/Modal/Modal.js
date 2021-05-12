import React, { Component, useState } from 'react';
import { CardDeck, Card, Alert, Button, Modal } from 'react-bootstrap'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
import { Salad } from '../Data_Extention/Extentions';
import { GiHamburger } from "react-icons/gi";

function ModalPage(props) {

    const { Salads, Sause, Bread, Drink, Extras, Pic, WitheDiscription, Rating, Price, Food, Salad, FinalCost } = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NotTaggle2 = () => {
        setShow(false);
        alert('Your Order get Secces Will be ready is 30 min ^_^')
    };
    //     <MDBBtn color="dark" onClick={() => toggle()}>
    //     Confirm order
    // </MDBBtn>
    //////////////////////////////////////
    {/* <MDBBtn color="secondary" onClick={() => NotTaggle()}>
Back
</MDBBtn> */}


    return (


        <div>



            <Button variant="primary" onClick={handleShow}>
                Confirm Your Order
      </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Order <GiHamburger />  <MDBIcon icon='utensils' /> </Modal.Title>
                </Modal.Header>
                <Modal.Body>      <h6> Salads: <ul class="list-disc">
                    <li>{Salads.map((props) => {
                        return `${props}/`
                    })}</li>

                </ul>
                </h6>
                    <h6> Sauses: <ul class="list-disc">

                        <li>{Sause.map((props, idx) => {

                            return `${props}`


                        })}</li>
                    </ul>
                    </h6>
                    <h6> Breads: <ul class="list-disc">
                        <li>{Bread.map((props) => {
                            return `${props},`
                        })}</li>
                    </ul>
                    </h6>
                    <h6> Drink: <ul class="list-disc">
                        <li>{Drink.map((props) => {
                            return `${props},`
                        })}</li>
                    </ul>
                    </h6>
                    <h6> Extras: <ul class="list-disc">
                        <li>{Extras.map((props) => {
                            return `${props},`
                        })}</li>
                    </ul>
                    </h6></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <form method='POST' action='/whatsapp'>
                        <label>
                            <input type="hidden" value={Food} name="Food" />
                            <input type="hidden" value={Salads} name="Salads" />
                            <input type="hidden" value={Sause} name="Sause" />
                            <input type="hidden" value={Bread} name="Bread" />
                            <input type="hidden" value={Drink} name="Drink" />
                            <input type="hidden" value={Extras} name="Extras" />
                            <input type="hidden" value={FinalCost} name="FinalCost" />

                        </label>
                        <Button color="primary" type='submit' onClick={() => NotTaggle2()} >Click To Complete Order</Button>
                    </form>
                </Modal.Footer>
            </Modal>




        </div>


    );

}

export default ModalPage;


//7365339b-340e-4356-9d08-79ef3cd679a8sss




// <CardDeck>
// <Card >
//     <div className='grid grid-cols-2 '>
//         <div >

//             <Card.Img variant="top" src={Pic} />
//             <h6 className=' italic text-gray-500 line-clamp-2 hover:line-clamp-none'>
//                 {WitheDiscription}
//             </h6>

//         </div>
//         <div >
//             <Card.Body>
//                 <Card.Title>

//                     <h5 className='text-pink-500'>
//                         <MDBIcon icon='utensils' /> Your Order :
//               </h5>

//                     <h6> Salads: <ul class="list-disc">
//                         <li>{Salads.map((props) => {
//                             return `${props}/`
//                         })}</li>

//                     </ul>
//                     </h6>
//                     <h6> Sauses: <ul class="list-disc">

//                         <li>{Sause.map((props, idx) => {

//                             return `${props}`


//                         })}</li>
//                     </ul>
//                     </h6>
//                     <h6> Breads: <ul class="list-disc">
//                         <li>{Bread.map((props) => {
//                             return `${props},`
//                         })}</li>
//                     </ul>
//                     </h6>
//                     <h6> Drink: <ul class="list-disc">
//                         <li>{Drink.map((props) => {
//                             return `${props},`
//                         })}</li>
//                     </ul>
//                     </h6>
//                     <h6> Extras: <ul class="list-disc">
//                         <li>{Extras.map((props) => {
//                             return `${props},`
//                         })}</li>
//                     </ul>
//                     </h6>
//                 </Card.Title>

//             </Card.Body>

//         </div>

//     </div>



//     <Card.Footer>
//         <h6>Total Pay : {`${FinalCost}₪`}</h6>
//         <small className="text-muted">  Rating :   {[0, 1, 2, 3, 4].map((i) => {
//             if (Number(Rating) > i)
//                 return (
//                     <span >☆</span>
//                 );
//             else {
//                 return (
//                     <div></div>
//                 )
//             }
//         })}</small>
//     </Card.Footer>
// </Card>


// </CardDeck>


///////////////////////////////////////////////////////////////////////////
{/* <form method='POST' action='/whatsapp'>
<label>
    <input type="hidden" value={Food} name="Food" />
    <input type="hidden" value={Salads} name="Salads" />
    <input type="hidden" value={Sause} name="Sause" />
    <input type="hidden" value={Bread} name="Bread" />
    <input type="hidden" value={Drink} name="Drink" />
    <input type="hidden" value={Extras} name="Extras" />
    <input type="hidden" value={FinalCost} name="FinalCost" />

</label>
<MDBBtn color="primary" type='submit' onClick={() => NotTaggle2()} >Click To Complete Order</MDBBtn>
</form> */}