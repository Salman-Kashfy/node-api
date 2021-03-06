const express = require('express');
const app = express();

// Body parser packages allows us to get data(posted by client)
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Prevents CORS (Cross Origin Resources Sharing) errors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header(
        "Access-Control-Allow-headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    );
    if( req.method === 'OPTIONS' ){
        res.header('Access-Control-Allow-Methods','PUT, PATCH, POST, GET, DELETE');
        return res.status(200).json({})
    }
});

// Routes 
const orderRoutes = require('./api/routes/orders');
const productRoutes = require('./api/routes/products');
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);

app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;