import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const PaymentMethod = db.paymentMethod;

export const createPaymentMethod = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 付款方法 paymentMethod']
     * #swagger.summary = '新增付款方法'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							paymentMethodName:{ type: "string", default: "付款方法" },
							paymentTerm:{ type: "number", default: "0" }

                        },
                        required: ["paymentMethodName","paymentTerm"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(PaymentMethod, {
		paymentMethodName:req.body.paymentMethodName,
		paymentTerm:req.body.paymentTerm,

    }, req, res, next);
};

export const findOnePaymentMethod = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 付款方法 paymentMethod']
    // #swagger.summary = '查詢一筆付款方法'

    findOneDataHandle(PaymentMethod, req.params, req, res, next);
}

export const findAllPaymentMethod = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 付款方法 paymentMethod']
    // #swagger.summary = '查詢所有付款方法'

    findAllDataHandle(PaymentMethod, {}, req, res, next);
};

export const updateOnePaymentMethod = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 付款方法 paymentMethod']
     * #swagger.summary = '更新付款方法'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							paymentMethodName:{ type: "string", default: "付款方法" },
							paymentTerm:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(PaymentMethod, req.params, req.body, req, res, next);
};

export const deleteOnePaymentMethod = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 付款方法 paymentMethod']
    // #swagger.summary = '刪除付款方法'

    deleteOneDataHandle(PaymentMethod, req.params, req, res, next);
};