import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Expense = db.expense;

export const createExpense = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 成本列表 expense']
     * #swagger.summary = '新增成本列表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bizUnitCode:{ type: "string", default: "事業體編號" },
							projCode:{ type: "string", default: "專案編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							empCode:{ type: "string", default: "員工編號" },
							expCode:{ type: "string", default: "成本編號" },
							expInvoiceNumber:{ type: "string", default: "發票編號" },
							expInvoiceDate:{ type: "string", default: "發票開立時間" },
							expTaxCode:{ type: "string", default: "稅率代碼" },
							expReceiptType:{ type: "number", default: "0" },
							expAccount:{ type: "string", default: "會計科目" },
							expType:{ type: "number", default: "0" },
							expContent:{ type: "string", default: "內容(描述)" },
							expAmount:{ type: "number", default: "0" },
							expPayfor:{ type: "string", default: "付款對象" },
							expPaymentMethod:{ type: "string", default: "付款方式" },
							expEstPaidDate:{ type: "string", default: "預計付款時間" },
							expPaidDate:{ type: "string", default: "實際付款時間" },
							expPaidStatus:{ type: "boolean", default: "true" },
							expRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["bizUnitCode","projCode","prodNumber","empCode","expCode","expInvoiceNumber","expInvoiceDate","expTaxCode","expReceiptType","expAccount","expType","expContent","expAmount","expPayfor","expPaymentMethod","expEstPaidDate","expPaidDate","expPaidStatus","expRemark","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Expense, {
		bizUnitCode:req.body.bizUnitCode,
		projCode:req.body.projCode,
		prodNumber:req.body.prodNumber,
		empCode:req.body.empCode,
		expCode:req.body.expCode,
		expInvoiceNumber:req.body.expInvoiceNumber,
		expInvoiceDate:req.body.expInvoiceDate,
		expTaxCode:req.body.expTaxCode,
		expReceiptType:req.body.expReceiptType,
		expAccount:req.body.expAccount,
		expType:req.body.expType,
		expContent:req.body.expContent,
		expAmount:req.body.expAmount,
		expPayfor:req.body.expPayfor,
		expPaymentMethod:req.body.expPaymentMethod,
		expEstPaidDate:req.body.expEstPaidDate,
		expPaidDate:req.body.expPaidDate,
		expPaidStatus:req.body.expPaidStatus,
		expRemark:req.body.expRemark,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneExpense = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 成本列表 expense']
    // #swagger.summary = '查詢一筆成本列表'

    findOneDataHandle(Expense, req.params, req, res, next);
}

export const findAllExpense = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 成本列表 expense']
    // #swagger.summary = '查詢所有成本列表'

    findAllDataHandle(Expense, {}, req, res, next);
};

export const findAllDurationExpense = async (req, res, next) => {
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

export const updateOneExpense = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 成本列表 expense']
     * #swagger.summary = '更新成本列表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							bizUnitCode:{ type: "string", default: "事業體編號" },
							projCode:{ type: "string", default: "專案編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							empCode:{ type: "string", default: "員工編號" },
							expCode:{ type: "string", default: "成本編號" },
							expInvoiceNumber:{ type: "string", default: "發票編號" },
							expInvoiceDate:{ type: "string", default: "發票開立時間" },
							expTaxCode:{ type: "string", default: "稅率代碼" },
							expReceiptType:{ type: "number", default: "0" },
							expAccount:{ type: "string", default: "會計科目" },
							expType:{ type: "number", default: "0" },
							expContent:{ type: "string", default: "內容(描述)" },
							expAmount:{ type: "number", default: "0" },
							expPayfor:{ type: "string", default: "付款對象" },
							expPaymentMethod:{ type: "string", default: "付款方式" },
							expEstPaidDate:{ type: "string", default: "預計付款時間" },
							expPaidDate:{ type: "string", default: "實際付款時間" },
							expPaidStatus:{ type: "boolean", default: "true" },
							expRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Expense, req.params, req.body, req, res, next);
};

export const deleteOneExpense = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 成本列表 expense']
    // #swagger.summary = '刪除成本列表'

    deleteOneDataHandle(Expense, req.params, req, res, next);
};