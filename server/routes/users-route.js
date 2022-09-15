import express from 'express';
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
  getAllUser,
  resetPassword,
} from '../controllers/user-controller.js';
import { verifyToken } from '../verifyToken.js';

const router = express();

//For update
router.put('/:id', verifyToken, update);

//For delete
router.delete('/:id', verifyToken, deleteUser);

//For get user
router.get('/find/:id', getUser);

//For getting user using email for forgot password
router.put('/find/email/:email', getAllUser);

//After getting the password verify if token and expire is found on database
router.put('/find/email/reset/:resetPasswordToken', resetPassword);

//For subscribe
router.put('/sub/:id', verifyToken, subscribe);

//For unsubscribe
router.post('/unsub/:id', verifyToken, unsubscribe);

//For like a video
router.put('/like/:videoId', verifyToken, like);

//For unlike a video
router.put('/dislike/:videoId', verifyToken, dislike);

export default router;
