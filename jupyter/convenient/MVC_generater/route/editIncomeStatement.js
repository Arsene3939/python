import { Router } from 'express';
import * as controller from "../controllers/editIncomeStatement.controller.js";

const EditIncomeStatementRouter = Router();

EditIncomeStatementRouter.post('/', controller.createIncomeStatement);
EditIncomeStatementRouter.get('/', controller.findAllIncomeStatement);
EditIncomeStatementRouter.get('/:isId', controller.findOneIncomeStatement);
EditIncomeStatementRouter.put('/:isId', controller.updateOneIncomeStatement);
EditIncomeStatementRouter.delete('/:isId', controller.deleteOneIncomeStatement);

export default EditIncomeStatementRouter;