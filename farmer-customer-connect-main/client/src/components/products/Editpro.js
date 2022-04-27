import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import proimg from "./ProfBg.jpeg"
const Editpro  = props => {

    const [firstName, setfirstName]= useState("")
    const [lastName, setlastName]= useState("")
    const [email, setemail]= useState("")
    const [role, setrole]= useState("")
    const [contactNumber, setcontactNumber]= useState("")
    const [house_no, sethouse_no]= useState("")
    const [street, setstreet]= useState("")
    const [village_city, setvillage_city]= useState("")
    const [district, setdistrict]= useState("")
    const [state, setstate]= useState("")
    const [pincode, setpincode]= useState("")
    const [servicableAreas, setservicableAreas]= useState("")
    const [message,setMessage] = useState("");
    
    const changeOnClick = e =>{
        e.preventDefault();

        const profile = {
            firstName, 
            lastName,
            email,
            role,
            contactNumber,
            house_no,
            street,
            village_city,
            district,
            state,
            pincode,
            servicableAreas
        };
        // setfirstName("");
        // setlastName("");
        // setemail("");
        // setuserType("");
        // setgender("");
        // setcontact("");
        // sethouse_no("");
        // setstreet("");
        // setvillage_city("");
        // setdistrict("");
        // setstate("");
        // setpincode("");
        // setservicableAreas("");

        axios.put(`http://localhost:8000/User/update-profile/${props.match.params.id}`, profile)
        .then(res=>setMessage(res.data))
        .catch(err =>{
            console.log(err);
        });
        window.location="/Profile"
    };
    useEffect(() => {
        axios.get(`http://localhost:8000/User/it/${props.match.params.id}`)
        .then(res => [
            setfirstName(res.data.firstName),
            setlastName(res.data.lastName),
            setemail(res.data.email),
            setrole(res.data.role),
            setcontactNumber(res.data.contactNumber),
            sethouse_no(res.data.house_no),
            setstreet(res.data.street),
            setvillage_city(res.data.village_city),
            setdistrict(res.data.district),
            setstate(res.data.state),
            setpincode(res.data.pincode),
            setservicableAreas(res.data.servicableAreas),
        ])
        .catch(error => console.log(error));
    }, []);
const r=role
// console.log(r)
  return(
    <div  id='image-container' style={{ backgroundImage: `url(${proimg})`, width:'100%', backgroundSize:'cover', height:'130%',marginBottom:'-5%',marginTop:'-5%'}}>
    <EditProContainer>
        
        <div className="container">
        

            <div className="card mt-4">
            <div className="card-body" style={{backgroundColor:'yellowgreen', borderRadius:'15px'}}>
            <h1 style={{color:'#210070'}}><em>Edit Profile</em> </h1><hr />
            <form onSubmit={changeOnClick} encType="multipart/form-data">
                <div className="form-group mt-3">
                    <label htmlFor="firstName" style={{color:'black',marginLeft:'-80%'}}><strong>First Name</strong></label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={e=> setfirstName(e.target.value)}
                        className="form-control"
                        placeholder="First Name"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="lastName" style={{color:'black',marginLeft:'-80%'}}><strong>Last Name</strong></label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={e=> setlastName(e.target.value)}
                        className="form-control"
                        placeholder="last Name"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="email" style={{color:'black',marginLeft:'-83%'}}><strong>Email ID</strong></label>
                    <input
                        type="text"
                        value={email}
                        // onChange={e=> setemail(e.target.value)}
                        className="form-control"
                        placeholder="email"/>
                </div>
                
                <div className="form-group mt-3">
                    <label htmlFor="role" style={{color:'black',marginLeft:'-80%'}}><strong>Your Role</strong></label>
                    <input
                        type="text"
                        value={role}
                        // onChange={e=> setgender(e.target.value)}
                        className="form-control"
                        placeholder="gender"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="contactNumber" style={{color:'black',marginLeft:'-75%'}}><strong>Contact No.</strong></label>
                    <input
                        type="text"
                        value={contactNumber}
                        onChange={e=> setcontactNumber(e.target.value)}
                        className="form-control"
                        placeholder="Contact no."/>
                </div>
                <h5 className="mt-3" style={{color:'black'}}><strong>Address:</strong></h5>
                <div className="card card1">
                <div className="card-body" >
                <div className="form-group">
                    <label htmlFor="house_no" style={{marginLeft:'-75%'}} ><strong>House No. :</strong></label>
                    <input
                        type="text"
                        value={house_no}
                        onChange={e=> sethouse_no(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="No."/>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="street" style={{marginLeft:'-85%'}} ><strong>Street:</strong></label>
                    <input
                        type="text"
                        value={street}
                        onChange={e=> setstreet(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="street"/>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="village_city" style={{marginLeft:'-75%'}}><strong>Village/City:</strong></label>
                    <input
                        type="text"
                        value={village_city}
                        onChange={e=> setvillage_city(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="Village/City"/>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="district" style={{marginLeft:'-83%'}}><strong>District:</strong></label>
                    <input
                        type="text"
                        value={district}
                        onChange={e=> setdistrict(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="District"/>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="state" style={{marginLeft:'-85%'}}><strong>State:</strong></label>
                    <input
                        type="text"
                        value={state}
                        onChange={e=> setstate(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="State"/>
                </div>
                <div className="form-group mt-1">
                    <label htmlFor="pincode" style={{marginLeft:'-80%'}}><strong>Pincode:</strong></label>
                    <input
                        type="text"
                        value={pincode}
                        onChange={e=> setpincode(e.target.value)}
                        className="form-control form-control1 ms-4"
                        placeholder="Pincode"/>
                </div>
                </div></div>
                <div className={r==="farmer" ? '' : 'dispnone'}>
                <div className="form-group mt-3">
                    <label htmlFor="servicableAreas" style={{color:'black', marginLeft:'-65%'}}><strong>Servicable Areas:</strong></label>
                    <input
                        type="text"
                        value={servicableAreas}
                        onChange={e=> setservicableAreas(e.target.value)}
                        className="form-control"
                        placeholder="Servicable areas"/>
                </div>
                </div>
            <span className="message danger">{message}</span>
                <button type="submit" className="btn btn-primary mt-4 ms-5">
                    Update Profile
                </button>
            </form>
            </div></div>
            
        </div>
    </EditProContainer>
    </div>
   );
 };
export default Editpro

// Main Container
const EditProContainer = styled.div`
margin: 3rem auto;
border-radius:25px;
padding: 4rem;
width: 40rem;
.card{
    border-radius:25px;
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0.9);
}
.card1{
    border-radius:25px;
    border:solid #5d4037 2px;
    -webkit-box-shadow: -1px 9px 40px -12px rgba(0,0,0,0);
}
.form-control1{
    width: 23rem;
}
.dispnone{
    display:none;
}
.danger{
    color: red;
}
`;