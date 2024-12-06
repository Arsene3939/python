import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Cashflow = db.cashflow;

export const createCashflow = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 現金帳 cashflow']
     * #swagger.summary = '新增現金帳'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							cashflowNumber:{ type: "string", default: "現金紀錄單號" },
							cashflowDate:{ type: "string", default: "進出帳時間" },
							bankCode:{ type: "string", default: "銀行編號" },
							cashflowDesc:{ type: "string", default: "出入帳事由" },
							cashflowType:{ type: "string", default: "現金帳類別(營運、投資、融資...or其他)" },
							cashflowTrxType:{ type: "boolean", default: "true" },
							cashflowAmount:{ type: "number", default: "0" },
							cashflowCurrency:{ type: "string", default: "幣別" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["cashflowNumber","cashflowDate","bankCode","cashflowDesc","cashflowType","cashflowTrxType","cashflowAmount","cashflowCurrency","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Cashflow, {
		cashflowNumber:req.body.cashflowNumber,
		cashflowDate:req.body.cashflowDate,
		bankCode:req.body.bankCode,
		cashflowDesc:req.body.cashflowDesc,
		cashflowType:req.body.cashflowType,
		cashflowTrxType:req.body.cashflowTrxType,
		cashflowAmount:req.body.cashflowAmount,
		cashflowCurrency:req.body.cashflowCurrency,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneCashflow = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金帳 cashflow']
    // #swagger.summary = '查詢一筆現金帳'

    findOneDataHandle(Cashflow, req.params, req, res, next);
}

export const findAllCashflow = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金帳 cashflow']
    // #swagger.summary = '查詢所有現金帳'

    findAllDataHandle(Cashflow, {}, req, res, next);
};

export const findAllDurationCashflow = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 薪資 Cashflow']
    // #swagger.summary = '查詢所有時間薪資'
    // #swagger.autoQuery=true
    /*  #swagger.parameters['startDate'] = {
              in: 'query',
      } 
    */
    /*  #swagger.parameters['endDate'] = {
              in: 'query',
      } 
    */
  
    findAllDurationDataHandle(Cashflow, {}, req, res, next);
  };

export const updateOneCashflow = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 現金帳 cashflow']
     * #swagger.summary = '更新現金帳'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							cashflowNumber:{ type: "string", default: "現金紀錄單號" },
							cashflowDate:{ type: "string", default: "進出帳時間" },
							bankCode:{ type: "string", default: "銀行編號" },
							cashflowDesc:{ type: "string", default: "出入帳事由" },
							cashflowType:{ type: "string", default: "現金帳類別(營運、投資、融資...or其他)" },
							cashflowTrxType:{ type: "boolean", default: "true" },
							cashflowAmount:{ type: "number", default: "0" },
							cashflowCurrency:{ type: "string", default: "幣別" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Cashflow, req.params, req.body, req, res, next);
};

export const deleteOneCashflow = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 現金帳 cashflow']
    // #swagger.summary = '刪除現金帳'

    deleteOneDataHandle(Cashflow, req.params, req, res, next);
};