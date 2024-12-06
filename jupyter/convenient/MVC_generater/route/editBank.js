import { Router } from 'express';
import * as controller from "../controllers/editBank.controller.js";

const EditBankRouter = Router();

EditBankRouter.post('/', controller.createBank);
EditBankRouter.get('/', controller.findAllBank);
EditBankRouter.get('/:bankId', controller.findOneBank);
EditBankRouter.put('/:bankId', controller.updateOneBank);
EditBankRouter.delete('/:bankId', controller.deleteOneBank);

export default EditBankRouter;