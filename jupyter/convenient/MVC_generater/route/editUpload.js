import { Router } from 'express';
import * as controller from "../controllers/editUpload.controller.js";

const EditUploadRouter = Router();

EditUploadRouter.post('/', controller.createUpload);
EditUploadRouter.get('/', controller.findAllUpload);
EditUploadRouter.get('/:uploadId', controller.findOneUpload);
EditUploadRouter.put('/:uploadId', controller.updateOneUpload);
EditUploadRouter.delete('/:uploadId', controller.deleteOneUpload);

export default EditUploadRouter;