import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Shop = db.shop;

export const createShop = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 店家 shop']
     * #swagger.summary = '新增店家'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							shopCode:{ type: "string", default: "店家編號" },
							shopName:{ type: "string", default: "店家名稱" },
							shopArea:{ type: "string", default: "店家地區" },
							shopAddress:{ type: "string", default: "店家地址" }

                        },
                        required: ["shopCode","shopName","shopArea","shopAddress"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Shop, {
		shopCode:req.body.shopCode,
		shopName:req.body.shopName,
		shopArea:req.body.shopArea,
		shopAddress:req.body.shopAddress,

    }, req, res, next);
};

export const findOneShop = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 店家 shop']
    // #swagger.summary = '查詢一筆店家'

    findOneDataHandle(Shop, req.params, req, res, next);
}

export const findAllShop = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 店家 shop']
    // #swagger.summary = '查詢所有店家'

    findAllDataHandle(Shop, {}, req, res, next);
};

export const updateOneShop = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 店家 shop']
     * #swagger.summary = '更新店家'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							shopCode:{ type: "string", default: "店家編號" },
							shopName:{ type: "string", default: "店家名稱" },
							shopArea:{ type: "string", default: "店家地區" },
							shopAddress:{ type: "string", default: "店家地址" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Shop, req.params, req.body, req, res, next);
};

export const deleteOneShop = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 店家 shop']
    // #swagger.summary = '刪除店家'

    deleteOneDataHandle(Shop, req.params, req, res, next);
};