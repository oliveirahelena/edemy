import express from "express";

const router = express.Router();

import { requireSignin } from "../middlewares";

import { register, login, logout, currentUser, forgotPassword } from '../controllers/auth';

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/current-user', requireSignin, currentUser);
router.get('/forgot-password', forgotPassword);

module.exports = router;
