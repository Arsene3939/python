import { Router } from 'express';
import * as controller from "../controllers/editFaTransaction.controller.js";

const EditFaTransactionRouter = Router();

EditFaTransactionRouter.post('/', controller.createFaTransaction);
EditFaTransactionRouter.get('/', controller.findAllFaTransaction);
EditFaTransactionRouter.get("/date", controller.findAllDurationFaTransaction);
EditFaTransactionRouter.get('/:faId', controller.findOneFaTransaction);
EditFaTransactionRouter.put('/:faId', controller.updateOneFaTransaction);
EditFaTransactionRouter.delete('/:faId', controller.deleteOneFaTransaction);

export default EditFaTransactionRouter;