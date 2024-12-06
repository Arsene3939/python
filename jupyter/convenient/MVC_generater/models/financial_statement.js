"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const FinancialStatement = sequelize.define(
		"financialStatement", // Model name
		{
			// Attributes
			fsId: {
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
			fsCategory: {
    			type: DataTypes.STRING(45)
    		},
			fsFirstLevelCode: {
    			type: Types.CODE
    		},
			fsFirstLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			fsSecondLevelCode: {
    			type: Types.CODE
    		},
			fsSecondLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			fsThirdLevelCode: {
    			type: Types.CODE
    		},
			fsThirdLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			fsFourthLevelCode: {
    			type: Types.CODE
    		},
			fsFourthLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			fsDuration: {
    			type: DataTypes.STRING(45)
    		},
			fsAmount: {
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

	FinancialStatement.recordName = "銀行帳戶";
	
	FinancialStatement.associate = (db) => {
		belongsTo(db, FinancialStatement, db.company, "companyId");
	}

	return FinancialStatement;
};

