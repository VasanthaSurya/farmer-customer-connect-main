import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input'
import logo from './onion.jpg'
import logo1 from './tomato.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
/**
* @author
* @function Products
**/

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center"style={{ align: 'auto',marginLeft:'18%', marginTop: '50%',width: '123rem', marginRight:'200%',marginBottom: '500%'}}>
      {'Copyright © '}
      <Link color="blue" href="https://www.organicfarmersconnect.com/">
         Farmer Customer Connect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}







const Products = (props) => {

  const [name,setName] = useState('');
  const [quantity,setQuantity] = useState('');
  const [price,setPrice] = useState('');
  const [description,setDescription] = useState('');
  const [productPictures,setProductPictures] = useState([]);
  const [show,setShow] = useState(false);


  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return(
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <h3>Products</h3>
              <button onClick={handleShow}> ADD PRODUCTS</button>
            </div>
          </Col>
        </Row>
      </Container>
        <Modal show = {show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Add new Products</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              label="Name"
              value={name}
              placeholder={`Product Name`}
              onChange={(e) => setName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Box mt={5}>
<Copyright />
</Box>


    </Layout>
    
   )
  

 }

export default Products