import { Router } from 'express';
import * as controller from "../controllers/editReturnsAndAllowances.controller.js";

const EditReturnsAndAllowancesRouter = Router();

EditReturnsAndAllowancesRouter.post('/', controller.createReturnsAndAllowances);
EditReturnsAndAllowancesRouter.get('/', controller.findAllReturnsAndAllowances);
EditReturnsAndAllowancesRouter.get("/date", controller.findAllDurationReturnsAndAllowances);
EditReturnsAndAllowancesRouter.get('/:sraId', controller.findOneReturnsAndAllowances);
EditReturnsAndAllowancesRouter.put('/:sraId', controller.updateOneReturnsAndAllowances);
EditReturnsAndAllowancesRouter.delete('/:sraId', controller.deleteOneReturnsAndAllowances);

export default EditReturnsAndAllowancesRouter;