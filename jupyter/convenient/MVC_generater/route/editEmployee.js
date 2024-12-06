import { Router } from 'express';
import * as controller from "../controllers/editEmployee.controller.js";

const EditEmployeeRouter = Router();

EditEmployeeRouter.post('/', controller.createEmployee);
EditEmployeeRouter.get('/', controller.findAllEmployee);
EditEmployeeRouter.get('/:empId', controller.findOneEmployee);
EditEmployeeRouter.put('/:empId', controller.updateOneEmployee);
EditEmployeeRouter.delete('/:empId', controller.deleteOneEmployee);

export default EditEmployeeRouter;