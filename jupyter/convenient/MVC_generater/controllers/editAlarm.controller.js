import { db } from "../models/index.js";
import { createDataHandle, deleteOneDataHandle, findAllDataHandle, findOneDataHandle, updateOneDataHandle } from "../utils/controller.utils.js";

const Alarm = db.alarm;

export const createAlarm = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 預警 alarm']
     * #swagger.summary = '新增預警'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							alarmCode:{ type: "string", default: "警示編號" },
							alarmCategory:{ type: "string", default: "警示種類" },
							RedThresholdValue:{ type: "number", default: "0" },
							YellowThresholdValue:{ type: "number", default: "0" },
							alarmClass:{ type: "string", default: "警示期間" },
							alarmName:{ type: "string", default: "警示名字" },
							alarmEnable:{ type: "boolean", default: "true" },
							alarmTarget:{ type: "string", default: "警示目標資料" },
							alarmCompareType:{ type: "string", default: "警示比較方式" },
							alarmStatus:{ type: "number", default: "0" }

                        },
                        required: ["alarmCode","alarmCategory","RedThresholdValue","YellowThresholdValue","alarmClass","alarmName","alarmEnable","alarmTarget","alarmCompareType","alarmStatus"]
                    }
                }
            }
        }
    } */

    const { userName, companyId } = res.locals.user

    createDataHandle(Alarm, {
		alarmCode:req.body.alarmCode,
		alarmCategory:req.body.alarmCategory,
		RedThresholdValue:req.body.RedThresholdValue,
		YellowThresholdValue:req.body.YellowThresholdValue,
		alarmClass:req.body.alarmClass,
		alarmName:req.body.alarmName,
		alarmEnable:req.body.alarmEnable,
		alarmTarget:req.body.alarmTarget,
		alarmCompareType:req.body.alarmCompareType,
		alarmStatus:req.body.alarmStatus,

    }, req, res, next);
};

export const findOneAlarm = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 預警 alarm']
    // #swagger.summary = '查詢一筆預警'

    findOneDataHandle(Alarm, req.params, req, res, next);
}

export const findAllAlarm = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 預警 alarm']
    // #swagger.summary = '查詢所有預警'

    findAllDataHandle(Alarm, {}, req, res, next);
};

export const updateOneAlarm = async (req, res, next) => {
    /**
     * #swagger.tags = ['用戶輸入表 - 預警 alarm']
     * #swagger.summary = '更新預警'
     * 
     * #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
							alarmCode:{ type: "string", default: "警示編號" },
							alarmCategory:{ type: "string", default: "警示種類" },
							RedThresholdValue:{ type: "number", default: "0" },
							YellowThresholdValue:{ type: "number", default: "0" },
							alarmClass:{ type: "string", default: "警示期間" },
							alarmName:{ type: "string", default: "警示名字" },
							alarmEnable:{ type: "boolean", default: "true" },
							alarmTarget:{ type: "string", default: "警示目標資料" },
							alarmCompareType:{ type: "string", default: "警示比較方式" },
							alarmStatus:{ type: "number", default: "0" }

                        }
                    }
                }
            }
        }
    } */

    updateOneDataHandle(Alarm, req.params, req.body, req, res, next);
};

export const deleteOneAlarm = async (req, res, next) => {
    // #swagger.tags = ['用戶輸入表 - 預警 alarm']
    // #swagger.summary = '刪除預警'

    deleteOneDataHandle(Alarm, req.params, req, res, next);
};