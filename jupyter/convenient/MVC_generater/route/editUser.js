import { Router } from 'express';
import * as controller from "../controllers/editUser.controller.js";

const EditUserRouter = Router();

EditUserRouter.post('/', controller.createUser);
EditUserRouter.get('/', controller.findAllUser);
EditUserRouter.get('/:userId', controller.findOneUser);
EditUserRouter.put('/:userId', controller.updateOneUser);
EditUserRouter.delete('/:userId', controller.deleteOneUser);

export default EditUserRouter;