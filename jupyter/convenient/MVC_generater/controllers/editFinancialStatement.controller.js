import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const FinancialStatement = db.financialStatement;

export const createFinancialStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 簡明三表 financialStatement']
     * #swagger.summary = '新增簡明三表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							fsCategory:{ type: "string", default: "財報類別" },
							fsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							fsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							fsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							fsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							fsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							fsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							fsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							fsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							fsDuration:{ type: "string", default: "期別" },
							fsAmount:{ type: "number", default: "0" }

                        },
                        required: ["fsCategory","fsFirstLevelCode","fsFirstLevelAccount","fsSecondLevelCode","fsSecondLevelAccount","fsThirdLevelCode","fsThirdLevelAccount","fsFourthLevelCode","fsFourthLevelAccount","fsDuration","fsAmount"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(FinancialStatement, {
		fsCategory:req.body.fsCategory,
		fsFirstLevelCode:req.body.fsFirstLevelCode,
		fsFirstLevelAccount:req.body.fsFirstLevelAccount,
		fsSecondLevelCode:req.body.fsSecondLevelCode,
		fsSecondLevelAccount:req.body.fsSecondLevelAccount,
		fsThirdLevelCode:req.body.fsThirdLevelCode,
		fsThirdLevelAccount:req.body.fsThirdLevelAccount,
		fsFourthLevelCode:req.body.fsFourthLevelCode,
		fsFourthLevelAccount:req.body.fsFourthLevelAccount,
		fsDuration:req.body.fsDuration,
		fsAmount:req.body.fsAmount,

    }, req, res, next);
};

export const findOneFinancialStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 簡明三表 financialStatement']
    // #swagger.summary = '查詢一筆簡明三表'

    findOneDataHandle(FinancialStatement, req.params, req, res, next);
}

export const findAllFinancialStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 簡明三表 financialStatement']
    // #swagger.summary = '查詢所有簡明三表'

    findAllDataHandle(FinancialStatement, {}, req, res, next);
};

export const updateOneFinancialStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 簡明三表 financialStatement']
     * #swagger.summary = '更新簡明三表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							fsCategory:{ type: "string", default: "財報類別" },
							fsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							fsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							fsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							fsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							fsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							fsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							fsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							fsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							fsDuration:{ type: "string", default: "期別" },
							fsAmount:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(FinancialStatement, req.params, req.body, req, res, next);
};

export const deleteOneFinancialStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 簡明三表 financialStatement']
    // #swagger.summary = '刪除簡明三表'

    deleteOneDataHandle(FinancialStatement, req.params, req, res, next);
};