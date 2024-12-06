import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const IncomeStatement = db.incomeStatement;

export const createIncomeStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 損益表 incomeStatement']
     * #swagger.summary = '新增損益表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							isFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							isFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							isSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							isSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							isThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							isThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							isFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							isFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							isStartDate:{ type: "string", default: "期別開始時間" },
							isEndDate:{ type: "string", default: "期別結束時間" },
							isAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        },
                        required: ["isFirstLevelCode","isFirstLevelAccount","isSecondLevelCode","isSecondLevelAccount","isThirdLevelCode","isThirdLevelAccount","isFourthLevelCode","isFourthLevelAccount","isStartDate","isEndDate","isAmount","isNegative"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(IncomeStatement, {
		isFirstLevelCode:req.body.isFirstLevelCode,
		isFirstLevelAccount:req.body.isFirstLevelAccount,
		isSecondLevelCode:req.body.isSecondLevelCode,
		isSecondLevelAccount:req.body.isSecondLevelAccount,
		isThirdLevelCode:req.body.isThirdLevelCode,
		isThirdLevelAccount:req.body.isThirdLevelAccount,
		isFourthLevelCode:req.body.isFourthLevelCode,
		isFourthLevelAccount:req.body.isFourthLevelAccount,
		isStartDate:req.body.isStartDate,
		isEndDate:req.body.isEndDate,
		isAmount:req.body.isAmount,
		isNegative:req.body.isNegative,

    }, req, res, next);
};

export const findOneIncomeStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 損益表 incomeStatement']
    // #swagger.summary = '查詢一筆損益表'

    findOneDataHandle(IncomeStatement, req.params, req, res, next);
}

export const findAllIncomeStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 損益表 incomeStatement']
    // #swagger.summary = '查詢所有損益表'

    findAllDataHandle(IncomeStatement, {}, req, res, next);
};

export const updateOneIncomeStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 損益表 incomeStatement']
     * #swagger.summary = '更新損益表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							isFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							isFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							isSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							isSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							isThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							isThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							isFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							isFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							isStartDate:{ type: "string", default: "期別開始時間" },
							isEndDate:{ type: "string", default: "期別結束時間" },
							isAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(IncomeStatement, req.params, req.body, req, res, next);
};

export const deleteOneIncomeStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 損益表 incomeStatement']
    // #swagger.summary = '刪除損益表'

    deleteOneDataHandle(IncomeStatement, req.params, req, res, next);
};