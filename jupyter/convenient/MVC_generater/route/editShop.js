import { Router } from 'express';
import * as controller from "../controllers/editShop.controller.js";

const EditShopRouter = Router();

EditShopRouter.post('/', controller.createShop);
EditShopRouter.get('/', controller.findAllShop);
EditShopRouter.get('/:shopId', controller.findOneShop);
EditShopRouter.put('/:shopId', controller.updateOneShop);
EditShopRouter.delete('/:shopId', controller.deleteOneShop);

export default EditShopRouter;