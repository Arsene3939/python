import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Business_unit = db.business_unit;

export const createBusiness_unit = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 事業體 business_unit']
     * #swagger.summary = '新增事業體'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bizUnitCode:{ type: "string", default: "事業體編號" },
							bizUnitName:{ type: "string", default: "事業體名稱" }

                        },
                        required: ["bizUnitCode","bizUnitName"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Business_unit, {
		bizUnitCode:req.body.bizUnitCode,
		bizUnitName:req.body.bizUnitName,

    }, req, res, next);
};

export const findOneBusiness_unit = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 事業體 business_unit']
    // #swagger.summary = '查詢一筆事業體'

    findOneDataHandle(Business_unit, req.params, req, res, next);
}

export const findAllBusiness_unit = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 事業體 business_unit']
    // #swagger.summary = '查詢所有事業體'

    findAllDataHandle(Business_unit, {}, req, res, next);
};

export const updateOneBusiness_unit = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 事業體 business_unit']
     * #swagger.summary = '更新事業體'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bizUnitCode:{ type: "string", default: "事業體編號" },
							bizUnitName:{ type: "string", default: "事業體名稱" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Business_unit, req.params, req.body, req, res, next);
};

export const deleteOneBusiness_unit = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 事業體 business_unit']
    // #swagger.summary = '刪除事業體'

    deleteOneDataHandle(Business_unit, req.params, req, res, next);
};