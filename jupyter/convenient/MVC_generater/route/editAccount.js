import { Router } from 'express';
import * as controller from "../controllers/editAccount.controller.js";

const EditAccountRouter = Router();

EditAccountRouter.post('/', controller.createAccount);
EditAccountRouter.get('/', controller.findAllAccount);
EditAccountRouter.get('/:accountId', controller.findOneAccount);
EditAccountRouter.put('/:accountId', controller.updateOneAccount);
EditAccountRouter.delete('/:accountId', controller.deleteOneAccount);

export default EditAccountRouter;