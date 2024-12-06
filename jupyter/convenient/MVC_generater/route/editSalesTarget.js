import { Router } from 'express';
import * as controller from "../controllers/editSalesTarget.controller.js";

const EditSalesTargetRouter = Router();

EditSalesTargetRouter.post('/', controller.createSalesTarget);
EditSalesTargetRouter.get('/', controller.findAllSalesTarget);
EditSalesTargetRouter.get('/:salesTargetId', controller.findOneSalesTarget);
EditSalesTargetRouter.put('/:salesTargetId', controller.updateOneSalesTarget);
EditSalesTargetRouter.delete('/:salesTargetId', controller.deleteOneSalesTarget);

export default EditSalesTargetRouter;