import { Router } from 'express';
import * as controller from "../controllers/editProject.controller.js";

const EditProjectRouter = Router();

EditProjectRouter.post('/', controller.createProject);
EditProjectRouter.get('/', controller.findAllProject);
EditProjectRouter.get('/:projId', controller.findOneProject);
EditProjectRouter.put('/:projId', controller.updateOneProject);
EditProjectRouter.delete('/:projId', controller.deleteOneProject);

export default EditProjectRouter;