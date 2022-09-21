import express from 'express';

import { deleteUser, getUser, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';
const router = express.Router();

router.put('/:id', verifyToken, updateUser);

router.delete('/:id', verifyToken, deleteUser);

router.get('/find/:id', getUser);

export default router;
