import { Router } from 'express';
import * as controller from "../controllers/editStorage.controller.js";

const EditStorageRouter = Router();

EditStorageRouter.post('/', controller.createStorage);
EditStorageRouter.get('/', controller.findAllStorage);
EditStorageRouter.get('/:storageId', controller.findOneStorage);
EditStorageRouter.put('/:storageId', controller.updateOneStorage);
EditStorageRouter.delete('/:storageId', controller.deleteOneStorage);

export default EditStorageRouter;