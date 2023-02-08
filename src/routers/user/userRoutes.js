import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser
} from '../../controllers/user/userController.js';

const userRouter = express.Router();

userRouter.route('/user').get(getAllUsers).post(createUser);

userRouter
  .route('/user/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

export default userRouter;
