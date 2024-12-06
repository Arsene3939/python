import { Router } from 'express';
import * as controller from "../controllers/editFinancialStatement.controller.js";

const EditFinancialStatementRouter = Router();

EditFinancialStatementRouter.post('/', controller.createFinancialStatement);
EditFinancialStatementRouter.get('/', controller.findAllFinancialStatement);
EditFinancialStatementRouter.get('/:fsId', controller.findOneFinancialStatement);
EditFinancialStatementRouter.put('/:fsId', controller.updateOneFinancialStatement);
EditFinancialStatementRouter.delete('/:fsId', controller.deleteOneFinancialStatement);

export default EditFinancialStatementRouter;