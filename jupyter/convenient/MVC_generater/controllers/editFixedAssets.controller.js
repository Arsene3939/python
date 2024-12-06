import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, findAllDurationDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const FixedAssets = db.fixedAssets;

export const createFixedAssets = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 固定資產變動表 fixedAssets']
     * #swagger.summary = '新增固定資產變動表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							faCode:{ type: "string", default: "固定資產編號" },
							deptCode:{ type: "string", default: "使用部門Code" },
							empCode:{ type: "string", default: "資產保管員工Code" },
							faName:{ type: "string", default: "資產名稱" },
							faAccountCode:{ type: "string", default: "資產會計代碼(尾數0)" },
							faCategory:{ type: "string", default: "資產類別" },
							faType:{ type: "string", default: "資產類型" },
							faOriginalValue:{ type: "string", default: "原價值" },
							faDepreciationStartDate:{ type: "string", default: "折舊開始日" },
							faDuration:{ type: "string", default: "耐用年限(月)" },
							faDepreciationCalMethod:{ type: "string", default: "折舊計算方式" },
							faAccumulatedDepreciation:{ type: "string", default: "累計折舊" },
							faNetValue:{ type: "string", default: "淨值" },
							isJournal:{ type: "boolean", default: "true" }

                        },
                        required: ["faCode","deptCode","empCode","faName","faAccountCode","faCategory","faType","faOriginalValue","faDepreciationStartDate","faDuration","faDepreciationCalMethod","faAccumulatedDepreciation","faNetValue","isJournal"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(FixedAssets, {
		faCode:req.body.faCode,
		deptCode:req.body.deptCode,
		empCode:req.body.empCode,
		faName:req.body.faName,
		faAccountCode:req.body.faAccountCode,
		faCategory:req.body.faCategory,
		faType:req.body.faType,
		faOriginalValue:req.body.faOriginalValue,
		faDepreciationStartDate:req.body.faDepreciationStartDate,
		faDuration:req.body.faDuration,
		faDepreciationCalMethod:req.body.faDepreciationCalMethod,
		faAccumulatedDepreciation:req.body.faAccumulatedDepreciation,
		faNetValue:req.body.faNetValue,
		isJournal:req.body.isJournal,

    }, req, res, next);
};

export const findOneFixedAssets = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產變動表 fixedAssets']
    // #swagger.summary = '查詢一筆固定資產變動表'

    findOneDataHandle(FixedAssets, req.params, req, res, next);
}

export const findAllFixedAssets = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產變動表 fixedAssets']
    // #swagger.summary = '查詢所有固定資產變動表'

    findAllDataHandle(FixedAssets, {}, req, res, next);
};

export const findAllDurationFixedAssets = async (req, res, next) => {
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

export const updateOneFixedAssets = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 固定資產變動表 fixedAssets']
     * #swagger.summary = '更新固定資產變動表'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							faCode:{ type: "string", default: "固定資產編號" },
							deptCode:{ type: "string", default: "使用部門Code" },
							empCode:{ type: "string", default: "資產保管員工Code" },
							faName:{ type: "string", default: "資產名稱" },
							faAccountCode:{ type: "string", default: "資產會計代碼(尾數0)" },
							faCategory:{ type: "string", default: "資產類別" },
							faType:{ type: "string", default: "資產類型" },
							faOriginalValue:{ type: "string", default: "原價值" },
							faDepreciationStartDate:{ type: "string", default: "折舊開始日" },
							faDuration:{ type: "string", default: "耐用年限(月)" },
							faDepreciationCalMethod:{ type: "string", default: "折舊計算方式" },
							faAccumulatedDepreciation:{ type: "string", default: "累計折舊" },
							faNetValue:{ type: "string", default: "淨值" },
							isJournal:{ type: "boolean", default: "true" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(FixedAssets, req.params, req.body, req, res, next);
};

export const deleteOneFixedAssets = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 固定資產變動表 fixedAssets']
    // #swagger.summary = '刪除固定資產變動表'

    deleteOneDataHandle(FixedAssets, req.params, req, res, next);
};