const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: 'Przetwarzanie',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  payment: {
    type: Boolean,
    default: false,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
