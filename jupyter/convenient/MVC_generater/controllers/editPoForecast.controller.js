import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const PoForecast = db.poForecast;

export const createPoForecast = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 進貨預估 poForecast']
     * #swagger.summary = '新增進貨預估'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							poFcstCode:{ type: "string", default: "進貨預估編號" },
							poFcstStartDate:{ type: "string", default: "採購週期(起始日) -> 採購起始日" },
							poFcstEndDate:{ type: "string", default: "採購週期(結束日)  -> 採購結束日" },
							vendorCode:{ type: "string", default: "供應商編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							poFcstqty:{ type: "number", default: "0" },
							poFcstAmt:{ type: "number", default: "0" }

                        },
                        required: ["poFcstCode","poFcstStartDate","poFcstEndDate","vendorCode","prodNumber","poFcstqty","poFcstAmt"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(PoForecast, {
		poFcstCode:req.body.poFcstCode,
		poFcstStartDate:req.body.poFcstStartDate,
		poFcstEndDate:req.body.poFcstEndDate,
		vendorCode:req.body.vendorCode,
		prodNumber:req.body.prodNumber,
		poFcstqty:req.body.poFcstqty,
		poFcstAmt:req.body.poFcstAmt,

    }, req, res, next);
};

export const findOnePoForecast = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 進貨預估 poForecast']
    // #swagger.summary = '查詢一筆進貨預估'

    findOneDataHandle(PoForecast, req.params, req, res, next);
}

export const findAllPoForecast = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 進貨預估 poForecast']
    // #swagger.summary = '查詢所有進貨預估'

    findAllDataHandle(PoForecast, {}, req, res, next);
};

export const updateOnePoForecast = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 進貨預估 poForecast']
     * #swagger.summary = '更新進貨預估'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							poFcstCode:{ type: "string", default: "進貨預估編號" },
							poFcstStartDate:{ type: "string", default: "採購週期(起始日) -> 採購起始日" },
							poFcstEndDate:{ type: "string", default: "採購週期(結束日)  -> 採購結束日" },
							vendorCode:{ type: "string", default: "供應商編號" },
							prodNumber:{ type: "string", default: "產品料號" },
							poFcstqty:{ type: "number", default: "0" },
							poFcstAmt:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(PoForecast, req.params, req.body, req, res, next);
};

export const deleteOnePoForecast = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 進貨預估 poForecast']
    // #swagger.summary = '刪除進貨預估'

    deleteOneDataHandle(PoForecast, req.params, req, res, next);
};