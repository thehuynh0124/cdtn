const dotenv = require('dotenv')
const express = require('express')

const userRoute = require('./routes/user');
const authRoute = require('./middleware/auth');
const productRoute = require('./routes/product');
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");


const connectDB = require('./config/db.config')
dotenv.config()
connectDB()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT ||5000,()=>{
    console.log("start running the server ")
})

