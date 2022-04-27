import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Layout from '../Layout';
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
import { GiCometSpark } from 'react-icons/gi';
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const FProduct = ({ posts }) => {
    const [qty, setqty] = useState("");
    // const options = [
    //     {
    //       label: "10",
    //       value: 10,
    //     },
    //     {
    //       label: "20",
    //       value: 20,
    //     },
    //     {
    //       label: "30",
    //       value: 30,
    //     },
    //   ];

    const AddToCart = id => {
        // id.preventDefault();
        var rows = []
        for (var i = 0; i < posts.length; i++) {
            if (id === posts[i]._id) {
                rows.push(posts[i])
            }
            // console.log(posts[i]._id)
        }
        const formData = new FormData();
        setqty("");
        for (var j = 0; j < rows.length; j++) {
            // const qty = e.target.attributes.getNamedItem("data-id").value;
            const user = localStorage.getItem('user')
            const ema = JSON.parse(user).email
            formData.append("customer_email", ema)
            formData.append("product_name", rows[j].product_name)
            formData.append("product_type", rows[j].product_type)
            formData.append("farmer_name", rows[j].farmer_email)
            formData.append("price", rows[j].price)
            formData.append("date", rows[j].date)
            formData.append("description", rows[j].description)
            formData.append("product_image", rows[j].product_image)
            formData.append("quantityByCustomer", qty)
        }
        // console.log(formData)
        axios.post("http://localhost:8000/AddToCart/cart", formData)
            .then((res) => alert("Product added to cart successfully..."))
            .catch((err) => {
                console.log(err);
            });

    }
    try {
        const user = localStorage.getItem('user')
        const ema = JSON.parse(user).email

        return (
            <MainContainer>
                <Layout sidebar>
                    <div className="row">
                        <div className="col-md-4">
                            <h1><i><strong>Your Product List:</strong></i></h1>
                        </div>
                    </div>
                    <div className="grid">{posts.map((FProducts, key) => (

        <CardDeck>
                        <Card key={key} bg='dark' border='danger' style={{ height: '500px', width: '238px', color: 'whitesmoke', textAlign: 'left' }} >
                            <Card.Img variant="top" src={`../../uploads/${FProducts.product_image}`} style={{ height: '200px', width: '235px' }} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bolder' }}><em>{FProducts.product_name}</em></Card.Title>
                                <Card.Text>
                                    <p><strong>Type: </strong>{FProducts.product_type}
                                        {/* <br></br>
                                        <strong>Total Quantity: </strong>{FProducts.qty} Kgs */}
                                        <br></br>
                                        <strong>Price: </strong>{FProducts.price} Rs/Kg
                                        <br></br>
                                        <strong>Date: </strong>{FProducts.date}
                                        <br></br>
                                        <strong>Description: </strong>{FProducts.description}</p>
                                        <label htmlFor="quantityByCustomer">Quantity :</label>

                                        <select name="qty" id="qty" onChange={e=> setqty(e.target.value)} required>
                                        <option type="Number"  >-</option>
                                        <option type="Number"  value={0.250}>0.25</option>
                                        <option type="Number"  value={0.5}>0.5</option>
                                        <option type="Number"  value={1}>1</option>
                                        <option type="Number"  value={2}>2</option>
                                        <option type="Number"  value={3}>3</option>
                                        <option type="Number"  value={4}>4</option>
                                        <option type="Number"  value={5}>5</option>
                                        <option type="Number"  value={10}>10</option>
                                        <option type="Number"  value={15}>15</option>
                                        <option type="Number"  value={20}>20</option>
                                        <option type="Number"  value={50}>50</option>
                                        </select>
                                </Card.Text>
                            </Card.Body>


                            <Shot>
                            <Link onClick={() => AddToCart(FProducts._id)}
                            classsName="btn btn-outline-success" >
            <FontAwesomeIcon icon={faCartPlus} />
                        </Link>
                            {/* <a href={`/update-product/${FProducts._id}`}
                                classsName="btn btn-outline-success" style = {{color :'darkblue'}} >
                                
                                <FontAwesomeIcon icon={faCartPlus} />
                            </a> */}
                            </Shot>

                        

                        </Card>
                        <p style={{ color: 'white' }}>FCCFCC</p>
                        {/* <p>        </p> */}
                    </CardDeck>



            //     <div className="row my-3">
            //         <div className="col-sm-3" >
            //         {/* <Link to={`/cart`}> */}
            //             <Button onClick={() => AddToCart(FProducts._id)}
            //                 classsName="btn btn-warning" >
            // Add to cart
            //             </Button>
          
            
            ))}
            </div>
        </Layout >
            </MainContainer >
        )
    }
    catch {
        return (
            window.location = '/'
        )
    }


}

export default FProduct

// Main container
const MainContainer = styled.div`
margin-top: 5rem;
margin-left:7rem;
margin-right:7rem;

.card{
    margin: 10px;
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
   
}
.grid{
    min-height: 100%;
    margin-left: 5%;
    padding:10px;
    height: 30vh;
    display: flex;
    flex-wrap:wrap;
}

.dispnone{
    display:none;
}
h1{
    color: #1a237e;
}
.des{
    text-align:left;
    padding-left:40px
}
.imal{
    margin-left:15px;
 }
`;

const Button = styled.button`
{background-color: #d50000;
padding-left: 37px;
padding-right: 37px;
padding-top: 5px;
padding-bottom: 5px;
color: white;
border-radius: 5px;
}
:hover{background-color: white;
padding-left: 37px;
padding-right: 37px;
padding-top: 5px;
padding-bottom: 5px;
color: red;
border-radius: 5px
}`;

const Shot = styled.button`
{background-color: #4caf50;
padding-left: 15px;
padding-right: 15px;
padding-top: 5px;
padding-bottom: 5px;
color: white;
border-radius: 5px;
}
:hover{background-color: white;
color: black;
padding-left: 15px;
padding-right: 15px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 5px
}`;

const AD = styled.button`
{
background-color: #651fff;
font-weight: bolder;
padding-left: 20px;
padding-right: 20px;
padding-top: 8px;
padding-bottom: 8px;
color: white;
border-radius: 5px;
}
:hover{background-color: white;
    font-weight: bolder;
padding-left: 20px;
padding-right: 20px;
padding-top: 8px;
padding-bottom: 8px;
color: black;
border-radius: 5px
}`;