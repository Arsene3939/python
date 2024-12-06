import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Loan = db.loan;

export const createLoan = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銀行借貸表 loan']
     * #swagger.summary = '新增銀行借貸表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							loanCode:{ type: "string", default: "借貸編號" },
							loanType:{ type: "string", default: "借貸類型" },
							loanAmount:{ type: "number", default: "0" },
							loanInterestRate:{ type: "string", default: "貸款利率" },
							loanTerm:{ type: "number", default: "0" },
							loanDate:{ type: "string", default: "借款日期" },
							loanRepaymentMethod:{ type: "string", default: "還款方式" },
							loanRepaymentAmount:{ type: "number", default: "0" },
							loanRepaymentDate:{ type: "string", default: "還款日期" },
							loanStatus:{ type: "string", default: "借貸狀態" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["loanCode","loanType","loanAmount","loanInterestRate","loanTerm","loanDate","loanRepaymentMethod","loanRepaymentAmount","loanRepaymentDate","loanStatus","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Loan, {
		loanCode:req.body.loanCode,
		loanType:req.body.loanType,
		loanAmount:req.body.loanAmount,
		loanInterestRate:req.body.loanInterestRate,
		loanTerm:req.body.loanTerm,
		loanDate:req.body.loanDate,
		loanRepaymentMethod:req.body.loanRepaymentMethod,
		loanRepaymentAmount:req.body.loanRepaymentAmount,
		loanRepaymentDate:req.body.loanRepaymentDate,
		loanStatus:req.body.loanStatus,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneLoan = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行借貸表 loan']
    // #swagger.summary = '查詢一筆銀行借貸表'

    findOneDataHandle(Loan, req.params, req, res, next);
}

export const findAllLoan = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行借貸表 loan']
    // #swagger.summary = '查詢所有銀行借貸表'

    findAllDataHandle(Loan, {}, req, res, next);
};

export const findAllDurationLoan = async (req, res, next) => {
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

export const updateOneLoan = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銀行借貸表 loan']
     * #swagger.summary = '更新銀行借貸表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							loanCode:{ type: "string", default: "借貸編號" },
							loanType:{ type: "string", default: "借貸類型" },
							loanAmount:{ type: "number", default: "0" },
							loanInterestRate:{ type: "string", default: "貸款利率" },
							loanTerm:{ type: "number", default: "0" },
							loanDate:{ type: "string", default: "借款日期" },
							loanRepaymentMethod:{ type: "string", default: "還款方式" },
							loanRepaymentAmount:{ type: "number", default: "0" },
							loanRepaymentDate:{ type: "string", default: "還款日期" },
							loanStatus:{ type: "string", default: "借貸狀態" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Loan, req.params, req.body, req, res, next);
};

export const deleteOneLoan = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銀行借貸表 loan']
    // #swagger.summary = '刪除銀行借貸表'

    deleteOneDataHandle(Loan, req.params, req, res, next);
};