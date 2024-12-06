"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const CashflowStatement = sequelize.define(
		"cashflowStatement", // Model name
		{
			// Attributes
			cfsId: {
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
			cfsFirstLevelCode: {
    			type: Types.CODE
    		},
			cfsFirstLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			cfsSecondLevelCode: {
    			type: Types.CODE
    		},
			cfsSecondLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			cfsThirdLevelCode: {
    			type: Types.CODE
    		},
			cfsThirdLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			cfsFourthLevelCode: {
    			type: Types.CODE
    		},
			cfsFourthLevelAccount: {
    			type: DataTypes.STRING(45)
    		},
			cfsStartDate: {
    			type: DataTypes.DATEONLY
    		},
			cfsEndDate: {
    			type: DataTypes.DATEONLY
    		},
			cfsAmount: {
    			type: DataTypes.REAL
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

	CashflowStatement.recordName = "銀行帳戶";
	
	CashflowStatement.associate = (db) => {
		belongsTo(db, CashflowStatement, db.company, "companyId");
	}

	return CashflowStatement;
};

