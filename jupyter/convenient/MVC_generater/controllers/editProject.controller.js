import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Project = db.project;

export const createProject = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 專案 project']
     * #swagger.summary = '新增專案'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							custCode:{ type: "string", default: "客戶編號" },
							empCode:{ type: "string", default: "員工編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							projCode:{ type: "string", default: "專案編號" },
							projName:{ type: "string", default: "專案名稱" },
							projContent:{ type: "string", default: "專案內容" },
							projStatus:{ type: "string", default: "專案狀態" },
							projContractDate:{ type: "string", default: "簽約日期" },
							projStartDate:{ type: "string", default: "專案起始日期" },
							projFinishedDate:{ type: "string", default: "專案結束日期" },
							projAccruedRevenue:{ type: "number", default: "0" },
							projPlanGrossProfit:{ type: "number", default: "0" },
							projContractAmount:{ type: "number", default: "0" }

                        },
                        required: ["custCode","empCode","bizUnitCode","projCode","projName","projContent","projStatus","projContractDate","projStartDate","projFinishedDate","projAccruedRevenue","projPlanGrossProfit","projContractAmount"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Project, {
		custCode:req.body.custCode,
		empCode:req.body.empCode,
		bizUnitCode:req.body.bizUnitCode,
		projCode:req.body.projCode,
		projName:req.body.projName,
		projContent:req.body.projContent,
		projStatus:req.body.projStatus,
		projContractDate:req.body.projContractDate,
		projStartDate:req.body.projStartDate,
		projFinishedDate:req.body.projFinishedDate,
		projAccruedRevenue:req.body.projAccruedRevenue,
		projPlanGrossProfit:req.body.projPlanGrossProfit,
		projContractAmount:req.body.projContractAmount,

    }, req, res, next);
};

export const findOneProject = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 專案 project']
    // #swagger.summary = '查詢一筆專案'

    findOneDataHandle(Project, req.params, req, res, next);
}

export const findAllProject = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 專案 project']
    // #swagger.summary = '查詢所有專案'

    findAllDataHandle(Project, {}, req, res, next);
};

export const updateOneProject = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 專案 project']
     * #swagger.summary = '更新專案'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							custCode:{ type: "string", default: "客戶編號" },
							empCode:{ type: "string", default: "員工編號" },
							bizUnitCode:{ type: "string", default: "事業體編號" },
							projCode:{ type: "string", default: "專案編號" },
							projName:{ type: "string", default: "專案名稱" },
							projContent:{ type: "string", default: "專案內容" },
							projStatus:{ type: "string", default: "專案狀態" },
							projContractDate:{ type: "string", default: "簽約日期" },
							projStartDate:{ type: "string", default: "專案起始日期" },
							projFinishedDate:{ type: "string", default: "專案結束日期" },
							projAccruedRevenue:{ type: "number", default: "0" },
							projPlanGrossProfit:{ type: "number", default: "0" },
							projContractAmount:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Project, req.params, req.body, req, res, next);
};

export const deleteOneProject = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 專案 project']
    // #swagger.summary = '刪除專案'

    deleteOneDataHandle(Project, req.params, req, res, next);
};