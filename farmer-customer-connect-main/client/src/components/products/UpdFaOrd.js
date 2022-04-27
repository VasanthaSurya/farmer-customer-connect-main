import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdFaOrd  = props => {
    const [product_name, setproduct_name]= useState("")
    const [product_type, setproduct_type]= useState("")
    // const [qty, setqty]= useState("")
    // const [price, setprice]= useState("")
    // const [date, setdate]= useState("")
    // const [description, setdescription]= useState("")
    const [message,setMessage] = useState("");
    // const [fileName, setFileName]= useState("");
    const [order_status, setorder_status]= useState("")


    // const onChangeFile = (e) =>{
    //     setFileName(e.target.files[0]);
    // }
    const changeOnClick = e =>{
        e.preventDefault();

        const ford= {
            product_name,
            product_type,
            order_status
        };

        // const formData = new FormData();
        // formData.append("product_name", product_name);
        // formData.append("product_type", product_type);
        // formData.append("qty", qty);
        // formData.append("price", price);
        // formData.append("date", date);
        // formData.append("description", description);
        // // formData.append("product_image", fileName);
        // formData.append("order_status", order_status);

        // console.log(formData)

        axios.put(`http://localhost:8000/orders/update-FarmOrd/${props.match.params.id}`, ford)
        .then(alert('Order Status Updated!!'))
        .catch(err =>{
            console.log(err);
        });
        window.location = '/FarmOrd';
    };
    useEffect(() => {
        axios.get(`http://localhost:8000/orders/${props.match.params.id}`)
        .then(res => [
            setproduct_name(res.data.product_name),
            setproduct_type(res.data.product_type),
            // setqty(res.data.qty),
            // setprice(res.data.price),
            // setdate(res.data.date),
            // setdescription(res.data.description),
            // setFileName(res.data.product_image)
            setorder_status(res.data.order_status),

        ])
        .catch(error => console.log(error));
    }, []);

  return(
    <EditProContainer>
        <div className="container">
            <h2> Order Details</h2>
            <div className="card mt-4">
            <div className="card-body more" >
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="product_name">Product Name:</label>
                    <input
                        type="text"
                        value={product_name}
                        // onChange={e=> setproduct_name(e.target.value)}
                        className="form-control"
                        placeholder="Edit Name"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="product_type">Product Type:</label>
                    <input
                        type="text"
                        value={product_type}
                        // onChange={e=> setproduct_type(e.target.value)}
                        className="form-control"
                        placeholder="Edit type"/>
                </div>
                {/* <div className="form-group mt-3">
                    <label htmlFor="qty">Quantity:</label>
                    <input
                        type="Number"
                        value={qty}
                        // onChange={e=> setqty(e.target.value)}
                        className="form-control"
                        placeholder="Edit quantity"/>
                </div> */}
                
                {/* <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text"
                        // value={description}
                        rows="4"
                        // onChange={e=> setdescription(e.target.value)}
                        className="form-control"
                        placeholder="Edit Description"/>
                </div> */}
                <div className="form-group mt-3">
                    <label htmlFor="order_status">Order:</label>
                    <input
                        type="text"
                        value={order_status}
                        rows="4"
                        onChange={e=> setorder_status(e.target.value)}
                        className="form-control"
                        placeholder=" accept or reject"/>
                </div>
                {/* <div className="form-group mt-3">
                    <label htmlFor="file">Choose Product Image</label>
                    <input 
                        type="file" 
                        filename="product_image"
                        className="form-control-file"
                        onChange={onChangeFile}></input>
                </div> */}
            <span className="message mess">{message}</span>

                <button type="submit" className="btn btn-success mt-4 ms-5">
                    Save Details
                </button>
            </form>
        </div>
        </div>
        </div>
    </EditProContainer>
   );
 };
export default UpdFaOrd

// Main Container
const EditProContainer = styled.div`
margin-top: 5rem;
width: 38rem;
.card{
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