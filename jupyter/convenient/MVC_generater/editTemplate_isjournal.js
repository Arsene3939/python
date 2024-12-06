import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const _bigname_ = db._name_;

export const create_bigname_ = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - zhname _name_']
     * #swagger.summary = '新增zhname'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
swagger_part
                        },
                        required: [_bodylist_]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(_bigname_, {
_reqlist_
    }, req, res, next);
};

export const findOne_bigname_ = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - zhname _name_']
    // #swagger.summary = '查詢一筆zhname'

    findOneDataHandle(_bigname_, req.params, req, res, next);
}

export const findAll_bigname_ = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - zhname _name_']
    // #swagger.summary = '查詢所有zhname'

    findAllDataHandle(_bigname_, {}, req, res, next);
};

export const findAllDuration_bigname_ = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 薪資 Cashflow']
    // #swagger.summary = '查詢所有時間薪資'
    // #swagger.autoQuery=true
    /*  #swagger.parameters['startDate'] = {
              in: 'query',
      } 
    */
    /*  #swagger.parameters['endDate'] = {
              in: 'query',
      } 
    */
  
    findAllDurationDataHandle(Cashflow, {}, req, res, next);
  };

export const updateOne_bigname_ = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - zhname _name_']
     * #swagger.summary = '更新zhname'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
swagger_part
                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(_bigname_, req.params, req.body, req, res, next);
};

export const deleteOne_bigname_ = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - zhname _name_']
    // #swagger.summary = '刪除zhname'

    deleteOneDataHandle(_bigname_, req.params, req, res, next);
};