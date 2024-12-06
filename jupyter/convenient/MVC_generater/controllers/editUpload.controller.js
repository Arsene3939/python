import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Upload = db.upload;

export const createUpload = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 上傳 upload']
     * #swagger.summary = '新增上傳'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							uploadUserId:{ type: "number", default: "0" },
							uploadType:{ type: "string", default: "上傳類型" },
							uploadFilePath:{ type: "string", default: "檔案路徑" },
							uploadFileName:{ type: "string", default: "檔案名稱" },
							uploadDatetime:{ type: "string", default: "上傳時間" },
							syncDatetime:{ type: "string", default: "同步時間" }

                        },
                        required: ["uploadUserId","uploadType","uploadFilePath","uploadFileName","uploadDatetime","syncDatetime"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Upload, {
		uploadUserId:req.body.uploadUserId,
		uploadType:req.body.uploadType,
		uploadFilePath:req.body.uploadFilePath,
		uploadFileName:req.body.uploadFileName,
		uploadDatetime:req.body.uploadDatetime,
		syncDatetime:req.body.syncDatetime,

    }, req, res, next);
};

export const findOneUpload = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 上傳 upload']
    // #swagger.summary = '查詢一筆上傳'

    findOneDataHandle(Upload, req.params, req, res, next);
}

export const findAllUpload = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 上傳 upload']
    // #swagger.summary = '查詢所有上傳'

    findAllDataHandle(Upload, {}, req, res, next);
};

export const updateOneUpload = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 上傳 upload']
     * #swagger.summary = '更新上傳'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							uploadUserId:{ type: "number", default: "0" },
							uploadType:{ type: "string", default: "上傳類型" },
							uploadFilePath:{ type: "string", default: "檔案路徑" },
							uploadFileName:{ type: "string", default: "檔案名稱" },
							uploadDatetime:{ type: "string", default: "上傳時間" },
							syncDatetime:{ type: "string", default: "同步時間" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Upload, req.params, req.body, req, res, next);
};

export const deleteOneUpload = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 上傳 upload']
    // #swagger.summary = '刪除上傳'

    deleteOneDataHandle(Upload, req.params, req, res, next);
};