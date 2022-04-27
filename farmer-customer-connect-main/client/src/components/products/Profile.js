import React, { useState } from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Layout from '../Layout';
import bgimg from './profilebg.jpeg'
import { FiEdit } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
import { Col, Row } from 'react-bootstrap';
    const Profile = ({pasts}) => {
    
    try{
        const user=localStorage.getItem('user')
        // console.log(user)
        const ema=JSON.parse(user).email
        // console.log(ema)
    
      return(
        <div  id='image-container' style={{ backgroundImage: `url(${bgimg})`, width:'100%', backgroundSize:'cover', height:'110vh',marginBottom:'5%',marginTop:'-5%',position:'fixed'}}>
        <MainContainer>
            
            <Layout sidebar>
            <div >    
                    <h1 style={{color:'white'}}><i><strong>Your Profile</strong></i></h1>
            </div>
            {pasts.map((Users, key) =>(
                <div className={Users.email === ema ? '' : 'dispnone'}>
                        <div className="card mt-4" style = {{borderRadius:'30px', backgroundColor:'yellowgreen',color:'#210070'}}>
                            <div className="row" >
                                    <div className="container cont mt-4" key={key}>
                                        <p >
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}><strong>First Name   </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.firstName }</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}><strong>Last Name    </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.lastName}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>Contact No. </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.contactNumber }</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>House No. </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.house_no}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>Street </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.street}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>Vilage/City </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.village_city}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>district </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.district}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>state </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.state}</Col>
                                            </Row>
                                            <Row>
                                                <Col style = {{marginRight : '-25%'}}> <strong>Pincode </strong></Col>
                                                <Col> : </Col>
                                                <Col style = {{marginLeft : '-40%'}}>{Users.pincode}</Col>
                                            </Row>
                                            
                                            
                                            
                                            <div className={Users.role==="farmer" ? '' : 'dispnone'}>
                                                <Row>
                                                    <Col style = {{marginRight : '-25%'}}>
                                                    <strong>Servicable Areas </strong>
                                                    </Col>
                                                    <Col> : </Col>
                                                    <Col style = {{marginLeft : '-40%'}}>{Users.servicableAreas}</Col>
                                                </Row>
                                            </div>
                                            </p>
                                                <Link to={`/update-profile/${Users._id}`}
                                                    classsName="btn btn-outline-success" >
                                                    <Shot style={{backgroundColor:'#283350'}}>
                                                        <FiEdit icon="fa-solid fa-pen" /> Edit Your Profile
                                                    </Shot>
                                                </Link>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                
            ))}
        </Layout>
        
        </MainContainer>
        </div>
       )
    }
    catch{
        return(
            window.location='/'
        )
    }
    

 }

export default Profile

// Main container
const MainContainer = styled.div`
margin: 10rem 0;
margin-left:7rem;
margin-right:7rem;
.card{
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
    margin-left:auto;
    margin-right:auto;
   width:50rem;
}
.dispnone{
    display:none;
}
h1{
    color: #1a237e;
}
.cont{
    font-size:22px;
    text-align:left;
    padding-left:80px;
    padding-bottom:10px;
}

`;

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
color:orange;
padding-left: 15px;
padding-right: 15px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 5px
}`;

