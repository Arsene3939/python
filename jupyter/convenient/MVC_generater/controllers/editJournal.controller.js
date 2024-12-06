import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Journal = db.journal;

export const createJournal = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 分錄 journal']
     * #swagger.summary = '新增分錄'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							journalSeqNo:{ type: "number", default: "0" },
							journalSubjectsNo:{ type: "number", default: "0" },
							journalDate:{ type: "string", default: "交易發生日期" },
							journalAccountCode:{ type: "string", default: "會科編號" },
							journalAccountName:{ type: "string", default: "會計科目" },
							journalType:{ type: "string", default: "借方或貸方" },
							journalTrxTable:{ type: "string", default: "該筆交易來自哪個表" },
							journalTrxId:{ type: "number", default: "0" },
							journalAmount:{ type: "number", default: "0" },
							journalDesc:{ type: "string", default: "交易描述" },
							jouranlRemark:{ type: "string", default: "交易備註" }

                        },
                        required: ["journalSeqNo","journalSubjectsNo","journalDate","journalAccountCode","journalAccountName","journalType","journalTrxTable","journalTrxId","journalAmount","journalDesc","jouranlRemark"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Journal, {
		journalSeqNo:req.body.journalSeqNo,
		journalSubjectsNo:req.body.journalSubjectsNo,
		journalDate:req.body.journalDate,
		journalAccountCode:req.body.journalAccountCode,
		journalAccountName:req.body.journalAccountName,
		journalType:req.body.journalType,
		journalTrxTable:req.body.journalTrxTable,
		journalTrxId:req.body.journalTrxId,
		journalAmount:req.body.journalAmount,
		journalDesc:req.body.journalDesc,
		jouranlRemark:req.body.jouranlRemark,

    }, req, res, next);
};

export const findOneJournal = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 分錄 journal']
    // #swagger.summary = '查詢一筆分錄'

    findOneDataHandle(Journal, req.params, req, res, next);
}

export const findAllJournal = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 分錄 journal']
    // #swagger.summary = '查詢所有分錄'

    findAllDataHandle(Journal, {}, req, res, next);
};

export const updateOneJournal = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 分錄 journal']
     * #swagger.summary = '更新分錄'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							journalSeqNo:{ type: "number", default: "0" },
							journalSubjectsNo:{ type: "number", default: "0" },
							journalDate:{ type: "string", default: "交易發生日期" },
							journalAccountCode:{ type: "string", default: "會科編號" },
							journalAccountName:{ type: "string", default: "會計科目" },
							journalType:{ type: "string", default: "借方或貸方" },
							journalTrxTable:{ type: "string", default: "該筆交易來自哪個表" },
							journalTrxId:{ type: "number", default: "0" },
							journalAmount:{ type: "number", default: "0" },
							journalDesc:{ type: "string", default: "交易描述" },
							jouranlRemark:{ type: "string", default: "交易備註" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Journal, req.params, req.body, req, res, next);
};

export const deleteOneJournal = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 分錄 journal']
    // #swagger.summary = '刪除分錄'

    deleteOneDataHandle(Journal, req.params, req, res, next);
};