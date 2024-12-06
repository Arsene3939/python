"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const SalesTarget = sequelize.define(
		"salesTarget", // Model name
		{
			// Attributes
			salesTargetId: {
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
			salesTargetYearMonth: {
    			type: DataTypes.DATEONLY
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			projCode: {
    			type: Types.CODE
    		},
			bizUnitCode: {
    			type: Types.CODE
    		},
			targetCode: {
    			type: Types.CODE
    		},
			targetAmount: {
    			type: Types.MONEY
    		},
			targetGrossProfit: {
    			type: Types.MONEY
    		},
			targetGPPercentage: {
    			type: DataTypes.REAL
    		},
			targetNetIncome: {
    			type: Types.MONEY
    		},
			targetNetIncomePercentage: {
    			type: DataTypes.REAL
    		},
			targetInventoryDays: {
    			type: DataTypes.REAL
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

	SalesTarget.recordName = "銀行帳戶";
	
	SalesTarget.associate = (db) => {
		belongsTo(db, SalesTarget, db.company, "companyId");
	}

	return SalesTarget;
};

