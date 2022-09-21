import express from 'express';

import { getProducts, getProduct } from '../controllers/product.js';

const router = express.Router();

router.get('/', getProducts);

router.get('/find/:id', getProduct);

export default router;
