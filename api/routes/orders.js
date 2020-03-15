const express = require('express');
const route = express.Router();

route.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched !'
    });
});

route.get('/:orderID',(req, res, next) => {
    res.status(200).json({
        message: 'Orders Details: ',
        orderID: req.params.orderID,
    });
});

route.post('/',(req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity,
    };
    res.status(200).json({
        message: 'Orders was created !',
        order: order
    });
});

route.delete('/:orderID',(req, res, next) => {
    res.status(200).json({
        message: 'Order was deleted:',
        orderID: req.params.orderID,
    });
});

module.exports = route;