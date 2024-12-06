import { Router } from 'express';
import * as controller from "../controllers/editCashflowStatement.controller.js";

const EditCashflowStatementRouter = Router();

EditCashflowStatementRouter.post('/', controller.createCashflowStatement);
EditCashflowStatementRouter.get('/', controller.findAllCashflowStatement);
EditCashflowStatementRouter.get('/:cfsId', controller.findOneCashflowStatement);
EditCashflowStatementRouter.put('/:cfsId', controller.updateOneCashflowStatement);
EditCashflowStatementRouter.delete('/:cfsId', controller.deleteOneCashflowStatement);

export default EditCashflowStatementRouter;