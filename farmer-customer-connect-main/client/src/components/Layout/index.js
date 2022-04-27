import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../Header';
import { NavLink } from 'react-router-dom';
import { faHome, faCarrot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CgProfile } from "react-icons/cg";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core';




/**
* @author
* @function Layout
**/

const Layout = (props) => {

    return (
      <>
        <Header />
        {props.children}
      </>
    )
  }


export default Layout;