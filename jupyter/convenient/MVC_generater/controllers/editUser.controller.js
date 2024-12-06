import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const User = db.user;

export const createUser = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 使用者 user']
     * #swagger.summary = '新增使用者'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							userName:{ type: "string", default: "使用者姓名" },
							roleId:{ type: "number", default: "0" },
							userEmail:{ type: "string", default: "使用者電子信箱" },
							userPassword:{ type: "string", default: "使用者密碼" },
							userAccessToken:{ type: "string", default: "存取憑證" },
							userLastLogin:{ type: "string", default: "最後登入時間" }

                        },
                        required: ["userName","roleId","userEmail","userPassword","userAccessToken","userLastLogin"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(User, {
		userName:req.body.userName,
		roleId:req.body.roleId,
		userEmail:req.body.userEmail,
		userPassword:req.body.userPassword,
		userAccessToken:req.body.userAccessToken,
		userLastLogin:req.body.userLastLogin,

    }, req, res, next);
};

export const findOneUser = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 使用者 user']
    // #swagger.summary = '查詢一筆使用者'

    findOneDataHandle(User, req.params, req, res, next);
}

export const findAllUser = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 使用者 user']
    // #swagger.summary = '查詢所有使用者'

    findAllDataHandle(User, {}, req, res, next);
};

export const updateOneUser = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 使用者 user']
     * #swagger.summary = '更新使用者'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							userName:{ type: "string", default: "使用者姓名" },
							roleId:{ type: "number", default: "0" },
							userEmail:{ type: "string", default: "使用者電子信箱" },
							userPassword:{ type: "string", default: "使用者密碼" },
							userAccessToken:{ type: "string", default: "存取憑證" },
							userLastLogin:{ type: "string", default: "最後登入時間" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(User, req.params, req.body, req, res, next);
};

export const deleteOneUser = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 使用者 user']
    // #swagger.summary = '刪除使用者'

    deleteOneDataHandle(User, req.params, req, res, next);
};