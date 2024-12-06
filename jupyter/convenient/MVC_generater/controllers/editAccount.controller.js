import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Account = db.account;

export const createAccount = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 會計項目 account']
     * #swagger.summary = '新增會計項目'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							accountCode:{ type: "string", default: "會計項目代號" },
							accountName:{ type: "string", default: "會計項目名稱(中文)" },
							accountType:{ type: "string", default: "會計類別" },
							accountExpirationDate:{ type: "string", default: "失效日" }

                        },
                        required: ["accountCode","accountName","accountType","accountExpirationDate"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Account, {
		accountCode:req.body.accountCode,
		accountName:req.body.accountName,
		accountType:req.body.accountType,
		accountExpirationDate:req.body.accountExpirationDate,

    }, req, res, next);
};

export const findOneAccount = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 會計項目 account']
    // #swagger.summary = '查詢一筆會計項目'

    findOneDataHandle(Account, req.params, req, res, next);
}

export const findAllAccount = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 會計項目 account']
    // #swagger.summary = '查詢所有會計項目'

    findAllDataHandle(Account, {}, req, res, next);
};

export const updateOneAccount = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 會計項目 account']
     * #swagger.summary = '更新會計項目'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							accountCode:{ type: "string", default: "會計項目代號" },
							accountName:{ type: "string", default: "會計項目名稱(中文)" },
							accountType:{ type: "string", default: "會計類別" },
							accountExpirationDate:{ type: "string", default: "失效日" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Account, req.params, req.body, req, res, next);
};

export const deleteOneAccount = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 會計項目 account']
    // #swagger.summary = '刪除會計項目'

    deleteOneDataHandle(Account, req.params, req, res, next);
};