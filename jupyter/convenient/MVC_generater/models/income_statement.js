"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const IncomeStatement = sequelize.define(
		"incomeStatement", // Model name
		{
			// Attributes
			isId: {
				type: Types.ID,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true
			},
			companyId: {
				type: Types.ID,
				allowNull: false,
				check: Validates.isID
			},
			isFirstLevelCode: {
    			type: Types.CODE
    		},
			isFirstLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			isSecondLevelCode: {
    			type: Types.CODE
    		},
			isSecondLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			isThirdLevelCode: {
    			type: Types.CODE
    		},
			isThirdLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			isFourthLevelCode: {
    			type: Types.CODE
    		},
			isFourthLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			isStartDate: {
    			type: DataTypes.DATEONLY
    		},
			isEndDate: {
    			type: DataTypes.DATEONLY
    		},
			isAmount: {
    			type: Types.MONEY
    		},
			isNegative: {
    			type: DataTypes.BOOLEAN
    		},

			created_at: {
				type: Types.CREATED_AT
			},
			updated_at: {
				type: Types.UPDATED_AT
			},
			isDelete: {
				type: Types.IS_DELETE
			},
			deleted_at: {
				type: Types.DELETED_AT
			},
			createdByUser: {
				type: Types.ID
			},
			updatedByUser: {
				type: Types.ID
			}
		}, {
		charset: 'utf8',
		collate: 'utf8_unicode_ci',
		timestamps: true,
		underscrored: true,
		updatedAt: "updated_at",
		createdAt: false,
		freezeTableName: true
	});

	IncomeStatement.recordName = "銀行帳戶";
	
	IncomeStatement.associate = (db) => {
		belongsTo(db, IncomeStatement, db.company, "companyId");
	}

	return IncomeStatement;
};

