import { QueryTypes, literal } from "sequelize";
import { DATA_NOT_FOUND, UNKNOWN } from "../exceptions/exception.js";
import { sequelize, Op } from "../models/index.js";

/**
 * 用戶輸入表 新增資料 API
 * 
 * 範例:
 * ```
 * createDataHandle(db.Cashflow, { bankCode: '123', cashflowDesc: '456 }, res, next)
 * ```
 */
export const createDataHandle = (model, data, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log('create data:', data);

    // TODO TYPE CHECK

    const { userId, companyId } = res.locals.user
    data.companyId = companyId;
    data.createdByUser = userId;
    data.updatedByUser = userId;
    return model.create(data)
        .then(data => res.json(data))
        .catch(err => next(err));
}

/**
 * 用戶輸入表 查詢一筆資料 API
 * 
 * 範例:
 * ```
 * findOneDataHandle(db.Cashflow, { cashflowId: 123 }, res, next)
 * ```
 */
export const findOneDataHandle = (model, where, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log('findOne where:', where);

    // TODO Timestamp parameters

    return model.findOne({ where, raw: true })
        .then(data => data.isDelete
            ? res.status(204).end()
            : res.json(data))
        .catch((err) => next(err));
}

/**
 * 用戶輸入表 查詢所有資料 API
 * 
 * 範例:
 * ```
 * findAllDataHandle(db.Cashflow, {}, res, next)
 * ```
 */
export const findAllDataHandle = (model, { timestamp, page = 1 }, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log(`${model} findAll timestamp=${timestamp} page=${page}`);

    // TODO Timestamp parameters
    console.log(timestamp, page)

    return model.findAll({ where: { isDelete: false }, raw: true })
        .then(data => res.json(data))
        .catch(err => next(err));
}

/**
 * 用戶輸入表 查詢某時間區間內的所有資料 API
 * 
 * 範例:
 * ```
 * findAllDataHandle(db.Cashflow, {}, res, next)
 * ```
 */
export const findAllDurationDataHandle = (model, { timestamp, page = 1 }, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log(`${model} findAll timestamp=${timestamp} page=${page}`);

    // TODO Timestamp parameters
    console.log(timestamp, page)

    return model.findAll({ 
        where: { 
            isDelete: false,
            [model.SelectDuration]:{
                [Op.between]: [req.query.startDate, req.query.endDate],
             }
        }, 
        raw: true 
    })
    .then(data => res.json(data))
    .catch(err => next(err));
}

/**
 * 用戶輸入表 更新資料 API
 * 
 * 範例:
 * ```
 * updateOneDataHandle(db.Cashflow, { cashflowId: 123 }, req.body, res, next)
 * ```
 */
export const updateOneDataHandle = async (model, where, data, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log('update:', data, 'where:', where);

    // Optimized
    where.isDelete = false;
    const target = await sequelize.query(`SELECT 1 FROM "${model.tableName}" WHERE ${Object.keys(where).map(key => `"${key}"=:${key}`).join(" AND ")}`, {
        type: QueryTypes.SELECT,
        replacements: where
    });
    // Deprecated
    // const target = await model.findOne({ attributes: ['isDelete'], where, raw: true }).catch(err => next(err))
    if (!target.length) return next(DATA_NOT_FOUND);

    const result = await model.update(data, { where }).catch(next);
    if (!result) return; // it's already catch and return next

    const [num] = result;
    if (!num) return next(UNKNOWN);

    res.end();
}

/**
 * 用戶輸入表 刪除資料 API
 * 
 * 範例:
 * ```
 * deleteOneDataHandle(db.Cashflow, { cashflowId: 123 }, res, next)
 * ```
 */
export const deleteOneDataHandle = async (model, where, req, res, next) => {
    if (process.env.NODE_ENV === 'development')
        console.log('delete where:', where);

    // Optimized
    where.isDelete = false;
    const target = await sequelize.query(`SELECT 1 FROM "${model.tableName}" WHERE ${Object.keys(where).map(key => `"${key}"=:${key}`).join(" AND ")}`, {
        type: QueryTypes.SELECT,
        replacements: where
    });
    // Deprecated
    // const target = await model.findOne({ attributes: ['isDelete'], where, raw: true }).catch(err => next(err))
    if (!target.length) return next(DATA_NOT_FOUND);

    const result = await model.update({ deleted_at: literal('CURRENT_TIMESTAMP'), isDelete: true }, { where }).catch(next);
    if (!result) return; // it's already catch and return next

    const [num] = result;
    if (!num) return next(UNKNOWN);

    res.end();
}