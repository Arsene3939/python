import { Router } from 'express';
import * as controller from "../controllers/editPettyCash.controller.js";

const EditPettyCashRouter = Router();

EditPettyCashRouter.post('/', controller.createPettyCash);
EditPettyCashRouter.get('/', controller.findAllPettyCash);
EditPettyCashRouter.get("/date", controller.findAllDurationPettyCash);
EditPettyCashRouter.get('/:pcId', controller.findOnePettyCash);
EditPettyCashRouter.put('/:pcId', controller.updateOnePettyCash);
EditPettyCashRouter.delete('/:pcId', controller.deleteOnePettyCash);

export default EditPettyCashRouter;