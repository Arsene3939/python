import { Router } from 'express';
import * as controller from "../controllers/editBusiness_unit.controller.js";

const EditBusiness_unitRouter = Router();

EditBusiness_unitRouter.post('/', controller.createBusiness_unit);
EditBusiness_unitRouter.get('/', controller.findAllBusiness_unit);
EditBusiness_unitRouter.get('/:bizUnitId', controller.findOneBusiness_unit);
EditBusiness_unitRouter.put('/:bizUnitId', controller.updateOneBusiness_unit);
EditBusiness_unitRouter.delete('/:bizUnitId', controller.deleteOneBusiness_unit);

export default EditBusiness_unitRouter;