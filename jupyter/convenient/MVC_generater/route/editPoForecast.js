import { Router } from 'express';
import * as controller from "../controllers/editPoForecast.controller.js";

const EditPoForecastRouter = Router();

EditPoForecastRouter.post('/', controller.createPoForecast);
EditPoForecastRouter.get('/', controller.findAllPoForecast);
EditPoForecastRouter.get('/:poFcstId', controller.findOnePoForecast);
EditPoForecastRouter.put('/:poFcstId', controller.updateOnePoForecast);
EditPoForecastRouter.delete('/:poFcstId', controller.deleteOnePoForecast);

export default EditPoForecastRouter;