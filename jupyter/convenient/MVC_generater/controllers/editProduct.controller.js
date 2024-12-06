import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Product = db.product;

export const createProduct = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 產品 product']
     * #swagger.summary = '新增產品'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉儲編號" },
							vendorCode:{ type: "string", default: "供應商編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							prodModel:{ type: "string", default: "產品型號" },
							prodName:{ type: "string", default: "產品名稱" },
							prodBrand:{ type: "string", default: "產品品牌" },
							prodDesc:{ type: "string", default: "產品說明" },
							prodUnitPrice:{ type: "number", default: "0" },
							prodUnitCost:{ type: "number", default: "0" },
							prodSafetyQty:{ type: "number", default: "0" },
							prodUnit:{ type: "string", default: "單位" },
							prodMOQ:{ type: "number", default: "0" },
							prodUnitPriceQuantity1:{ type: "number", default: "0" },
							prodUnitPriceQuantity2:{ type: "number", default: "0" },
							prodUnitPriceQuantity3:{ type: "number", default: "0" }

                        },
                        required: ["storageCode","vendorCode","prodNumber","prodModel","prodName","prodBrand","prodDesc","prodUnitPrice","prodUnitCost","prodSafetyQty","prodUnit","prodMOQ","prodUnitPriceQuantity1","prodUnitPriceQuantity2","prodUnitPriceQuantity3"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Product, {
		storageCode:req.body.storageCode,
		vendorCode:req.body.vendorCode,
		prodNumber:req.body.prodNumber,
		prodModel:req.body.prodModel,
		prodName:req.body.prodName,
		prodBrand:req.body.prodBrand,
		prodDesc:req.body.prodDesc,
		prodUnitPrice:req.body.prodUnitPrice,
		prodUnitCost:req.body.prodUnitCost,
		prodSafetyQty:req.body.prodSafetyQty,
		prodUnit:req.body.prodUnit,
		prodMOQ:req.body.prodMOQ,
		prodUnitPriceQuantity1:req.body.prodUnitPriceQuantity1,
		prodUnitPriceQuantity2:req.body.prodUnitPriceQuantity2,
		prodUnitPriceQuantity3:req.body.prodUnitPriceQuantity3,

    }, req, res, next);
};

export const findOneProduct = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品 product']
    // #swagger.summary = '查詢一筆產品'

    findOneDataHandle(Product, req.params, req, res, next);
}

export const findAllProduct = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品 product']
    // #swagger.summary = '查詢所有產品'

    findAllDataHandle(Product, {}, req, res, next);
};

export const updateOneProduct = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 產品 product']
     * #swagger.summary = '更新產品'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉儲編號" },
							vendorCode:{ type: "string", default: "供應商編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							prodModel:{ type: "string", default: "產品型號" },
							prodName:{ type: "string", default: "產品名稱" },
							prodBrand:{ type: "string", default: "產品品牌" },
							prodDesc:{ type: "string", default: "產品說明" },
							prodUnitPrice:{ type: "number", default: "0" },
							prodUnitCost:{ type: "number", default: "0" },
							prodSafetyQty:{ type: "number", default: "0" },
							prodUnit:{ type: "string", default: "單位" },
							prodMOQ:{ type: "number", default: "0" },
							prodUnitPriceQuantity1:{ type: "number", default: "0" },
							prodUnitPriceQuantity2:{ type: "number", default: "0" },
							prodUnitPriceQuantity3:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Product, req.params, req.body, req, res, next);
};

export const deleteOneProduct = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品 product']
    // #swagger.summary = '刪除產品'

    deleteOneDataHandle(Product, req.params, req, res, next);
};