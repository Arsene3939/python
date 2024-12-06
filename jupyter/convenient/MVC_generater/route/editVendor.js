import { Router } from 'express';
import * as controller from "../controllers/editVendor.controller.js";

const EditVendorRouter = Router();

EditVendorRouter.post('/', controller.createVendor);
EditVendorRouter.get('/', controller.findAllVendor);
EditVendorRouter.get('/:vendorId', controller.findOneVendor);
EditVendorRouter.put('/:vendorId', controller.updateOneVendor);
EditVendorRouter.delete('/:vendorId', controller.deleteOneVendor);

export default EditVendorRouter;