const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    cusName: {
        type: String,
        required: true,
    },
    Unit: {
        type: Number,
        required: true,
    },
    Date: {
        type: String,
        default: Date.now,
    } 
});

module.exports = mongoose.model('Order', OrderSchema);