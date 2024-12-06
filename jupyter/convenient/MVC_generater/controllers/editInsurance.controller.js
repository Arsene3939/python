import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Insurance = db.insurance;

export const createInsurance = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 保險 insurance']
     * #swagger.summary = '新增保險'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "員工編號" },
							insuranceCode:{ type: "string", default: "保險編號" },
							insuranceYearMonth:{ type: "string", default: "投保年份&月份" },
							insuranceGrade:{ type: "string", default: "投保級距" },
							insuranceLILabor:{ type: "number", default: "0" },
							insuranceLIEnterprise:{ type: "number", default: "0" },
							insuranceNHILabor:{ type: "number", default: "0" },
							insuranceNHIEnterprise:{ type: "number", default: "0" },
							insurancePension:{ type: "number", default: "0" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["empCode","insuranceCode","insuranceYearMonth","insuranceGrade","insuranceLILabor","insuranceLIEnterprise","insuranceNHILabor","insuranceNHIEnterprise","insurancePension","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Insurance, {
		empCode:req.body.empCode,
		insuranceCode:req.body.insuranceCode,
		insuranceYearMonth:req.body.insuranceYearMonth,
		insuranceGrade:req.body.insuranceGrade,
		insuranceLILabor:req.body.insuranceLILabor,
		insuranceLIEnterprise:req.body.insuranceLIEnterprise,
		insuranceNHILabor:req.body.insuranceNHILabor,
		insuranceNHIEnterprise:req.body.insuranceNHIEnterprise,
		insurancePension:req.body.insurancePension,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneInsurance = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 保險 insurance']
    // #swagger.summary = '查詢一筆保險'

    findOneDataHandle(Insurance, req.params, req, res, next);
}

export const findAllInsurance = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 保險 insurance']
    // #swagger.summary = '查詢所有保險'

    findAllDataHandle(Insurance, {}, req, res, next);
};

export const findAllDurationInsurance = async (req, res, next) => {
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

export const updateOneInsurance = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 保險 insurance']
     * #swagger.summary = '更新保險'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							empCode:{ type: "string", default: "員工編號" },
							insuranceCode:{ type: "string", default: "保險編號" },
							insuranceYearMonth:{ type: "string", default: "投保年份&月份" },
							insuranceGrade:{ type: "string", default: "投保級距" },
							insuranceLILabor:{ type: "number", default: "0" },
							insuranceLIEnterprise:{ type: "number", default: "0" },
							insuranceNHILabor:{ type: "number", default: "0" },
							insuranceNHIEnterprise:{ type: "number", default: "0" },
							insurancePension:{ type: "number", default: "0" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Insurance, req.params, req.body, req, res, next);
};

export const deleteOneInsurance = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 保險 insurance']
    // #swagger.summary = '刪除保險'

    deleteOneDataHandle(Insurance, req.params, req, res, next);
};