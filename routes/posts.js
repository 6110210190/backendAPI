const express = require('express');
const router = express.Router();

const Order = require('../model/Order');

// ดึงค่าทั้งหมด
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
        console.log('Get data successfully!!');
    } catch (error) {
        res.json({message: err});
        console.log(err);
    }
    
});

//เพิ่มข้อมูลใน Database
router.post('/add', async (req, res) => {
    const order = new Order({
        cusName: req.body.cusName,
        Unit: req.body.Unit,
    });
    try {
        const saveOrder = await order.save();
        res.json(saveOrder);
        console.log('Add order successfully!!');
    } catch (error) {
        res.json({message: err});
        console.log(err);
    }
});

//ดึงค่าตาม ID
router.get('/orders/:orderID', async (req, res) => {
    try {
        const orders = await Order.findById(req.params.orderID);
        res.json(orders);
    } catch (error) {
        res.json({message: err});
    }
})

router.patch('/orders/:orderID', async (req, res) => {
    try {
        const updatedOrder = await Order.updateOne(
            {_id : req.params.orderID},
            {
                $set : {
                    cusName: req.body.cusName,
                    Unit: req.body.Unit,
                },
            }
        );
        res.json(updatedOrder);
    } catch (error) {
        res.json({message: err});
    }
})

//ลบข้อมูล

router.delete('/orders/:orderID', async (req, res) => {
    try {
        const removeOrder = await Order.remove({_id : req.params.orderID});
        res.json(removeOrder)
    } catch (error) {
        res.json({message: err});
    }
})

module.exports = router;