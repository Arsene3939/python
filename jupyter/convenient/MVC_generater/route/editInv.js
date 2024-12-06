import { Router } from 'express';
import * as controller from "../controllers/editInv.controller.js";

const EditInvRouter = Router();

EditInvRouter.post('/', controller.createInv);
EditInvRouter.get('/', controller.findAllInv);
EditInvRouter.get('/:invId', controller.findOneInv);
EditInvRouter.put('/:invId', controller.updateOneInv);
EditInvRouter.delete('/:invId', controller.deleteOneInv);

export default EditInvRouter;