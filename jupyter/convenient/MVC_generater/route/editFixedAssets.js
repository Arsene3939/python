import { Router } from 'express';
import * as controller from "../controllers/editFixedAssets.controller.js";

const EditFixedAssetsRouter = Router();

EditFixedAssetsRouter.post('/', controller.createFixedAssets);
EditFixedAssetsRouter.get('/', controller.findAllFixedAssets);
EditFixedAssetsRouter.get("/date", controller.findAllDurationFixedAssets);
EditFixedAssetsRouter.get('/:faId', controller.findOneFixedAssets);
EditFixedAssetsRouter.put('/:faId', controller.updateOneFixedAssets);
EditFixedAssetsRouter.delete('/:faId', controller.deleteOneFixedAssets);

export default EditFixedAssetsRouter;