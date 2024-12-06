import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Customer = db.customer;

export const createCustomer = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 買受人(客戶) customer']
     * #swagger.summary = '新增買受人(客戶)'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							custCode:{ type: "string", default: "客戶編號" },
							custName:{ type: "string", default: "客戶名稱" },
							custRep:{ type: "string", default: "客戶連絡人" },
							custTel:{ type: "string", default: "客戶連絡電話" },
							custEmail:{ type: "string", default: "客戶Email" },
							custBillToAddress:{ type: "string", default: "客戶帳單地址" },
							custShipToAdress:{ type: "string", default: "客戶送貨地址" },
							custGuiNumber:{ type: "string", default: "客戶統編" }

                        },
                        required: ["custCode","custName","custRep","custTel","custEmail","custBillToAddress","custShipToAdress","custGuiNumber"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Customer, {
		custCode:req.body.custCode,
		custName:req.body.custName,
		custRep:req.body.custRep,
		custTel:req.body.custTel,
		custEmail:req.body.custEmail,
		custBillToAddress:req.body.custBillToAddress,
		custShipToAdress:req.body.custShipToAdress,
		custGuiNumber:req.body.custGuiNumber,

    }, req, res, next);
};

export const findOneCustomer = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 買受人(客戶) customer']
    // #swagger.summary = '查詢一筆買受人(客戶)'

    findOneDataHandle(Customer, req.params, req, res, next);
}

export const findAllCustomer = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 買受人(客戶) customer']
    // #swagger.summary = '查詢所有買受人(客戶)'

    findAllDataHandle(Customer, {}, req, res, next);
};

export const updateOneCustomer = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 買受人(客戶) customer']
     * #swagger.summary = '更新買受人(客戶)'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							custCode:{ type: "string", default: "客戶編號" },
							custName:{ type: "string", default: "客戶名稱" },
							custRep:{ type: "string", default: "客戶連絡人" },
							custTel:{ type: "string", default: "客戶連絡電話" },
							custEmail:{ type: "string", default: "客戶Email" },
							custBillToAddress:{ type: "string", default: "客戶帳單地址" },
							custShipToAdress:{ type: "string", default: "客戶送貨地址" },
							custGuiNumber:{ type: "string", default: "客戶統編" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Customer, req.params, req.body, req, res, next);
};

export const deleteOneCustomer = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 買受人(客戶) customer']
    // #swagger.summary = '刪除買受人(客戶)'

    deleteOneDataHandle(Customer, req.params, req, res, next);
};