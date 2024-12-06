import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const SalesTarget = db.salesTarget;

export const createSalesTarget = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銷售預估 salesTarget']
     * #swagger.summary = '新增銷售預估'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							salesTargetYearMonth:{ type: "string", default: "期別(年月)" },
							prodNumber:{ type: "string", default: "預估產品料號" },
							projCode:{ type: "string", default: "預估專案編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							targetCode:{ type: "string", default: "銷售預估編號" },
							targetAmount:{ type: "number", default: "0" },
							targetGrossProfit:{ type: "number", default: "0" },
							targetGPPercentage:{ type: "number", default: "0" },
							targetNetIncome:{ type: "number", default: "0" },
							targetNetIncomePercentage:{ type: "number", default: "0" },
							targetInventoryDays:{ type: "number", default: "0" }

                        },
                        required: ["salesTargetYearMonth","prodNumber","projCode","bizUnitCode","targetCode","targetAmount","targetGrossProfit","targetGPPercentage","targetNetIncome","targetNetIncomePercentage","targetInventoryDays"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(SalesTarget, {
		salesTargetYearMonth:req.body.salesTargetYearMonth,
		prodNumber:req.body.prodNumber,
		projCode:req.body.projCode,
		bizUnitCode:req.body.bizUnitCode,
		targetCode:req.body.targetCode,
		targetAmount:req.body.targetAmount,
		targetGrossProfit:req.body.targetGrossProfit,
		targetGPPercentage:req.body.targetGPPercentage,
		targetNetIncome:req.body.targetNetIncome,
		targetNetIncomePercentage:req.body.targetNetIncomePercentage,
		targetInventoryDays:req.body.targetInventoryDays,

    }, req, res, next);
};

export const findOneSalesTarget = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銷售預估 salesTarget']
    // #swagger.summary = '查詢一筆銷售預估'

    findOneDataHandle(SalesTarget, req.params, req, res, next);
}

export const findAllSalesTarget = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銷售預估 salesTarget']
    // #swagger.summary = '查詢所有銷售預估'

    findAllDataHandle(SalesTarget, {}, req, res, next);
};

export const updateOneSalesTarget = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 銷售預估 salesTarget']
     * #swagger.summary = '更新銷售預估'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							salesTargetYearMonth:{ type: "string", default: "期別(年月)" },
							prodNumber:{ type: "string", default: "預估產品料號" },
							projCode:{ type: "string", default: "預估專案編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							targetCode:{ type: "string", default: "銷售預估編號" },
							targetAmount:{ type: "number", default: "0" },
							targetGrossProfit:{ type: "number", default: "0" },
							targetGPPercentage:{ type: "number", default: "0" },
							targetNetIncome:{ type: "number", default: "0" },
							targetNetIncomePercentage:{ type: "number", default: "0" },
							targetInventoryDays:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(SalesTarget, req.params, req.body, req, res, next);
};

export const deleteOneSalesTarget = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 銷售預估 salesTarget']
    // #swagger.summary = '刪除銷售預估'

    deleteOneDataHandle(SalesTarget, req.params, req, res, next);
};