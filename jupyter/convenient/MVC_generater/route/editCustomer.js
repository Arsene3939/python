import { Router } from 'express';
import * as controller from "../controllers/editCustomer.controller.js";

const EditCustomerRouter = Router();

EditCustomerRouter.post('/', controller.createCustomer);
EditCustomerRouter.get('/', controller.findAllCustomer);
EditCustomerRouter.get('/:custId', controller.findOneCustomer);
EditCustomerRouter.put('/:custId', controller.updateOneCustomer);
EditCustomerRouter.delete('/:custId', controller.deleteOneCustomer);

export default EditCustomerRouter;