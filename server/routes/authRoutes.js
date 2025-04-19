import express from 'express';
import { registerUser,loginUser } from '../controllers/authControllers.js';
const router = express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
// router.get('/getuser',protect,getUserInfo);

export default router;
