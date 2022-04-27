import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo16 from './editprobg.jpeg';
const Editproduct  = props => {
    const [product_name, setproduct_name]= useState("")
    const [product_type, setproduct_type]= useState("")
    const [qty, setqty]= useState("")
    const [price, setprice]= useState("")
    const [date, setdate]= useState("")
    const [description, setdescription]= useState("")
    const [message,setMessage] = useState("");
    const [fileName, setFileName]= useState("");

    const onChangeFile = (e) =>{
        setFileName(e.target.files[0]);
    }
    const changeOnClick = e =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("product_name", product_name);
        formData.append("product_type", product_type);
        formData.append("qty", qty);
        formData.append("price", price);
        formData.append("date", date);
        formData.append("description", description);
        formData.append("product_image", fileName);
        

        axios.put(`http://localhost:8000/FProduct/update-product/${props.match.params.id}`, formData)
        .then(res=>setMessage(res.data))
        .catch(err =>{
            console.log(err);
        });
        window.location = '/FProduct';
    };
    useEffect(() => {
        axios.get(`http://localhost:8000/FProduct/${props.match.params.id}`)
        .then(res => [
            setproduct_name(res.data.product_name),
            setproduct_type(res.data.product_type),
            setqty(res.data.qty),
            setprice(res.data.price),
            setdate(res.data.date),
            setdescription(res.data.description),
            setFileName(res.data.product_image)
        ])
        .catch(error => console.log(error));
    }, []);

  return(
    <div  id='image-container' style={{ backgroundImage: `url(${logo16})`, width:'100%', backgroundSize:'cover', height:'130%',marginBottom:'-5%',marginTop:'-5%'}}>
    <EditProContainer>
        <div className="container">
            
            <div className="card mt-4">
            <div className="card-body more" style={{backgroundColor:'yellowgreen', borderRadius:'15px'}} >
            <h2 style={{color:'#210070',textAlign:'center'}}> Edit Your Product</h2>
            <hr></hr>
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="product_name">Product Name:</label>
                    <input
                        type="text"
                        value={product_name}
                        onChange={e=> setproduct_name(e.target.value)}
                        className="form-control"
                        placeholder="Edit Name"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="product_type">Product Type:</label>
                    <input
                        type="text"
                        value={product_type}
                        onChange={e=> setproduct_type(e.target.value)}
                        className="form-control"
                        placeholder="Edit type"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="qty">Quantity:</label>
                    <input
                        type="Number"
                        value={qty}
                        onChange={e=> setqty(e.target.value)}
                        className="form-control"
                        placeholder="Edit quantity"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="Number"
                        value={price}
                        onChange={e=> setprice(e.target.value)}
                        className="form-control"
                        placeholder="Edit price"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e=> setdate(e.target.value)}
                        className="form-control"
                        placeholder="Edit date"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        value={description}
                        rows="4"
                        onChange={e=> setdescription(e.target.value)}
                        className="form-control"
                        placeholder="Edit Description"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="file">Choose Product Image</label>
                    <input 
                        type="file" 
                        filename="product_image"
                        className="form-control-file"
                        onChange={onChangeFile}></input>
                </div>
            <span className="message mess">{message}</span>

                <button type="submit" className="btn btn-success mt-4 ms-5" style={{backgroundColor:'black'}}>
                    Save Details
                </button>
            </form>
        </div>
        </div>
        </div>
    </EditProContainer>
    </div>
   );
 };
export default Editproduct

// Main Container
const EditProContainer = styled.div`
margin: 3rem auto;
border-radius:30px;
padding: 4rem;
margin-top: 5rem;
width: 38rem;
.card{
    border-radius:25px;
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
}
.more{
    font-weight:bold;
    font-size:18.5px;
    text-align:left;
}
.mess{
    color:red;
    }
`;