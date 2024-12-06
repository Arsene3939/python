import { Router } from 'express';
import * as controller from "../controllers/editTodo.controller.js";

const EditTodoRouter = Router();

EditTodoRouter.post('/', controller.createTodo);
EditTodoRouter.get('/', controller.findAllTodo);
EditTodoRouter.get('/:todoId', controller.findOneTodo);
EditTodoRouter.put('/:todoId', controller.updateOneTodo);
EditTodoRouter.delete('/:todoId', controller.deleteOneTodo);

export default EditTodoRouter;