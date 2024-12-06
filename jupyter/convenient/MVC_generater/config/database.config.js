import { DataTypes } from "sequelize";
import { IS_NOT_CODE } from "../exceptions/exception.js";

// 統一管理常用的資料型態，方便維護、修改
export const Types = {
    ID: DataTypes.INTEGER,
    CODE: DataTypes.STRING(25),
    // 電子信箱
    EMAIL: DataTypes.STRING(255),
    // 金錢
    MONEY: DataTypes.NUMBER,
    // 地址
    ADDRESS: DataTypes.STRING(255),
    // 列舉，暫不使用 Enumerated Type、佔用空間更小的 smallint
    ENUM: DataTypes.INTEGER,
    CREATED_AT: DataTypes.DATE,
    UPDATED_AT: DataTypes.DATE,
    DELETED_AT: DataTypes.DATE,
    IS_DELETE: DataTypes.BOOLEAN,
}

const isInteger = Number.isInteger;
export const Validates = {
    isNumeric: {
        isNumeric: {
            msg: "資料型態應該是 數字"
        }
    },
    isInt: {
        isInt: {
            msg: "資料型態應該是 整數"
        }
    },
    isFloat: {
        isFloat: {
            msg: "資料型態應該是 浮點數"
        }
    },
    isDate: {
        isDate: {
            msg: "資料型態應該是 日期"
        }
    },
    isID: (v) => { console.log("check is ID", v); (typeof(v) !== "number" || !isInteger(v)) && Promise.reject(IS_NOT_ID)},
    
    isMoney: v => true,
    isCode: v => (typeof(v) !== "string" || v.length > 25) && Promise.reject(IS_NOT_CODE)
}