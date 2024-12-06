import { Router } from 'express';
import * as controller from "../controllers/editCashflow.controller.js";

const EditCashflowRouter = Router();

EditCashflowRouter.post('/', controller.createCashflow);
EditCashflowRouter.get('/', controller.findAllCashflow);
EditCashflowRouter.get("/date", controller.findAllDurationCashflow);
EditCashflowRouter.get('/:cashflowId', controller.findOneCashflow);
EditCashflowRouter.put('/:cashflowId', controller.updateOneCashflow);
EditCashflowRouter.delete('/:cashflowId', controller.deleteOneCashflow);

export default EditCashflowRouter;