import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Employee = db.employee;

export const createEmployee = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 員工 employee']
     * #swagger.summary = '新增員工'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							deptCode:{ type: "string", default: "部門code" },
							empCode:{ type: "string", default: "員工編號" },
							empName:{ type: "string", default: "員工姓名" },
							empIDNumber:{ type: "string", default: "員工身分證字號" },
							empEmail:{ type: "string", default: "員工Email" },
							empCellphone:{ type: "string", default: "員工行動電話" },
							empGender:{ type: "string", default: "員工性別" },
							empAddress:{ type: "string", default: "員工地址" },
							empTel:{ type: "string", default: "員工市內電話" },
							empTitle:{ type: "string", default: "員工職稱" },
							empGrade:{ type: "string", default: "員工職級" },
							empRank:{ type: "number", default: "0" },
							empIsPartTime :{ type: "boolean", default: "true" },
							empOnBoardDate:{ type: "string", default: "員工入職日" },
							empResignDate:{ type: "string", default: "員工離職日" },
							empBirthday:{ type: "string", default: "員工生日" },
							empLastLogin:{ type: "string", default: "最後登入時間" }

                        },
                        required: ["deptCode","empCode","empName","empIDNumber","empEmail","empCellphone","empGender","empAddress","empTel","empTitle","empGrade","empRank","empIsPartTime ","empOnBoardDate","empResignDate","empBirthday","empLastLogin"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Employee, {
		deptCode:req.body.deptCode,
		empCode:req.body.empCode,
		empName:req.body.empName,
		empIDNumber:req.body.empIDNumber,
		empEmail:req.body.empEmail,
		empCellphone:req.body.empCellphone,
		empGender:req.body.empGender,
		empAddress:req.body.empAddress,
		empTel:req.body.empTel,
		empTitle:req.body.empTitle,
		empGrade:req.body.empGrade,
		empRank:req.body.empRank,
		empIsPartTime :req.body.empIsPartTime ,
		empOnBoardDate:req.body.empOnBoardDate,
		empResignDate:req.body.empResignDate,
		empBirthday:req.body.empBirthday,
		empLastLogin:req.body.empLastLogin,

    }, req, res, next);
};

export const findOneEmployee = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 員工 employee']
    // #swagger.summary = '查詢一筆員工'

    findOneDataHandle(Employee, req.params, req, res, next);
}

export const findAllEmployee = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 員工 employee']
    // #swagger.summary = '查詢所有員工'

    findAllDataHandle(Employee, {}, req, res, next);
};

export const updateOneEmployee = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 員工 employee']
     * #swagger.summary = '更新員工'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							deptCode:{ type: "string", default: "部門code" },
							empCode:{ type: "string", default: "員工編號" },
							empName:{ type: "string", default: "員工姓名" },
							empIDNumber:{ type: "string", default: "員工身分證字號" },
							empEmail:{ type: "string", default: "員工Email" },
							empCellphone:{ type: "string", default: "員工行動電話" },
							empGender:{ type: "string", default: "員工性別" },
							empAddress:{ type: "string", default: "員工地址" },
							empTel:{ type: "string", default: "員工市內電話" },
							empTitle:{ type: "string", default: "員工職稱" },
							empGrade:{ type: "string", default: "員工職級" },
							empRank:{ type: "number", default: "0" },
							empIsPartTime :{ type: "boolean", default: "true" },
							empOnBoardDate:{ type: "string", default: "員工入職日" },
							empResignDate:{ type: "string", default: "員工離職日" },
							empBirthday:{ type: "string", default: "員工生日" },
							empLastLogin:{ type: "string", default: "最後登入時間" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Employee, req.params, req.body, req, res, next);
};

export const deleteOneEmployee = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 員工 employee']
    // #swagger.summary = '刪除員工'

    deleteOneDataHandle(Employee, req.params, req, res, next);
};