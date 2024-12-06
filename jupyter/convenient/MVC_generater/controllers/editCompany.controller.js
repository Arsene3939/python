import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Company = db.company;

export const createCompany = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 公司 company']
     * #swagger.summary = '新增公司'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							companyName:{ type: "string", default: "公司名稱" },
							companyTel:{ type: "string", default: "公司電話" },
							companyEmail:{ type: "string", default: "公司代表電郵" },
							companyAddress:{ type: "string", default: "公司地址" },
							companyGuiNumber:{ type: "string", default: "公司統編" },
							companyCurrency:{ type: "string", default: "公司帳本幣別" },
							companyParentCode:{ type: "string", default: "母公司編號" },
							companyPrincipleName:{ type: "string", default: "負責人姓名" }

                        },
                        required: ["companyName","companyTel","companyEmail","companyAddress","companyGuiNumber","companyCurrency","companyParentCode","companyPrincipleName"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Company, {
		companyName:req.body.companyName,
		companyTel:req.body.companyTel,
		companyEmail:req.body.companyEmail,
		companyAddress:req.body.companyAddress,
		companyGuiNumber:req.body.companyGuiNumber,
		companyCurrency:req.body.companyCurrency,
		companyParentCode:req.body.companyParentCode,
		companyPrincipleName:req.body.companyPrincipleName,

    }, req, res, next);
};

export const findOneCompany = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 公司 company']
    // #swagger.summary = '查詢一筆公司'

    findOneDataHandle(Company, req.params, req, res, next);
}

export const findAllCompany = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 公司 company']
    // #swagger.summary = '查詢所有公司'

    findAllDataHandle(Company, {}, req, res, next);
};

export const updateOneCompany = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 公司 company']
     * #swagger.summary = '更新公司'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							companyName:{ type: "string", default: "公司名稱" },
							companyTel:{ type: "string", default: "公司電話" },
							companyEmail:{ type: "string", default: "公司代表電郵" },
							companyAddress:{ type: "string", default: "公司地址" },
							companyGuiNumber:{ type: "string", default: "公司統編" },
							companyCurrency:{ type: "string", default: "公司帳本幣別" },
							companyParentCode:{ type: "string", default: "母公司編號" },
							companyPrincipleName:{ type: "string", default: "負責人姓名" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Company, req.params, req.body, req, res, next);
};

export const deleteOneCompany = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 公司 company']
    // #swagger.summary = '刪除公司'

    deleteOneDataHandle(Company, req.params, req, res, next);
};