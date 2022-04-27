import React, { useEffect,useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/products';
import Orders from './containers/orders';
import FarmerProducts from  './components/products/FProduct';
import Profile from  './components/products/Profile';
import Editpro from  './components/products/Editpro';
import FarmerProductsearch from  './components/products/FProductsearch';
import CustomerProductSearch from  './components/products/CusProductSearch';
import CustomerProducts from  './components/products/CusProducts';
import FarmerEditProduct from  './components/products/Editproduct';
import FarmerAddProduct from  './components/products/AddProduct';
import CartProducts from './components/products/cart';
import Checkout from './components/products/checkout';
import FarmOrd from './components/products/FarmOrd';
import UpdFaOrd from './components/products/UpdFaOrd';

import Footer from "./components/footer/Footer";

// import Navbar from '../../sidebar/Navbar';

function App() {

  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]); 
  useEffect(()=> { 
    const user=localStorage.getItem('user')
    if(user){
      const ema=JSON.parse(user).email
      axios.get('http://localhost:8000/FProduct/') 
      .then(res=>setPosts(res.data)) 
      .catch(error=>console
      .log(error));
    }
     }); 

  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    
  }, [auth.authenticate]);

  const [pasts, setPasts] = useState([]); 
  useEffect(()=>{
    const user=localStorage.getItem('user')
    if(user){
      axios.get('http://localhost:8000/User') 
      .then(res=>setPasts(res.data)) 
      .catch(error=>console
      .log(error));
    }
  })
  const [carts, setCarts] = useState([]);
  useEffect(()=> {
    axios.get('http://localhost:8000/AddToCart/') 
      .then(res=>setCarts(res.data)) 
      .catch(error=>console
      .log(error));
    })

    const [orders, setOrders] = useState([]);
    useEffect(()=> {
      axios.get('http://localhost:8000/orders/') 
        .then(res=>setOrders(res.data)) 
        .catch(error=>console
        .log(error));
    })
  return (
    <div className="App">
        
        <Switch>
          <Route path = "/" exact={true} component = {Home} />
          <Route path = "/FProduct" render={()=><FarmerProducts posts={posts} />} />
          <Route path = "/Profile" render={()=><Profile pasts={pasts} />} />
          <Route path="/update-profile/:id" render={props=><Editpro {...props} pasts={pasts}/>}/>
          <Route path = "/FProductsearch" render={()=><FarmerProductsearch posts={posts} />} />
          <Route path = "/CusProductSearch" render={()=><CustomerProductSearch posts={posts} />} />
          {/* <Route path = "/FProduct" component = {FarmerProducts} /> */}
          <Route path = "/add-product" component = {FarmerAddProduct} />
          <Route path="/update-product/:id" render={props=><FarmerEditProduct {...props} posts={posts}/>}/>
          <Route path="/CusProducts" render={()=><CustomerProducts posts={posts} />}/>
          <Route path = "/orders" component = {Orders} />
          <Route path = "/cart" render={()=><CartProducts carts = {carts}/>}/>
          <Route path = "/signin" component = {Signin} />
          <Route path = "/signup" component = {Signup} />
          <Route path = "/checkout" render={()=><Checkout orders = {orders}/>}/>
          <Route path = "/FarmOrd" render={()=><FarmOrd orders = {orders}/>}/>
          <Route path = "/update-FarmOrd/:id" render={props=><UpdFaOrd {...props} orders = {orders}/>}/>
        </Switch>
        {/* <Footer /> */}
    </div>
  );
}

export default App;



