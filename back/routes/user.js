const express = require('express');
const { userIsAuthenticatedMDW } = require('../middleware/auth.mdw');

const userRouter = express.Router();

const { userController } = require('../controllers');

userRouter.post('/', userIsAuthenticatedMDW('ADMIN'), userController.createUser);
userRouter.get('/', userIsAuthenticatedMDW(), userController.getUsers);
userRouter.get('/:adminId', userIsAuthenticatedMDW('ADMIN'), userController.getUsersByAdminId);

module.exports = userRouter;
