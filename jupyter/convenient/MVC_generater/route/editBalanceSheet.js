import { Router } from 'express';
import * as controller from "../controllers/editBalanceSheet.controller.js";

const EditBalanceSheetRouter = Router();

EditBalanceSheetRouter.post('/', controller.createBalanceSheet);
EditBalanceSheetRouter.get('/', controller.findAllBalanceSheet);
EditBalanceSheetRouter.get('/:bsId', controller.findOneBalanceSheet);
EditBalanceSheetRouter.put('/:bsId', controller.updateOneBalanceSheet);
EditBalanceSheetRouter.delete('/:bsId', controller.deleteOneBalanceSheet);

export default EditBalanceSheetRouter;