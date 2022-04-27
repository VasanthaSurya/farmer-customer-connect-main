import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Row, Col, DropdownButton, Dropdown, Card } from 'react-bootstrap';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import './index.css';
import { Redirect } from 'react-router-dom';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';
import hcbgImage from './bg1.jpg';
// import user from '../../../../FCC_Signin/front/src/models/user';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import bgimg from './FCCsi.jpg'
/**
* @author
* @function Signup
**/

// console.log(user)
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="blue" href="https://www.organicfarmersconnect.com/">
                Farmer Customer Connect
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}







const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)
    // console.log(role)
    const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu();


    const userSignup = (e) => {

        e.preventDefault();
        const user = {
            firstName, lastName, email, password, role
        }



        if (role === "") {
            alert("please select type of customer")
        } else if (password !== confirm_password) {
            alert("Password doesn't match")
        }
        else {
            dispatch(signup(user))
            alert("Account created successfully..!!")
            window.location = '/signin';
        }

    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    if (user.loading) {
        // console.log(user)
        return <p>Loading....</p>
    }

    return (
        <Layout >
            <div id='image-container' style={{ backgroundImage: `url(${bgimg})`, width: '100%', backgroundSize: 'cover', marginTop: '3%',marginRight: '-5%' }}>
                <RemoveScrollBar />
                <Card style={{ width: '35rem', marginLeft: '35%', marginTop: '-1.8%', opacity:'0.825', borderRadius: '3.5rem', backgroundSize: 'cover' }}>
                    <Card.Title style={{ align: 'center', marginTop: '1.5%' }}><span style={{ fontSize: '26px' }}>Sign-up</span></Card.Title>
                    <Card.Body>

                        {user.message}
                        <Container >
                            <Row >
                                <Col md={{ span: 8, offset: 2.9 }} >
                                    <Form onSubmit={userSignup} style={{ width: '25rem', marginLeft: '12%' }}>
                                        <Row>
                                            <Col >
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    label="First Name"
                                                    placeholder="First Name"
                                                    value={firstName}
                                                    type="text"
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    required={true}
                                                    autoComplete="First Name"
                                                    autoFocus

                                                />

                                            </Col>
                                            <Col>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    label="Last Name"
                                                    placeholder="Last Name"
                                                    value={lastName}
                                                    type="text"
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    required={true}
                                                    autoComplete="Last Name"
                                                    autoFocus


                                                />
                                                {/* <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group> */}
                                            </Col>
                                        </Row>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="E-mail"
                                            placeholder="E-mail"
                                            value={email}
                                            required
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                            autoComplete="E-mail"
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
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="Confirm Password"
                                            placeholder="Confirm Password"
                                            value={confirm_password}
                                            type="password"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required={true}
                                            autoComplete="Confirm Password"
                                            autoFocus


                                        />


                                        <Row style={{ paddingTop: '3%' }}>

                                            <Col>
                                                <div className={isOpen ? 'visible' : ''} role='menu'>

                                                    {/* <label for="dropdown" srtyle={{color:'white'}}>Type of User</label><br /> */}
                                                    <select id="dropdown" style={{ width: '100%', height: '5.5vh', fontSize: '10', borderRadius: '0.5rem', opacity: '0.3' }} onChange={(e) => setRole(e.target.value)} required>

                                                        <option style={{ align: 'center' }}>       Type of User *     </option>
                                                        <option value={"farmer"}>Farmer</option>
                                                        <option value={"customer"}>Customer</option>
                                                    </select>
                                                </div>
                                            </Col>
                                        </Row>
                                        <br />
                                        <div class="text-center">
                                            <Button variant="primary" type="submit" className="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                            <Box mt={8}>
                                <Copyright />
                            </Box>


                        </Container>
                    </Card.Body>
                </Card>
            </div>
        </Layout >
        
    )

}
// console.log(Signup)
export default Signup
