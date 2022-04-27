import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo34 from './fcc323.jpeg';

const AddProduct  = props => {
    const [product_name, setproduct_name]= useState("");
    const [product_type, setproduct_type]= useState("");
    const [qty, setqty]= useState("");
    const [price, setprice]= useState("");
    const [date, setdate]= useState("");
    const [description, setdescription]= useState("");
    const [fileName, setFileName]= useState("");
    const [message,setMessage] = useState("");
    
    const onChangeFile = (e) =>{
        setFileName(e.target.files[0]);
    }

    const changeOnClick = (e) =>{
        e.preventDefault();

        const user=localStorage.getItem('user')
        const ema=JSON.parse(user).email

        const formData = new FormData();
        formData.append("farmer_email",ema)
        formData.append("product_name", product_name);
        formData.append("product_type", product_type);
        formData.append("qty", qty);
        formData.append("price", price);
        formData.append("date", date);
        formData.append("description", description);
        formData.append("product_image", fileName);
        

        // const product = {
        //     product_name, 
        //     product_type,
        //     qty,
        //     price,
        //     date,
        //     description
        // };
    
        setproduct_name("");
        setproduct_type("");
        setqty("");
        setprice("");
        setdate("");
        setdescription("");
        setFileName("");
        console.log(formData)
        axios.post("http://localhost:8000/FProduct/add-product/", formData)
        .then((res)=>setMessage(res.data))
        .catch((err) =>{
            console.log(err);
        });
        window.location = '/FProduct';
    };
    

  return(
    <div  id='image-container' style={{ backgroundImage: `url(${logo34})`, width:'100%', backgroundSize:'cover', height:'110vh',marginBottom:'-5%',marginTop:'-5%'}}>
    <AddProductContainer>
        <div className="container" >
            
            <div className="card mt-4" style={{borderRadius:'25px'}}>
            <div className="card-body" style={{backgroundColor:'yellowgreen', borderRadius:'25px'}}>
            <h2 style={{color:'black'}}> Add New Product</h2><hr />
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group more">
                    <label htmlFor="product_name" style={{color:'whitesmoke'}}>Product Name:</label>
                    <input
                        type="text"
                        value={product_name}
                        onChange={e=> setproduct_name(e.target.value)}
                        className="form-control"
                        placeholder="Enter Name"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="product_type" style={{color:'whitesmoke'}}>Product Type:</label>
                    <input
                        type="text"
                        value={product_type}
                        onChange={e=> setproduct_type(e.target.value)}
                        className="form-control"
                        placeholder="Enter type"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="qty" style={{color:'whitesmoke'}}>Quantity(Kgs):</label>
                    <input
                        type="Number"
                        value={qty}
                        onChange={e=> setqty(e.target.value)}
                        className="form-control"
                        placeholder="Enter quantity"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="price" style={{color:'whitesmoke'}}>Price(Per Kg):</label>
                    <input
                        type="Number"
                        value={price}
                        onChange={e=> setprice(e.target.value)}
                        className="form-control"
                        placeholder="Enter price"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="date" style={{color:'whitesmoke'}}>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e=> setdate(e.target.value)}
                        className="form-control"
                        placeholder="Enter date"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="description" style={{color:'whitesmoke'}}>Description:</label>
                    <textarea
                        type="text"
                        // style={{height:"100px"}}
                        value={description}
                        rows="4"
                        onChange={e=> setdescription(e.target.value)}
                        className="form-control"
                        placeholder="Add Description"/>
                </div>
                <div className="form-group more mt-3">
                    <label htmlFor="file" style={{color:'whitesmoke'}}>Choose Product Image</label>
                    <input 
                        type="file" 
                        filename="product_image"
                        className="form-control-file"
                        onChange={onChangeFile}
                        style={{color:'white'}}></input>
                </div>
            <span className="message mess">{message}</span>
                <button type="submit" className="btn btn-success mt-4 ms-5">
                Add product
                </button>
            </form>
        </div>
        </div>
        </div>
    </AddProductContainer>
    </div>
   );
 };
export default AddProduct

// Main Container
const AddProductContainer = styled.div`
margin: 3rem auto;

width: 38rem;
.card{
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
}
.mess{
color:red;
}
.more{
    font-weight:bold;
    font-size:18.5px;
    text-align:left;
}
h2{
color:green;
}
`;