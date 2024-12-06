import { Router } from 'express';
import * as controller from "../controllers/editSalaries.controller.js";

const EditSalariesRouter = Router();

EditSalariesRouter.post('/', controller.createSalaries);
EditSalariesRouter.get('/', controller.findAllSalaries);
EditSalariesRouter.get("/date", controller.findAllDurationSalaries);
EditSalariesRouter.get('/:salariesId', controller.findOneSalaries);
EditSalariesRouter.put('/:salariesId', controller.updateOneSalaries);
EditSalariesRouter.delete('/:salariesId', controller.deleteOneSalaries);

export default EditSalariesRouter;