import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const BalanceSheet = db.balanceSheet;

export const createBalanceSheet = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 資產負債表 balanceSheet']
     * #swagger.summary = '新增資產負債表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							bsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							bsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							bsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							bsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							bsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							bsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							bsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							bsDuration:{ type: "string", default: "期別" },
							bsAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        },
                        required: ["bsFirstLevelCode","bsFirstLevelAccount","bsSecondLevelCode","bsSecondLevelAccount","bsThirdLevelCode","bsThirdLevelAccount","bsFourthLevelCode","bsFourthLevelAccount","bsDuration","bsAmount","isNegative"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(BalanceSheet, {
		bsFirstLevelCode:req.body.bsFirstLevelCode,
		bsFirstLevelAccount:req.body.bsFirstLevelAccount,
		bsSecondLevelCode:req.body.bsSecondLevelCode,
		bsSecondLevelAccount:req.body.bsSecondLevelAccount,
		bsThirdLevelCode:req.body.bsThirdLevelCode,
		bsThirdLevelAccount:req.body.bsThirdLevelAccount,
		bsFourthLevelCode:req.body.bsFourthLevelCode,
		bsFourthLevelAccount:req.body.bsFourthLevelAccount,
		bsDuration:req.body.bsDuration,
		bsAmount:req.body.bsAmount,
		isNegative:req.body.isNegative,

    }, req, res, next);
};

export const findOneBalanceSheet = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 資產負債表 balanceSheet']
    // #swagger.summary = '查詢一筆資產負債表'

    findOneDataHandle(BalanceSheet, req.params, req, res, next);
}

export const findAllBalanceSheet = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 資產負債表 balanceSheet']
    // #swagger.summary = '查詢所有資產負債表'

    findAllDataHandle(BalanceSheet, {}, req, res, next);
};

export const updateOneBalanceSheet = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 資產負債表 balanceSheet']
     * #swagger.summary = '更新資產負債表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							bsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							bsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							bsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							bsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							bsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							bsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							bsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							bsDuration:{ type: "string", default: "期別" },
							bsAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(BalanceSheet, req.params, req.body, req, res, next);
};

export const deleteOneBalanceSheet = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 資產負債表 balanceSheet']
    // #swagger.summary = '刪除資產負債表'

    deleteOneDataHandle(BalanceSheet, req.params, req, res, next);
};