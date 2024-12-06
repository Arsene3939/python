"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Cashflow = sequelize.define(
		"cashflow", // Model name
		{
			// Attributes
			cashflowId: {
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
			cashflowNumber: {
    			type: DataTypes.STRING(25)
    		},
			cashflowDate: {
    			type: DataTypes.DATE
    		},
			bankCode: {
    			type: Types.CODE
    		},
			cashflowDesc: {
    			type: DataTypes.STRING(255)
    		},
			cashflowType: {
    			type: DataTypes.STRING(45)
    		},
			cashflowTrxType: {
    			type: DataTypes.BOOLEAN
    		},
			cashflowAmount: {
    			type: DataTypes.REAL
    		},
			cashflowCurrency: {
    			type: DataTypes.STRING(3)
    		},
			isJournal: {
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

	Cashflow.recordName = "銀行帳戶";
	
	Cashflow.associate = (db) => {
		belongsTo(db, Cashflow, db.company, "companyId");
	}

	return Cashflow;
};

