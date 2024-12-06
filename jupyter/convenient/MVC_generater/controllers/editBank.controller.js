import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Bank = db.bank;

export const createBank = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銀行帳戶 bank']
     * #swagger.summary = '新增銀行帳戶'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bankCode:{ type: "string", default: "銀行編號" },
							bankSwiftCode:{ type: "string", default: "銀行代碼" },
							bankAccount:{ type: "string", default: "銀行帳號" },
							bankOwnerType:{ type: "number", default: "0" },
							bankOwnerCode:{ type: "string", default: "銀行帳戶擁有者" }

                        },
                        required: ["bankCode","bankSwiftCode","bankAccount","bankOwnerType","bankOwnerCode"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Bank, {
		bankCode:req.body.bankCode,
		bankSwiftCode:req.body.bankSwiftCode,
		bankAccount:req.body.bankAccount,
		bankOwnerType:req.body.bankOwnerType,
		bankOwnerCode:req.body.bankOwnerCode,

    }, req, res, next);
};

export const findOneBank = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行帳戶 bank']
    // #swagger.summary = '查詢一筆銀行帳戶'

    findOneDataHandle(Bank, req.params, req, res, next);
}

export const findAllBank = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行帳戶 bank']
    // #swagger.summary = '查詢所有銀行帳戶'

    findAllDataHandle(Bank, {}, req, res, next);
};

export const updateOneBank = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銀行帳戶 bank']
     * #swagger.summary = '更新銀行帳戶'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bankCode:{ type: "string", default: "銀行編號" },
							bankSwiftCode:{ type: "string", default: "銀行代碼" },
							bankAccount:{ type: "string", default: "銀行帳號" },
							bankOwnerType:{ type: "number", default: "0" },
							bankOwnerCode:{ type: "string", default: "銀行帳戶擁有者" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Bank, req.params, req.body, req, res, next);
};

export const deleteOneBank = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行帳戶 bank']
    // #swagger.summary = '刪除銀行帳戶'

    deleteOneDataHandle(Bank, req.params, req, res, next);
};