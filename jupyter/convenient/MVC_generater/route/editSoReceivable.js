import { Router } from 'express';
import * as controller from "../controllers/editSoReceivable.controller.js";

const EditSoReceivableRouter = Router();

EditSoReceivableRouter.post('/', controller.createSoReceivable);
EditSoReceivableRouter.get('/', controller.findAllSoReceivable);
EditSoReceivableRouter.get("/date", controller.findAllDurationSoReceivable);
EditSoReceivableRouter.get('/:soRcvId', controller.findOneSoReceivable);
EditSoReceivableRouter.put('/:soRcvId', controller.updateOneSoReceivable);
EditSoReceivableRouter.delete('/:soRcvId', controller.deleteOneSoReceivable);

export default EditSoReceivableRouter;