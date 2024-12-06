import { Router } from 'express';
import * as controller from "../controllers/editInsurance.controller.js";

const EditInsuranceRouter = Router();

EditInsuranceRouter.post('/', controller.createInsurance);
EditInsuranceRouter.get('/', controller.findAllInsurance);
EditInsuranceRouter.get("/date", controller.findAllDurationInsurance);
EditInsuranceRouter.get('/:insuranceId', controller.findOneInsurance);
EditInsuranceRouter.put('/:insuranceId', controller.updateOneInsurance);
EditInsuranceRouter.delete('/:insuranceId', controller.deleteOneInsurance);

export default EditInsuranceRouter;