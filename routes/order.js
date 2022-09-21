import express from 'express';

import { createOrder, userOrder } from '../controllers/order.js';
// import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

router.post('/', createOrder);

router.get('/find/:id', userOrder);

export default router;
