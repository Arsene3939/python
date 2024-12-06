import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const PettyCash = db.pettyCash;

export const createPettyCash = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 零用金代墊 pettyCash']
     * #swagger.summary = '新增零用金代墊'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							projCode:{ type: "string", default: "費用隸屬專案" },
							empCode:{ type: "string", default: "員工編號" },
							prodNumber:{ type: "string", default: "費用隸屬產品料號" },
							pcCode:{ type: "string", default: "零用金代墊編號" },
							pcContent:{ type: "string", default: "代墊項目" },
							pcApplyDate:{ type: "string", default: "費用發生時間" },
							pcReceiptDate:{ type: "string", default: "發票取得時間" },
							pcFeeType:{ type: "string", default: "費用類別" },
							pcAmount:{ type: "number", default: "0" },
							pcTaxCode:{ type: "string", default: "稅率代碼" },
							pcPaidStatus:{ type: "boolean", default: "true" },
							pcPaidDate:{ type: "string", default: "領款日期" },
							pcSendStatus:{ type: "boolean", default: "true" },
							pcReceiptType:{ type: "number", default: "0" },
							pcRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["projCode","empCode","prodNumber","pcCode","pcContent","pcApplyDate","pcReceiptDate","pcFeeType","pcAmount","pcTaxCode","pcPaidStatus","pcPaidDate","pcSendStatus","pcReceiptType","pcRemark","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(PettyCash, {
		projCode:req.body.projCode,
		empCode:req.body.empCode,
		prodNumber:req.body.prodNumber,
		pcCode:req.body.pcCode,
		pcContent:req.body.pcContent,
		pcApplyDate:req.body.pcApplyDate,
		pcReceiptDate:req.body.pcReceiptDate,
		pcFeeType:req.body.pcFeeType,
		pcAmount:req.body.pcAmount,
		pcTaxCode:req.body.pcTaxCode,
		pcPaidStatus:req.body.pcPaidStatus,
		pcPaidDate:req.body.pcPaidDate,
		pcSendStatus:req.body.pcSendStatus,
		pcReceiptType:req.body.pcReceiptType,
		pcRemark:req.body.pcRemark,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOnePettyCash = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 零用金代墊 pettyCash']
    // #swagger.summary = '查詢一筆零用金代墊'

    findOneDataHandle(PettyCash, req.params, req, res, next);
}

export const findAllPettyCash = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 零用金代墊 pettyCash']
    // #swagger.summary = '查詢所有零用金代墊'

    findAllDataHandle(PettyCash, {}, req, res, next);
};

export const findAllDurationPettyCash = async (req, res, next) => {
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

export const updateOnePettyCash = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 零用金代墊 pettyCash']
     * #swagger.summary = '更新零用金代墊'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							projCode:{ type: "string", default: "費用隸屬專案" },
							empCode:{ type: "string", default: "員工編號" },
							prodNumber:{ type: "string", default: "費用隸屬產品料號" },
							pcCode:{ type: "string", default: "零用金代墊編號" },
							pcContent:{ type: "string", default: "代墊項目" },
							pcApplyDate:{ type: "string", default: "費用發生時間" },
							pcReceiptDate:{ type: "string", default: "發票取得時間" },
							pcFeeType:{ type: "string", default: "費用類別" },
							pcAmount:{ type: "number", default: "0" },
							pcTaxCode:{ type: "string", default: "稅率代碼" },
							pcPaidStatus:{ type: "boolean", default: "true" },
							pcPaidDate:{ type: "string", default: "領款日期" },
							pcSendStatus:{ type: "boolean", default: "true" },
							pcReceiptType:{ type: "number", default: "0" },
							pcRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(PettyCash, req.params, req.body, req, res, next);
};

export const deleteOnePettyCash = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 零用金代墊 pettyCash']
    // #swagger.summary = '刪除零用金代墊'

    deleteOneDataHandle(PettyCash, req.params, req, res, next);
};