import { Router } from 'express';
import * as controller from "../controllers/editCompany.controller.js";

const EditCompanyRouter = Router();

EditCompanyRouter.post('/', controller.createCompany);
EditCompanyRouter.get('/', controller.findAllCompany);
EditCompanyRouter.get('/:companyId', controller.findOneCompany);
EditCompanyRouter.put('/:companyId', controller.updateOneCompany);
EditCompanyRouter.delete('/:companyId', controller.deleteOneCompany);

export default EditCompanyRouter;