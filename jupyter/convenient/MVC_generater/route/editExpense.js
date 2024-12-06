import { Router } from 'express';
import * as controller from "../controllers/editExpense.controller.js";

const EditExpenseRouter = Router();

EditExpenseRouter.post('/', controller.createExpense);
EditExpenseRouter.get('/', controller.findAllExpense);
EditExpenseRouter.get("/date", controller.findAllDurationExpense);
EditExpenseRouter.get('/:expId', controller.findOneExpense);
EditExpenseRouter.put('/:expId', controller.updateOneExpense);
EditExpenseRouter.delete('/:expId', controller.deleteOneExpense);

export default EditExpenseRouter;