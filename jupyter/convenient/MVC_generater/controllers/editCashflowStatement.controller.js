import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const CashflowStatement = db.cashflowStatement;

export const createCashflowStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 現金流量表 cashflowStatement']
     * #swagger.summary = '新增現金流量表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							cfsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							cfsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							cfsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							cfsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							cfsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							cfsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							cfsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							cfsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							cfsStartDate:{ type: "string", default: "期別開始時間" },
							cfsEndDate:{ type: "string", default: "期別結束時間" },
							cfsAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        },
                        required: ["cfsFirstLevelCode","cfsFirstLevelAccount","cfsSecondLevelCode","cfsSecondLevelAccount","cfsThirdLevelCode","cfsThirdLevelAccount","cfsFourthLevelCode","cfsFourthLevelAccount","cfsStartDate","cfsEndDate","cfsAmount","isNegative"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(CashflowStatement, {
		cfsFirstLevelCode:req.body.cfsFirstLevelCode,
		cfsFirstLevelAccount:req.body.cfsFirstLevelAccount,
		cfsSecondLevelCode:req.body.cfsSecondLevelCode,
		cfsSecondLevelAccount:req.body.cfsSecondLevelAccount,
		cfsThirdLevelCode:req.body.cfsThirdLevelCode,
		cfsThirdLevelAccount:req.body.cfsThirdLevelAccount,
		cfsFourthLevelCode:req.body.cfsFourthLevelCode,
		cfsFourthLevelAccount:req.body.cfsFourthLevelAccount,
		cfsStartDate:req.body.cfsStartDate,
		cfsEndDate:req.body.cfsEndDate,
		cfsAmount:req.body.cfsAmount,
		isNegative:req.body.isNegative,

    }, req, res, next);
};

export const findOneCashflowStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金流量表 cashflowStatement']
    // #swagger.summary = '查詢一筆現金流量表'

    findOneDataHandle(CashflowStatement, req.params, req, res, next);
}

export const findAllCashflowStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金流量表 cashflowStatement']
    // #swagger.summary = '查詢所有現金流量表'

    findAllDataHandle(CashflowStatement, {}, req, res, next);
};

export const updateOneCashflowStatement = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 現金流量表 cashflowStatement']
     * #swagger.summary = '更新現金流量表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							cfsFirstLevelCode:{ type: "string", default: "第一層科目代碼" },
							cfsFirstLevelAccount:{ type: "string", default: "第一層科目名稱" },
							cfsSecondLevelCode:{ type: "string", default: "第二層科目代碼" },
							cfsSecondLevelAccount:{ type: "string", default: "第二層科目名稱" },
							cfsThirdLevelCode:{ type: "string", default: "第三層科目代碼" },
							cfsThirdLevelAccount:{ type: "string", default: "第三層科目名稱" },
							cfsFourthLevelCode:{ type: "string", default: "第四層科目代碼" },
							cfsFourthLevelAccount:{ type: "string", default: "第四層科目名稱" },
							cfsStartDate:{ type: "string", default: "期別開始時間" },
							cfsEndDate:{ type: "string", default: "期別結束時間" },
							cfsAmount:{ type: "number", default: "0" },
							isNegative:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(CashflowStatement, req.params, req.body, req, res, next);
};

export const deleteOneCashflowStatement = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金流量表 cashflowStatement']
    // #swagger.summary = '刪除現金流量表'

    deleteOneDataHandle(CashflowStatement, req.params, req, res, next);
};