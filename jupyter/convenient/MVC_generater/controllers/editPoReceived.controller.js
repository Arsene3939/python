import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const PoReceived = db.poReceived;

export const createPoReceived = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 採購收料 poReceived']
     * #swagger.summary = '新增採購收料'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "使用者編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							vendorCode:{ type: "string", default: "供應商編號" },
							poNumber:{ type: "string", default: "採購單號" },
							poRcvVendorPN:{ type: "string", default: "採購料號" },
							poOrderedQty:{ type: "number", default: "0" },
							poPrice:{ type: "number", default: "0" },
							poAmount:{ type: "number", default: "0" },
							poInvoiceNumber:{ type: "string", default: "發票編號" },
							poInvoiceDate:{ type: "string", default: "發票開立時間" },
							poTaxCode:{ type: "string", default: "稅率代碼" },
							poReceiptType:{ type: "number", default: "0" },
							poRcvNumber:{ type: "string", default: "收料單號" },
							poReceivedQty:{ type: "number", default: "0" },
							poReceivedDate:{ type: "string", default: "收料日期" },
							poEstPaidDate:{ type: "string", default: "預計付款日期" },
							poPaidDate:{ type: "string", default: "實際付款日期" },
							poPaidStatus:{ type: "boolean", default: "true" },
							poRemark:{ type: "string", default: "備註說明" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["empCode","prodNumber","shopCode","vendorCode","poNumber","poRcvVendorPN","poOrderedQty","poPrice","poAmount","poInvoiceNumber","poInvoiceDate","poTaxCode","poReceiptType","poRcvNumber","poReceivedQty","poReceivedDate","poEstPaidDate","poPaidDate","poPaidStatus","poRemark","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(PoReceived, {
		empCode:req.body.empCode,
		prodNumber:req.body.prodNumber,
		shopCode:req.body.shopCode,
		vendorCode:req.body.vendorCode,
		poNumber:req.body.poNumber,
		poRcvVendorPN:req.body.poRcvVendorPN,
		poOrderedQty:req.body.poOrderedQty,
		poPrice:req.body.poPrice,
		poAmount:req.body.poAmount,
		poInvoiceNumber:req.body.poInvoiceNumber,
		poInvoiceDate:req.body.poInvoiceDate,
		poTaxCode:req.body.poTaxCode,
		poReceiptType:req.body.poReceiptType,
		poRcvNumber:req.body.poRcvNumber,
		poReceivedQty:req.body.poReceivedQty,
		poReceivedDate:req.body.poReceivedDate,
		poEstPaidDate:req.body.poEstPaidDate,
		poPaidDate:req.body.poPaidDate,
		poPaidStatus:req.body.poPaidStatus,
		poRemark:req.body.poRemark,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOnePoReceived = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 採購收料 poReceived']
    // #swagger.summary = '查詢一筆採購收料'

    findOneDataHandle(PoReceived, req.params, req, res, next);
}

export const findAllPoReceived = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 採購收料 poReceived']
    // #swagger.summary = '查詢所有採購收料'

    findAllDataHandle(PoReceived, {}, req, res, next);
};

export const findAllDurationPoReceived = async (req, res, next) => {
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

export const updateOnePoReceived = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 採購收料 poReceived']
     * #swagger.summary = '更新採購收料'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "使用者編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							vendorCode:{ type: "string", default: "供應商編號" },
							poNumber:{ type: "string", default: "採購單號" },
							poRcvVendorPN:{ type: "string", default: "採購料號" },
							poOrderedQty:{ type: "number", default: "0" },
							poPrice:{ type: "number", default: "0" },
							poAmount:{ type: "number", default: "0" },
							poInvoiceNumber:{ type: "string", default: "發票編號" },
							poInvoiceDate:{ type: "string", default: "發票開立時間" },
							poTaxCode:{ type: "string", default: "稅率代碼" },
							poReceiptType:{ type: "number", default: "0" },
							poRcvNumber:{ type: "string", default: "收料單號" },
							poReceivedQty:{ type: "number", default: "0" },
							poReceivedDate:{ type: "string", default: "收料日期" },
							poEstPaidDate:{ type: "string", default: "預計付款日期" },
							poPaidDate:{ type: "string", default: "實際付款日期" },
							poPaidStatus:{ type: "boolean", default: "true" },
							poRemark:{ type: "string", default: "備註說明" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(PoReceived, req.params, req.body, req, res, next);
};

export const deleteOnePoReceived = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 採購收料 poReceived']
    // #swagger.summary = '刪除採購收料'

    deleteOneDataHandle(PoReceived, req.params, req, res, next);
};