import { Router } from 'express';
import * as controller from "../controllers/editLoan.controller.js";

const EditLoanRouter = Router();

EditLoanRouter.post('/', controller.createLoan);
EditLoanRouter.get('/', controller.findAllLoan);
EditLoanRouter.get("/date", controller.findAllDurationLoan);
EditLoanRouter.get('/:loanId', controller.findOneLoan);
EditLoanRouter.put('/:loanId', controller.updateOneLoan);
EditLoanRouter.delete('/:loanId', controller.deleteOneLoan);

export default EditLoanRouter;