import { Router } from 'express';
import * as controller from "../controllers/editPaymentMethod.controller.js";

const EditPaymentMethodRouter = Router();

EditPaymentMethodRouter.post('/', controller.createPaymentMethod);
EditPaymentMethodRouter.get('/', controller.findAllPaymentMethod);
EditPaymentMethodRouter.get('/:pmId', controller.findOnePaymentMethod);
EditPaymentMethodRouter.put('/:pmId', controller.updateOnePaymentMethod);
EditPaymentMethodRouter.delete('/:pmId', controller.deleteOnePaymentMethod);

export default EditPaymentMethodRouter;