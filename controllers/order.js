import Order from '../models/Order.js';

export const createOrder = async (req, res, next) => {
  const newOrder = new Order({
    userId: req.body.userId,
    product: req.body.product,
    quantity: req.body.quantity,
    amount: req.body.price,
    state: req.body.state,
    city: req.body.city,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    next(error);
  }
};

export const userOrder = async (req, res, next) => {
  try {
    const orders = await Order.find({ userId: req.params.id });

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
