import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Todo = db.todo;

export const createTodo = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 代辦事項 todo']
     * #swagger.summary = '新增代辦事項'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							todoCode:{ type: "string", default: "代辦事項編號" },
							todoCategory:{ type: "string", default: "代辦種類" },
							todoDate:{ type: "string", default: "代辦日期" },
							todoItem:{ type: "string", default: "代辦項目" },
							todoRemark:{ type: "string", default: "代辦補充" }

                        },
                        required: ["todoCode","todoCategory","todoDate","todoItem","todoRemark"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Todo, {
		todoCode:req.body.todoCode,
		todoCategory:req.body.todoCategory,
		todoDate:req.body.todoDate,
		todoItem:req.body.todoItem,
		todoRemark:req.body.todoRemark,

    }, req, res, next);
};

export const findOneTodo = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 代辦事項 todo']
    // #swagger.summary = '查詢一筆代辦事項'

    findOneDataHandle(Todo, req.params, req, res, next);
}

export const findAllTodo = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 代辦事項 todo']
    // #swagger.summary = '查詢所有代辦事項'

    findAllDataHandle(Todo, {}, req, res, next);
};

export const updateOneTodo = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 代辦事項 todo']
     * #swagger.summary = '更新代辦事項'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							todoCode:{ type: "string", default: "代辦事項編號" },
							todoCategory:{ type: "string", default: "代辦種類" },
							todoDate:{ type: "string", default: "代辦日期" },
							todoItem:{ type: "string", default: "代辦項目" },
							todoRemark:{ type: "string", default: "代辦補充" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Todo, req.params, req.body, req, res, next);
};

export const deleteOneTodo = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 代辦事項 todo']
    // #swagger.summary = '刪除代辦事項'

    deleteOneDataHandle(Todo, req.params, req, res, next);
};