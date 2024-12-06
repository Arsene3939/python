import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Inv = db.inv;

export const createInv = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 庫存盤點 inv']
     * #swagger.summary = '新增庫存盤點'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉庫編號" },
							empCode:{ type: "string", default: "盤點人員編號" },
							shopCode:{ type: "string", default: "店家編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							invCode:{ type: "string", default: "庫存盤點編號" },
							invDate:{ type: "string", default: "盤點日期" },
							invLeftQty:{ type: "number", default: "0" },
							invUnitCost:{ type: "number", default: "0" }

                        },
                        required: ["storageCode","empCode","shopCode","prodNumber","invCode","invDate","invLeftQty","invUnitCost"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Inv, {
		storageCode:req.body.storageCode,
		empCode:req.body.empCode,
		shopCode:req.body.shopCode,
		prodNumber:req.body.prodNumber,
		invCode:req.body.invCode,
		invDate:req.body.invDate,
		invLeftQty:req.body.invLeftQty,
		invUnitCost:req.body.invUnitCost,

    }, req, res, next);
};

export const findOneInv = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 庫存盤點 inv']
    // #swagger.summary = '查詢一筆庫存盤點'

    findOneDataHandle(Inv, req.params, req, res, next);
}

export const findAllInv = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 庫存盤點 inv']
    // #swagger.summary = '查詢所有庫存盤點'

    findAllDataHandle(Inv, {}, req, res, next);
};

export const updateOneInv = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 庫存盤點 inv']
     * #swagger.summary = '更新庫存盤點'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉庫編號" },
							empCode:{ type: "string", default: "盤點人員編號" },
							shopCode:{ type: "string", default: "店家編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							invCode:{ type: "string", default: "庫存盤點編號" },
							invDate:{ type: "string", default: "盤點日期" },
							invLeftQty:{ type: "number", default: "0" },
							invUnitCost:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Inv, req.params, req.body, req, res, next);
};

export const deleteOneInv = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 庫存盤點 inv']
    // #swagger.summary = '刪除庫存盤點'

    deleteOneDataHandle(Inv, req.params, req, res, next);
};