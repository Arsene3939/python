import { Router } from 'express';
import * as controller from "../controllers/editPoReceived.controller.js";

const EditPoReceivedRouter = Router();

EditPoReceivedRouter.post('/', controller.createPoReceived);
EditPoReceivedRouter.get('/', controller.findAllPoReceived);
EditPoReceivedRouter.get("/date", controller.findAllDurationPoReceived);
EditPoReceivedRouter.get('/:poRcvId', controller.findOnePoReceived);
EditPoReceivedRouter.put('/:poRcvId', controller.updateOnePoReceived);
EditPoReceivedRouter.delete('/:poRcvId', controller.deleteOnePoReceived);

export default EditPoReceivedRouter;