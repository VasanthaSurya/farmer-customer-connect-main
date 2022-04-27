import React, { useState } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Layout from '../../components/Layout';
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";

    const FProductsearch = ({posts}) => {
    const [product, setProduct]=useState([])

    // DELETE PRODUCT
    const deleteProduct=id =>{
        axios.delete(`http://localhost:8000/FProduct/${id}`)
        .then(res => alert(res.data))
        setProduct(product.filter(elem => elem._id!==id))
    }
try{
    const user=localStorage.getItem('user')
    const ema=JSON.parse(user).email
    const selpro=localStorage.getItem('sel_pro')
    // const name=ema.split("@")
    // console.log(ema)
    // console.log(name[0])

  return(
    <MainContainer>
        <Layout sidebar>
        

        {posts.map((FProducts, key) =>(
            <div className={FProducts.farmer_email === ema ? '' : 'dispnone'}>
                <div className={FProducts.product_name === selpro ? '' : 'dispnone'}>
                        <div className="card mt-4">
                            {/* <div className="card-body" > */}
                            <div className="row" >
                                <div className="col-md-2 mt-4 imal" >
                                <img src={`../../uploads/${FProducts.product_image}`}  className="rounded" height="200px" width="200px"></img>
                                {/* <img src="C:\Users\hbkes\Desktop\FCC\back\src\uploads\dp.jpeg"  className="rounded" height="200px" width="200px"></img> */}
                                </div>

                                <div className="col-md-9" >
                                    <div className="container mt-4 des" key={key}>
                                        <h4><strong>{FProducts.product_name}</strong></h4>
                                        <p>
                                            <strong>Type: </strong>{FProducts.product_type}
                                            <br></br>
                                            {/* <strong>Grown by: </strong>{FProducts.farmer_email.split("@")[0]} */}
                                            {/* <br></br> */}
                                            <strong>Total Quantity: </strong>{FProducts.qty}Kgs
                                            <br></br>
                                            <strong>Price: </strong>{FProducts.price}Rs/Kg
                                            <br></br>
                                            <strong>Date: </strong>{FProducts.date}
                                            <br></br>
                                            <strong>Description: </strong>{FProducts.description}
                                        </p>

                                        <div className="row my-3">
                                            <div className="col-sm-3">
                                                <Link to={`/update-product/${FProducts._id}`}
                                                    classsName="btn btn-outline-success">
                                                    <Shot>
                                                        <FiEdit icon="fa-solid fa-pen" /> Edit Product
                                                    </Shot>
                                                </Link>
                                            </div>

                                            <div className="col-sm-3" >
                                                <Button onClick={() => deleteProduct(FProducts._id)}
                                                    classsName="btn btn-warning" >
                                                    <BsTrash icon="fa-solid fa-pen" /> Delete
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </div> 
            </div>            
        ))}
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

export default FProductsearch

// Main container
const MainContainer = styled.div`
margin-top: 5rem;
margin-left:7rem;
margin-right:7rem;

.card{
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
   
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