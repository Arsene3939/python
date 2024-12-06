import { Router } from 'express';
import * as controller from "../controllers/editProduct.controller.js";

const EditProductRouter = Router();

EditProductRouter.post('/', controller.createProduct);
EditProductRouter.get('/', controller.findAllProduct);
EditProductRouter.get('/:prodId', controller.findOneProduct);
EditProductRouter.put('/:prodId', controller.updateOneProduct);
EditProductRouter.delete('/:prodId', controller.deleteOneProduct);

export default EditProductRouter;