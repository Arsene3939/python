import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const FaTransaction = db.faTransaction;

export const createFaTransaction = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 固定資產買賣表 faTransaction']
     * #swagger.summary = '新增固定資產買賣表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							fatCode:{ type: "string", default: "固定資產買賣編號" },
							faCode:{ type: "string", default: "固定資產編號" },
							deptCode:{ type: "string", default: "使用部門Code" },
							empCode:{ type: "string", default: "資產保管員工Code" },
							faName:{ type: "string", default: "資產名稱" },
							faCategory:{ type: "string", default: "資產類別" },
							faType:{ type: "string", default: "資產類型" },
							fatTransactionDate:{ type: "string", default: "處分/取得日期" },
							fatPaidRcvDate:{ type: "string", default: "付款/收款日期" },
							fatAmount:{ type: "string", default: "處分/ 取得金額" },
							fatIsCash:{ type: "boolean", default: "true" },
							fatSellerAndBuyer:{ type: "string", default: "買方/賣方" },
							fatStatus:{ type: "string", default: "狀態" },
							fatRemarks:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["fatCode","faCode","deptCode","empCode","faName","faCategory","faType","fatTransactionDate","fatPaidRcvDate","fatAmount","fatIsCash","fatSellerAndBuyer","fatStatus","fatRemarks","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(FaTransaction, {
		fatCode:req.body.fatCode,
		faCode:req.body.faCode,
		deptCode:req.body.deptCode,
		empCode:req.body.empCode,
		faName:req.body.faName,
		faCategory:req.body.faCategory,
		faType:req.body.faType,
		fatTransactionDate:req.body.fatTransactionDate,
		fatPaidRcvDate:req.body.fatPaidRcvDate,
		fatAmount:req.body.fatAmount,
		fatIsCash:req.body.fatIsCash,
		fatSellerAndBuyer:req.body.fatSellerAndBuyer,
		fatStatus:req.body.fatStatus,
		fatRemarks:req.body.fatRemarks,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneFaTransaction = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產買賣表 faTransaction']
    // #swagger.summary = '查詢一筆固定資產買賣表'

    findOneDataHandle(FaTransaction, req.params, req, res, next);
}

export const findAllFaTransaction = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產買賣表 faTransaction']
    // #swagger.summary = '查詢所有固定資產買賣表'

    findAllDataHandle(FaTransaction, {}, req, res, next);
};

export const findAllDurationFaTransaction = async (req, res, next) => {
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

export const updateOneFaTransaction = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 固定資產買賣表 faTransaction']
     * #swagger.summary = '更新固定資產買賣表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							fatCode:{ type: "string", default: "固定資產買賣編號" },
							faCode:{ type: "string", default: "固定資產編號" },
							deptCode:{ type: "string", default: "使用部門Code" },
							empCode:{ type: "string", default: "資產保管員工Code" },
							faName:{ type: "string", default: "資產名稱" },
							faCategory:{ type: "string", default: "資產類別" },
							faType:{ type: "string", default: "資產類型" },
							fatTransactionDate:{ type: "string", default: "處分/取得日期" },
							fatPaidRcvDate:{ type: "string", default: "付款/收款日期" },
							fatAmount:{ type: "string", default: "處分/ 取得金額" },
							fatIsCash:{ type: "boolean", default: "true" },
							fatSellerAndBuyer:{ type: "string", default: "買方/賣方" },
							fatStatus:{ type: "string", default: "狀態" },
							fatRemarks:{ type: "string", default: "備註" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(FaTransaction, req.params, req.body, req, res, next);
};

export const deleteOneFaTransaction = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產買賣表 faTransaction']
    // #swagger.summary = '刪除固定資產買賣表'

    deleteOneDataHandle(FaTransaction, req.params, req, res, next);
};