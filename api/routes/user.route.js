import express from 'express';

import { verifyToken } from '../utils/verifyUser.js';
import { deleteUser, signout, test, updateUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken,updateUser);
router.delete('/delete/:userId', verifyToken,deleteUser);
router.post('/signout', signout);

export default router;