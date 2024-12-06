import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Vendor = db.vendor;

export const createVendor = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 供應廠商(含合作商) vendor']
     * #swagger.summary = '新增供應廠商(含合作商)'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							vendorCode:{ type: "string", default: "供應商編號" },
							vendorName:{ type: "string", default: "供應商名稱" },
							vendorType:{ type: "string", default: "供應商類別" },
							vendorTel:{ type: "string", default: "供應商電話" },
							vendorEmail:{ type: "string", default: "供應商電郵" },
							vendorGuiNumber:{ type: "string", default: "供應商統編" }

                        },
                        required: ["vendorCode","vendorName","vendorType","vendorTel","vendorEmail","vendorGuiNumber"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Vendor, {
		vendorCode:req.body.vendorCode,
		vendorName:req.body.vendorName,
		vendorType:req.body.vendorType,
		vendorTel:req.body.vendorTel,
		vendorEmail:req.body.vendorEmail,
		vendorGuiNumber:req.body.vendorGuiNumber,

    }, req, res, next);
};

export const findOneVendor = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 供應廠商(含合作商) vendor']
    // #swagger.summary = '查詢一筆供應廠商(含合作商)'

    findOneDataHandle(Vendor, req.params, req, res, next);
}

export const findAllVendor = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 供應廠商(含合作商) vendor']
    // #swagger.summary = '查詢所有供應廠商(含合作商)'

    findAllDataHandle(Vendor, {}, req, res, next);
};

export const updateOneVendor = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 供應廠商(含合作商) vendor']
     * #swagger.summary = '更新供應廠商(含合作商)'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							vendorCode:{ type: "string", default: "供應商編號" },
							vendorName:{ type: "string", default: "供應商名稱" },
							vendorType:{ type: "string", default: "供應商類別" },
							vendorTel:{ type: "string", default: "供應商電話" },
							vendorEmail:{ type: "string", default: "供應商電郵" },
							vendorGuiNumber:{ type: "string", default: "供應商統編" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Vendor, req.params, req.body, req, res, next);
};

export const deleteOneVendor = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 供應廠商(含合作商) vendor']
    // #swagger.summary = '刪除供應廠商(含合作商)'

    deleteOneDataHandle(Vendor, req.params, req, res, next);
};