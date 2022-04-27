import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
// import logHome from '../logHome/index'
import Input from '../../components/UI/Input';
import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import hcbgImage from './bg1.jpg';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import ParticlesBg from 'particles-bg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import bgimg from './FCCsi.jpg'
import Link from '@material-ui/core/Link';

/**
* @author
* @function Signin
**/
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="blue" href="https://www.organicfarmersconnect.com//">
           Farmer Customer Connect
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }





const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'cover',
      
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  


const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email, password
        }
        try {
            dispatch(login(user));
            // console.log(login(user))
        }
        catch (error) {
            alert("Email or password is not correct")
        }
    }
    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }


    return (

        <Layout >
             <div  id='image-container' style={{ backgroundImage: `url(${bgimg})`, width:'100%', backgroundSize:'cover', marginTop: '3%'}}>

            <RemoveScrollBar />
            <Card id = 'field-input' style={{ width: '38rem', marginLeft: '35%', marginTop: '5%',marginBottom: '10%',height:'23vw', opacity:'0.75', borderRadius: '3.5rem'}}>
                 <Card.Title style={{ align: 'center',  marginTop: '1.5%' }}><span style={{ color: "black", fontSize: '26px' }}>Signin</span></Card.Title>
                <Card.Body>

                    <Container>
                        <Row >
                            <Col md={{ span: 16, offset: 3, marginLeft:'35%' }} >
                                <Form onSubmit={userLogin}>
                                  <div  style={{ align: 'center',width: '17rem', marginRight:'150%'}}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="E-mail"
                                        placeholder="E-mail"
                                        value={email}
                                        type="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required={true}
                                        autoComplete="email"
                                        autoFocus

                                    />
                                    
                               
                                 <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Password"
                                        placeholder="Password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required={true}
                                        autoComplete="Password"
                                        autoFocus


                                    />
                  
                                      <br />
                                      <br />

                                   <Button variant="primary" type="submit" style={{width:'60%'}}>
                                        Submit
                            </Button>
                            </div>
                                </Form>
                            </Col>
                        </Row>
                        <Box mt={5}>
                    <Copyright />
                </Box>

                    </Container>
                </Card.Body>
            </Card>
          
          </div>
        </Layout>
        
    )

}

export default Signin