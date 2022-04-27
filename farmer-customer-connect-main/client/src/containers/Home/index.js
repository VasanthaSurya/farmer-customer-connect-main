import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout';
import './style.css';
import logo from './anime.png';
import logo1 from './pic2.png';
import logo2 from './onion.jpg';
import logo3 from './tomato.jpg';
import logo4 from './capsi.jpeg';
import logo5 from './cauliflower.jpeg';
import logo6 from './curd.jpg';
import logo7 from './ghee.jpg';
import logo8 from './arogya_milk.png';
import ParticlesBg from 'particles-bg';
import logo9 from './fccbg12.png';
import logo10 from './homebg.png';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import { useDispatch, useSelector } from 'react-redux';
import state from '../../reducers/auth_reducers';
import Card from "react-bootstrap/Card";
import Carousel from 'react-bootstrap/Carousel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import logo25 from './bsbg.jpg'
// import user from '../../../../FCC_Signin/src/models/user';



/**
* @author
* @function Home
**/

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center"style={{ align: 'auto',marginLeft:'35%', marginTop: '10%',width: '123rem', marginRight:'30%',marginBottom: '500%'}}>
      {'Copyright © '}
      <Link color="black" href="https://www.organicfarmersconnect.com/">
         Farmer Customer Connect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const Home = (props) => {
  const auth = useSelector(state => state.auth);
     
  if(auth.authenticate){
      const user=localStorage.getItem('user')
      const ema=JSON.parse(user).email

  return(
    <div  id='image-container' style={{ backgroundImage: `url(${logo25})`, width:'100%', backgroundSize:'cover', height:'115vh',marginBottom:'-5%',marginTop:'-5%'}}>
    <Layout sidebar>
     
     
      <div style={{marginTop:'5rem'}}>
       {/* <Carousel>
                   <Carousel.Item interval={1000} style={{marginTop:'12%'}}>
                       <img className="d-block w-10" src={logo3}  style={{width:'40%',marginLeft:'25%'}} alt="First slide"/>
                        <Carousel.Caption style={{color: "black"}}>
                             <h3>CURD</h3> 
 
                        </Carousel.Caption>
                        </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="d-block w-10" src={logo4} style={{width:'40%',marginLeft:'25%'}} alt="Second slide"/>
                    <Carousel.Caption style={{color: "red"}} > 
                                                       <h3>GHEE</h3> 
 
                     </Carousel.Caption>
                    </Carousel.Item >
                    <Carousel.Item interval={1000} style={{marginTop:'12%'}}>
                      <img className="d-block w-10" src={logo5} style={{width:'40%',marginLeft:'25%'}}  alt="Third slide" />
                    <Carousel.Caption style={{color: "black", marginRight:'10%'}}> 
                                             <h3 >MILK</h3> 
 
                       </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>   */}
        <h1 style={{color:'black',marginTop:'10%'}}> <em><strong>Best Sellers</strong></em></h1>
      </div>
        <div class="row">
          <br></br>
        <Card style={{ width: '20%', marginLeft:'5%',marginTop:'2%' }}>
          <Card.Img variant="top" src={logo2}  style={{width:'100%',height:'100%'}} />
            
            <p style={{textAlign:'center', fontSize:'23px',height:'70%',color:'white'}}><strong>Onions</strong></p>
         </Card>
 
 
         <Card style={{  width: '20%', marginLeft:'2%', marginTop:'2%' }}>
          <Card.Img variant="top" src={logo3} alt="Organic-tomato" style={{width:'90%',marginLeft:'1%',height:'100%'}} />
            
           
           <p style={{textAlign:'center',fontSize:'23px',height:'70%',color:'white'}}><strong>Organic Tomato</strong></p>
        </Card>
 
        <Card style={{  width: '20%', marginLeft:'2%', marginTop:'2%' }}>
           <Card.Img variant="top" src={logo4} alt="Organic-Capsicum" style={{width:'100%',marginLeft:'0%',height:'100%'}} />
             
             <p style={{textAlign:'center',fontSize:'23px',height:'70%',color:'white'}}><strong>Organic Capsicum</strong></p>
        </Card>
 

          <Card style={{  width: '20%', marginLeft:'2%', marginTop:'2%' }}>
           <Card.Img variant="top" src={logo5} alt="Cauliflower" style={{width:'90%',marginLeft:'5%', alignItems:'center',height:'100%'}} />
        
             
             <p style={{textAlign:'center',fontSize:'23px',height:'70%',color:'white'}}><strong>Cauliflower</strong></p>
          </Card>
         
        </div>

                
 
           
    </Layout>
    </div>
  )
}
  else{
    return(
      
      <Layout className="layout" >
         
       
        <RemoveScrollBar />
        <Container fluid>
          <Jumbotron style={{ marginTop:'8.7rem',overflowX:'hidden',height : '32rem',backgroundColor:'#FFD55A'}} className="text-center" >
            <Row>
              <Col>
              <h1><strong> Welcome to Farmer Customer Connect</strong></h1><hr></hr>
              <p style={{fontSize:'20px'}}> Farmer Customer Connect is an interface between farmers and customers without any middlemen. Customers can enjoy the organic farm products at low prices.</p>
              <a class="btn btn-success" href="/signin" role="button">Explore Products</a>
              </Col>
              <Col>
              <img src={logo9} alt="Carrot" style={{width:'80%',marginLeft:'20%'}}></img>
              </Col>
            </Row>
              
          </Jumbotron>
        </Container>       
        
          {/* <div class="row">
            <div class="column">
              <img src={logo} alt="Carrot" style={{width:'60%',marginLeft:'100%'}}></img>
            </div>
            <div class="column">
              <img src={logo1} alt="veggies" style={{width:'90%',marginLeft:'140%',marginTop:'12%'}}></img>
            </div>
          </div>
          <div>
          <Box mt={5}>
          <Copyright />
        </Box> */}
       
         
          
      </Layout>
      
     )
    

 }

 }

export default Home