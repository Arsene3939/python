import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Department = db.department;

export const createDepartment = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 部門 department']
     * #swagger.summary = '新增部門'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							deptName:{ type: "string", default: "部門名稱" },
							deptCode:{ type: "string", default: "部門code" }

                        },
                        required: ["deptName","deptCode"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Department, {
		deptName:req.body.deptName,
		deptCode:req.body.deptCode,

    }, req, res, next);
};

export const findOneDepartment = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 部門 department']
    // #swagger.summary = '查詢一筆部門'

    findOneDataHandle(Department, req.params, req, res, next);
}

export const findAllDepartment = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 部門 department']
    // #swagger.summary = '查詢所有部門'

    findAllDataHandle(Department, {}, req, res, next);
};

export const updateOneDepartment = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 部門 department']
     * #swagger.summary = '更新部門'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							deptName:{ type: "string", default: "部門名稱" },
							deptCode:{ type: "string", default: "部門code" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Department, req.params, req.body, req, res, next);
};

export const deleteOneDepartment = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 部門 department']
    // #swagger.summary = '刪除部門'

    deleteOneDataHandle(Department, req.params, req, res, next);
};