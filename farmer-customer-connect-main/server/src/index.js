const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const productRoutes = require('./routes/product')
const FProductRouter=require('./routes/FProduct');
const UserRouter=require('./routes/User');
const AddToCart= require('./routes/AddToCart');
const orders= require('./routes/order');
env.config();

mongoose
  .connect(
    process.env.MONGO_DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.use(cors());
app.use(express.json());
app.use('/User', UserRouter);
app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api', productRoutes);


app.use('/FProduct', FProductRouter);
app.use('/AddToCart', AddToCart);
app.use('/orders', orders)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
