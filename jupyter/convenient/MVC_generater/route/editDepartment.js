import { Router } from 'express';
import * as controller from "../controllers/editDepartment.controller.js";

const EditDepartmentRouter = Router();

EditDepartmentRouter.post('/', controller.createDepartment);
EditDepartmentRouter.get('/', controller.findAllDepartment);
EditDepartmentRouter.get('/:deptId', controller.findOneDepartment);
EditDepartmentRouter.put('/:deptId', controller.updateOneDepartment);
EditDepartmentRouter.delete('/:deptId', controller.deleteOneDepartment);

export default EditDepartmentRouter;