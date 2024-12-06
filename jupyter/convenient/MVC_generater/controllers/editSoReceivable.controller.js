import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const SoReceivable = db.soReceivable;

export const createSoReceivable = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 產品銷貨紀錄 soReceivable']
     * #swagger.summary = '新增產品銷貨紀錄'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "銷售員工編號" },
							custCode:{ type: "string", default: "客戶編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							soRcvCode:{ type: "string", default: "產品銷貨編號" },
							soRcvInvoiceNumber:{ type: "string", default: "發票編號" },
							soRcvSalesQty:{ type: "number", default: "0" },
							soRcvInvoiceDate:{ type: "string", default: "開立時間" },
							soRcvSalesAmount:{ type: "number", default: "0" },
							soRcvDueDate:{ type: "string", default: "預計入帳時間" },
							soRcvPostDate:{ type: "string", default: "實際入帳時間" },
							soRcvStatus:{ type: "boolean", default: "true" },
							soRcvSalesChannel:{ type: "string", default: "銷售渠道" },
							soRcvSalesPlatform:{ type: "string", default: "銷售平台" },
							soRcvRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["empCode","custCode","prodNumber","shopCode","bizUnitCode","soRcvCode","soRcvInvoiceNumber","soRcvSalesQty","soRcvInvoiceDate","soRcvSalesAmount","soRcvDueDate","soRcvPostDate","soRcvStatus","soRcvSalesChannel","soRcvSalesPlatform","soRcvRemark","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(SoReceivable, {
		empCode:req.body.empCode,
		custCode:req.body.custCode,
		prodNumber:req.body.prodNumber,
		shopCode:req.body.shopCode,
		bizUnitCode:req.body.bizUnitCode,
		soRcvCode:req.body.soRcvCode,
		soRcvInvoiceNumber:req.body.soRcvInvoiceNumber,
		soRcvSalesQty:req.body.soRcvSalesQty,
		soRcvInvoiceDate:req.body.soRcvInvoiceDate,
		soRcvSalesAmount:req.body.soRcvSalesAmount,
		soRcvDueDate:req.body.soRcvDueDate,
		soRcvPostDate:req.body.soRcvPostDate,
		soRcvStatus:req.body.soRcvStatus,
		soRcvSalesChannel:req.body.soRcvSalesChannel,
		soRcvSalesPlatform:req.body.soRcvSalesPlatform,
		soRcvRemark:req.body.soRcvRemark,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneSoReceivable = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品銷貨紀錄 soReceivable']
    // #swagger.summary = '查詢一筆產品銷貨紀錄'

    findOneDataHandle(SoReceivable, req.params, req, res, next);
}

export const findAllSoReceivable = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品銷貨紀錄 soReceivable']
    // #swagger.summary = '查詢所有產品銷貨紀錄'

    findAllDataHandle(SoReceivable, {}, req, res, next);
};

export const findAllDurationSoReceivable = async (req, res, next) => {
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

export const updateOneSoReceivable = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 產品銷貨紀錄 soReceivable']
     * #swagger.summary = '更新產品銷貨紀錄'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "銷售員工編號" },
							custCode:{ type: "string", default: "客戶編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							soRcvCode:{ type: "string", default: "產品銷貨編號" },
							soRcvInvoiceNumber:{ type: "string", default: "發票編號" },
							soRcvSalesQty:{ type: "number", default: "0" },
							soRcvInvoiceDate:{ type: "string", default: "開立時間" },
							soRcvSalesAmount:{ type: "number", default: "0" },
							soRcvDueDate:{ type: "string", default: "預計入帳時間" },
							soRcvPostDate:{ type: "string", default: "實際入帳時間" },
							soRcvStatus:{ type: "boolean", default: "true" },
							soRcvSalesChannel:{ type: "string", default: "銷售渠道" },
							soRcvSalesPlatform:{ type: "string", default: "銷售平台" },
							soRcvRemark:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(SoReceivable, req.params, req.body, req, res, next);
};

export const deleteOneSoReceivable = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 產品銷貨紀錄 soReceivable']
    // #swagger.summary = '刪除產品銷貨紀錄'

    deleteOneDataHandle(SoReceivable, req.params, req, res, next);
};