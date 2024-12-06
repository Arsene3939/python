import { Router } from 'express';
import * as controller from "../controllers/edit_bigname_.controller.js";

const Edit_bigname_Router = Router();

Edit_bigname_Router.post('/', controller.create_bigname_);
Edit_bigname_Router.get('/', controller.findAll_bigname_);
Edit_bigname_Router.get("/date", controller.findAllDuration_bigname_);
Edit_bigname_Router.get('/:_smallname_Id', controller.findOne_bigname_);
Edit_bigname_Router.put('/:_smallname_Id', controller.updateOne_bigname_);
Edit_bigname_Router.delete('/:_smallname_Id', controller.deleteOne_bigname_);

export default Edit_bigname_Router;