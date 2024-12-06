import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Storage = db.storage;

export const createStorage = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 倉儲 storage']
     * #swagger.summary = '新增倉儲'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉儲編號" },
							storageName:{ type: "string", default: "倉儲名稱" },
							storageType:{ type: "string", default: "倉儲類別" },
							storageAddress:{ type: "string", default: "倉儲地址" }

                        },
                        required: ["storageCode","storageName","storageType","storageAddress"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Storage, {
		storageCode:req.body.storageCode,
		storageName:req.body.storageName,
		storageType:req.body.storageType,
		storageAddress:req.body.storageAddress,

    }, req, res, next);
};

export const findOneStorage = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 倉儲 storage']
    // #swagger.summary = '查詢一筆倉儲'

    findOneDataHandle(Storage, req.params, req, res, next);
}

export const findAllStorage = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 倉儲 storage']
    // #swagger.summary = '查詢所有倉儲'

    findAllDataHandle(Storage, {}, req, res, next);
};

export const updateOneStorage = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 倉儲 storage']
     * #swagger.summary = '更新倉儲'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							storageCode:{ type: "string", default: "倉儲編號" },
							storageName:{ type: "string", default: "倉儲名稱" },
							storageType:{ type: "string", default: "倉儲類別" },
							storageAddress:{ type: "string", default: "倉儲地址" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Storage, req.params, req.body, req, res, next);
};

export const deleteOneStorage = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 倉儲 storage']
    // #swagger.summary = '刪除倉儲'

    deleteOneDataHandle(Storage, req.params, req, res, next);
};