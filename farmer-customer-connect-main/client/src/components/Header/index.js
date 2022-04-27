import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
// import user from '../../actions/auth_actions';
import { signout } from '../../actions';
import SplitButton from 'react-bootstrap/SplitButton';
import Dropdown from 'react-bootstrap/Dropdown';
import logo1 from './fcc_updated1.png';
import { faHome, faCarrot, faUser,faSignOutAlt,faBoxOpen,faAward, faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiPlantsAndAnimals } from "react-icons/gi";
import './index.css'


/**
* @author
* @function 
**/

const Header = (props) => {

    const [input, setinput] = useState("")

    const store = e => {
        setinput(e.target.value);
        localStorage.setItem("sel_pro", e.target.value)
    }

    const auth = useSelector(state => state.auth);
    // console.log(user)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout())
    }

    // console.log(localStorage.getItem("sel_pro"));

    const renderLoggedInLinks = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        // console.log(user.role)
        return (
            <Nav>
                <li className="nav-item">
                    <Row>
                        <Col style={{ marginRight: '-20px', marginTop: '7px', }}>
                            <input className="bar" type="text" value={input} placeholder="Search your product here........" onChange={store}></input>
                        </Col>
                        <Col style={{ marginRight: '285px', marginTop: '7px' }} >
                            <a href={user.role === "farmer" ? "/FProductsearch" : "CusProductSearch"} ><button className="god" style = {{backgroundColor : 'yellowgreen'}}>Search</button></a>
                        </Col>
                        <Col>

                        <div className="mt-2">
                            <SplitButton
                                menuAlign={{ lg: 'left' }}
                                title={user.firstName}
                                variant="success"
                                id="dropdown-menu-align-responsive-2"
                                style={{ marginRight: '50px' }}
                                href="/Profile"
                            >

                                <Dropdown.Item href="/"><FontAwesomeIcon icon={faHome} />&ensp;Home</Dropdown.Item>
                                <Dropdown.Item href="/Profile"><FontAwesomeIcon icon={faUser} />&ensp;Profile</Dropdown.Item>
                                <Dropdown.Item href={user.role === "farmer" ? "/FProduct" : "/CusProducts"}><GiPlantsAndAnimals icon="fa-solid fa-pen" />&ensp;Products</Dropdown.Item>
                                
                                 <Dropdown.Item href={user.role === "customer" ? "/cart": ""}><FontAwesomeIcon icon={faCartPlus} />&ensp;Cart</Dropdown.Item>   
                                
                                <Dropdown.Item href="/cart"><FontAwesomeIcon icon={faBoxOpen} />&ensp;Orders</Dropdown.Item>
                                <Dropdown.Divider />
                            <Dropdown.Item onClick={logout} style={{ color: 'black', paddingLeft: '1.5rem' }}><FontAwesomeIcon icon={faSignOutAlt} />&ensp;Sign out</Dropdown.Item>

                            </SplitButton>
                        </div>
                        </Col>
                        
                        {/* <Col>
                        <FontAwesomeIcon icon={faAward} />
                        </Col> */}
                    {/* <Col>
                            <a href={user.role === "farmer" ? "/FProduct" : "/CusProducts"}></a>
                        </Col>
                        <Col md='auto'>
                            <a href="/Profile">
                                <span className="nav-link" style={{ color: 'black' }}>Hi, {user.firstName}</span>
                            </a>
                        </Col> */}
                    {/* <Col >
                            <span className="nav-link btn" onClick={logout} style={{ color: 'white' }}>Sign Out</span>
                        </Col> */}
                    </Row>
                </li>
            </Nav >
        )
    }
const renderNonLoggedInLinks = () => {
    // console.log(auth)
    return (
        <Nav>
            {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
            <li className="nav-item">
                <NavLink to='/signin' className="nav-link" style={{ color: 'white' }}>Sign in</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/signup' className="nav-link" style={{ color: 'white' }}>Sign Up</NavLink>
            </li>
        </Nav>
    )
}
try {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Navbar collapseOnSelect fixed='top' expand="sm" bg="dark" variant="dark" style={{ zIndex: 1,backgroundColor: 'white' }}>
            <Container fluid>
                {/* <Navbar.Brand href="#home">FCC</Navbar.Brand> */}
                {/* const path = "/" */}

                <a href={'/'} className="navbar-brand"><img src={logo1} alt="logo" style={{ width: '5rem' }}></img></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
catch {
    return (
        <Navbar collapseOnSelect fixed='top' expand="sm" bg="success" variant="light" style={{ zIndex: 1 }}>
            <Container fluid>
                {/* <Navbar.Brand href="#home">FCC</Navbar.Brand> */}
                {/* const path = "/" */}

                <a href={'/'} className="navbar-brand"><img src={logo1} alt="logo" style={{ width: '5rem' }}></img></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

}

export default Header;
