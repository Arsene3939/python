import { Router } from 'express';
import * as controller from "../controllers/editAlarm.controller.js";

const EditAlarmRouter = Router();

EditAlarmRouter.post('/', controller.createAlarm);
EditAlarmRouter.get('/', controller.findAllAlarm);
EditAlarmRouter.get('/:alarmId', controller.findOneAlarm);
EditAlarmRouter.put('/:alarmId', controller.updateOneAlarm);
EditAlarmRouter.delete('/:alarmId', controller.deleteOneAlarm);

export default EditAlarmRouter;