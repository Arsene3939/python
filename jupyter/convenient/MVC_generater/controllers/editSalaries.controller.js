import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Salaries = db.salaries;

export const createSalaries = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 薪資列表 salaries']
     * #swagger.summary = '新增薪資列表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "員工編號" },
							salariesCode:{ type: "string", default: "薪資編號" },
							salariesMonthlySalary:{ type: "number", default: "0" },
							salariesHourlySalary:{ type: "number", default: "0" },
							salariesYearMonth:{ type: "string", default: "期別" },
							salariesWorkingHour:{ type: "number", default: "0" },
							salariesOvertimeWorkingHour:{ type: "number", default: "0" },
							salariesBonus:{ type: "number", default: "0" },
							salariesOvertimePay:{ type: "number", default: "0" },
							salariesFoodExp:{ type: "number", default: "0" },
							salariesOthersExp:{ type: "number", default: "0" },
							salariesOffAmount:{ type: "number", default: "0" },
							salariesWithHoldingTax:{ type: "number", default: "0" },
							salariesLI:{ type: "number", default: "0" },
							salariesNHI:{ type: "number", default: "0" },
							salariesOthersFee:{ type: "number", default: "0" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["empCode","salariesCode","salariesMonthlySalary","salariesHourlySalary","salariesYearMonth","salariesWorkingHour","salariesOvertimeWorkingHour","salariesBonus","salariesOvertimePay","salariesFoodExp","salariesOthersExp","salariesOffAmount","salariesWithHoldingTax","salariesLI","salariesNHI","salariesOthersFee","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Salaries, {
		empCode:req.body.empCode,
		salariesCode:req.body.salariesCode,
		salariesMonthlySalary:req.body.salariesMonthlySalary,
		salariesHourlySalary:req.body.salariesHourlySalary,
		salariesYearMonth:req.body.salariesYearMonth,
		salariesWorkingHour:req.body.salariesWorkingHour,
		salariesOvertimeWorkingHour:req.body.salariesOvertimeWorkingHour,
		salariesBonus:req.body.salariesBonus,
		salariesOvertimePay:req.body.salariesOvertimePay,
		salariesFoodExp:req.body.salariesFoodExp,
		salariesOthersExp:req.body.salariesOthersExp,
		salariesOffAmount:req.body.salariesOffAmount,
		salariesWithHoldingTax:req.body.salariesWithHoldingTax,
		salariesLI:req.body.salariesLI,
		salariesNHI:req.body.salariesNHI,
		salariesOthersFee:req.body.salariesOthersFee,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneSalaries = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 薪資列表 salaries']
    // #swagger.summary = '查詢一筆薪資列表'

    findOneDataHandle(Salaries, req.params, req, res, next);
}

export const findAllSalaries = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 薪資列表 salaries']
    // #swagger.summary = '查詢所有薪資列表'

    findAllDataHandle(Salaries, {}, req, res, next);
};

export const findAllDurationSalaries = async (req, res, next) => {
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

export const updateOneSalaries = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 薪資列表 salaries']
     * #swagger.summary = '更新薪資列表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "員工編號" },
							salariesCode:{ type: "string", default: "薪資編號" },
							salariesMonthlySalary:{ type: "number", default: "0" },
							salariesHourlySalary:{ type: "number", default: "0" },
							salariesYearMonth:{ type: "string", default: "期別" },
							salariesWorkingHour:{ type: "number", default: "0" },
							salariesOvertimeWorkingHour:{ type: "number", default: "0" },
							salariesBonus:{ type: "number", default: "0" },
							salariesOvertimePay:{ type: "number", default: "0" },
							salariesFoodExp:{ type: "number", default: "0" },
							salariesOthersExp:{ type: "number", default: "0" },
							salariesOffAmount:{ type: "number", default: "0" },
							salariesWithHoldingTax:{ type: "number", default: "0" },
							salariesLI:{ type: "number", default: "0" },
							salariesNHI:{ type: "number", default: "0" },
							salariesOthersFee:{ type: "number", default: "0" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Salaries, req.params, req.body, req, res, next);
};

export const deleteOneSalaries = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 薪資列表 salaries']
    // #swagger.summary = '刪除薪資列表'

    deleteOneDataHandle(Salaries, req.params, req, res, next);
};