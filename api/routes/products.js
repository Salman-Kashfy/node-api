const express = require('express');
const route = express.Router();

route.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products'
    });
});

route.get('/:productId',(req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered a special ID'
        });
    }else{
        res.status(200).json({
            message: `You passed an id of ${id}`
        });
    }
});

route.patch('/:productId',(req, res, next) => {
    res.status(200).json({
        message: `Updated Product!`
    });
});

route.delete('/:productId',(req, res, next) => {
    res.status(200).json({
        message: `Deleted Product!`
    });
});


route.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling POST request to /products',
    });
});

module.exports = route;