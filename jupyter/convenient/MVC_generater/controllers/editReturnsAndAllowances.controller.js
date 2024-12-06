import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const ReturnsAndAllowances = db.returnsAndAllowances;

export const createReturnsAndAllowances = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 折讓退貨表 returnsAndAllowances']
     * #swagger.summary = '新增折讓退貨表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "處理員工ID" },
							custCode:{ type: "string", default: "客戶編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							sraIsReturn:{ type: "boolean", default: "true" },
							sraReturnDate:{ type: "string", default: "退貨折讓發生的日期" },
							sraReturnQty:{ type: "number", default: "0" },
							sraReturnReason:{ type: "string", default: "退貨原因" },
							sraAllowanceAmount:{ type: "number", default: "0" },
							sraRefundAmount:{ type: "number", default: "0" },
							sraInvoiceNumber:{ type: "string", default: "發票號碼" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["empCode","custCode","prodNumber","shopCode","bizUnitCode","sraIsReturn","sraReturnDate","sraReturnQty","sraReturnReason","sraAllowanceAmount","sraRefundAmount","sraInvoiceNumber","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(ReturnsAndAllowances, {
		empCode:req.body.empCode,
		custCode:req.body.custCode,
		prodNumber:req.body.prodNumber,
		shopCode:req.body.shopCode,
		bizUnitCode:req.body.bizUnitCode,
		sraIsReturn:req.body.sraIsReturn,
		sraReturnDate:req.body.sraReturnDate,
		sraReturnQty:req.body.sraReturnQty,
		sraReturnReason:req.body.sraReturnReason,
		sraAllowanceAmount:req.body.sraAllowanceAmount,
		sraRefundAmount:req.body.sraRefundAmount,
		sraInvoiceNumber:req.body.sraInvoiceNumber,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneReturnsAndAllowances = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 折讓退貨表 returnsAndAllowances']
    // #swagger.summary = '查詢一筆折讓退貨表'

    findOneDataHandle(ReturnsAndAllowances, req.params, req, res, next);
}

export const findAllReturnsAndAllowances = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 折讓退貨表 returnsAndAllowances']
    // #swagger.summary = '查詢所有折讓退貨表'

    findAllDataHandle(ReturnsAndAllowances, {}, req, res, next);
};

export const findAllDurationReturnsAndAllowances = async (req, res, next) => {
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

export const updateOneReturnsAndAllowances = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 折讓退貨表 returnsAndAllowances']
     * #swagger.summary = '更新折讓退貨表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "處理員工ID" },
							custCode:{ type: "string", default: "客戶編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							shopCode:{ type: "string", default: "店家編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							sraIsReturn:{ type: "boolean", default: "true" },
							sraReturnDate:{ type: "string", default: "退貨折讓發生的日期" },
							sraReturnQty:{ type: "number", default: "0" },
							sraReturnReason:{ type: "string", default: "退貨原因" },
							sraAllowanceAmount:{ type: "number", default: "0" },
							sraRefundAmount:{ type: "number", default: "0" },
							sraInvoiceNumber:{ type: "string", default: "發票號碼" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(ReturnsAndAllowances, req.params, req.body, req, res, next);
};

export const deleteOneReturnsAndAllowances = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 折讓退貨表 returnsAndAllowances']
    // #swagger.summary = '刪除折讓退貨表'

    deleteOneDataHandle(ReturnsAndAllowances, req.params, req, res, next);
};