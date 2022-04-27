import React, { useState } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Layout from '../../components/Layout';

import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from 'react-bootstrap/CardGroup'

    const FProduct = ({carts}) => {
        // console.log(FProduct.product_name)
    const [product, setProduct]=useState([])
    // DELETE PRODUCT
    const deleteProduct=id =>{
        axios.delete(`http://localhost:8000/AddToCart/${id}`)
        .then(res => alert(res.data))
        setProduct(product.filter(elem => elem._id!==id))
    }
    const placeOrder=()=>{
        // const d = []
        for (var i = 0; i < carts.length; i++){
            const user=localStorage.getItem('user')
            const ema=JSON.parse(user).email
            const formData = new FormData();
            if (carts[i].customer_email === ema){
                formData.append("farmer_email", carts[i].farmer_name)
                formData.append("customer_email",carts[i].customer_email)
                formData.append("product_name",carts[i].product_name) 
                formData.append("product_type",carts[i].product_type) 
                formData.append("price",carts[i].price) 
                formData.append("date",carts[i].date) 
                formData.append("product_image",carts[i].product_image) 
                formData.append("quantityByCustomer",carts[i].quantityByCustomer)
                formData.append("contactNumber",carts[i].contactNumber)
                formData.append("village_city",carts[i].village_city)
                console.log(formData)
                axios.post("http://localhost:8000/orders/orders", formData)
                .then((res)=>console.log("Order placed successfully"))
                .catch((err) =>{
                    console.log(err);
                });
                axios.delete(`http://localhost:8000/AddToCart/${carts[i]._id}`)
                .then(res => console.log("Products sent to cart successfully"))

            }
        }
        alert("Your Order has been placed succesfully")


    }

    try{
        const user=localStorage.getItem('user')
        const ema=JSON.parse(user).email
        // console.log(ema)
    
      return(
        <MainContainer>
            <Layout sidebar>
            <div className="row">    
                <div className="col-md-4">
                    <h1 style = {{marginTop: '50px',marginLeft:'-30%'}}><i><strong>Your Cart:</strong></i></h1>
                </div>
                <div className="col-md-8 add mt-2" style = {{marginTop: '75px'}}>
                    <Link 
                    // to={"/checkout"}
                    onClick={placeOrder} 
                    classsName="btn btn-outline-success">
                        <AD style={{textAlign:'center',marginTop:'50px',marginRight:'-40%' }}>
                        <RiMenuAddLine icon="fa-solid fa-pen"/> Place order
                        </AD>
                    </Link>
                </div>   
            </div>
            <div className="grid"> {carts.map((FProducts, key) =>(





    <CardDeck>
        <Card key={key} bg='dark' border='danger' style={{ height: '500px', width: '300px', color: '#f3ca20', textAlign: 'left' }} >
            <Card.Img variant="top" src={`../../uploads/${FProducts.product_image}`} style={{ height: '200px', width: '235px' }} />
            <Card.Body>
                <Card.Title style={{ fontWeight: 'bolder' }}><em>{FProducts.product_name}</em></Card.Title>
                <Card.Text>
                    <p><strong>Type: </strong>{FProducts.product_type}
                        
                        {/* <strong>Total Quantity: </strong>{FProducts.qty} Kgs */}
                        <br></br>
                        <strong>Price: </strong>{FProducts.price} Rs/Kg
                        <br></br>
                        <strong>Date: </strong>{FProducts.date}
                        <br></br>
                        <strong>Description: </strong>{FProducts.description}
                        <br></br>
                        < strong>Quantity: </strong>{FProducts.quantityByCustomer}</p>
                </Card.Text>
            </Card.Body>


            {/* <Shot>
            <a href={`/update-product/${FProducts._id}`}
                classsName="btn btn-outline-success" >
                
                    <FiEdit icon="fa-solid fa-pen" />
            </a>
            </Shot> */}

            {/* <div className="col-sm-3" > */}
            <Button onClick={() => deleteProduct(FProducts._id)}
                classsName="btn btn-warning" >

                <BsTrash icon="fa-solid fa-pen" />

            </Button>

        </Card>
        <p style={{ color: 'white' }}>FCCFCC</p>
        {/* <p>        </p> */}
    </CardDeck>
            /* {carts.map((FProducts, key) =>(
                <div className={FProducts.customer_email === ema ? '' : 'dispnone'}>
                        <div className="card mt-4">
                            {/* <div className="card-body" > */
                            /* <div className="row" >
                                <div className="col-md-2 mt-4 imal" >
                                <img src={`../../uploads/${FProducts.product_image}`}  className="rounded" height="200px" width="200px"></img>
                                </div>
                                <div className="col-md-9" >
                                    <div className="container mt-4 des" key={key}>
                                        <h4><strong>{FProducts.product_name}</strong></h4>
                                        <p><strong>Type: </strong>{FProducts.product_type} */
                                            /* <br></br> */
                                            /* <strong>Total Quantity: </strong>{FProducts.qty}Kgs */
                        /* <br></br>
                                            <strong>Price: </strong>{FProducts.price}Rs/Kg
                        <br></br>
                                            <strong>Date: </strong>{FProducts.date}
                                            <br></br>
                                            <strong>Description: </strong>{FProducts.description}
                                            <br></br>
                                           < strong>Quantity: </strong>{FProducts.quantityByCustomer}</p> */
                                        /* <div className="row my-3"> */
                                            /* <div className="col-sm-3">
                                                <Link to={`/update-product/${FProducts._id}`}
                                                    classsName="btn btn-outline-success">
                                                    <Shot>
                                                        <FiEdit icon="fa-solid fa-pen" /> Edit Product
                                    </Shot>
                                                </Link>
                                            </div> */
                                            /* <div className="col-sm-3" >
                                                <Button onClick={() => deleteProduct(FProducts._id)}
                                                    classsName="btn btn-warning" >
                                                    <BsTrash icon="fa-solid fa-pen" /> Delete
                                </Button>
    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   */
                /* </div> */
            
              
            ))}
            </div>
        </Layout>
        </MainContainer>
       )
    }
    catch{
        return(
            window.location='/'
        )
    }
    

 }

export default FProduct

// Main container
const MainContainer = styled.div`
margin: 5rem;
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
.grid > div{
    flex-basis: calc(20% - 40px)
}
.des{
    text-align:left;
    padding-left:40px
}
.imal{
   margin-left:15px;
}
.dispnone{
    display:none;
}
h1{
    color: #1a237e;
}
.add{
    padding-left:500px;
}
`;

const Button=styled.button`
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

const Shot=styled.button`
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

const AD=styled.button`
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