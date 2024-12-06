"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Expense = sequelize.define(
		"expense", // Model name
		{
			// Attributes
			expId: {
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
			bizUnitCode: {
    			type: Types.CODE
    		},
			projCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			empCode: {
    			type: Types.CODE
    		},
			expCode: {
    			type: Types.CODE
    		},
			expInvoiceNumber: {
    			type: DataTypes.STRING(255)
    		},
			expInvoiceDate: {
    			type: DataTypes.DATEONLY
    		},
			expTaxCode: {
    			type: Types.CODE
    		},
			expReceiptType: {
    			type: DataTypes.INTEGER
    		},
			expAccount: {
    			type: DataTypes.STRING(45)
    		},
			expType: {
    			type: DataTypes.INTEGER
    		},
			expContent: {
    			type: DataTypes.STRING(255)
    		},
			expAmount: {
    			type: DataTypes.REAL
    		},
			expPayfor: {
    			type: DataTypes.STRING(25)
    		},
			expPaymentMethod: {
    			type: DataTypes.STRING(25)
    		},
			expEstPaidDate: {
    			type: DataTypes.DATEONLY
    		},
			expPaidDate: {
    			type: DataTypes.DATEONLY
    		},
			expPaidStatus: {
    			type: DataTypes.BOOLEAN
    		},
			expRemark: {
    			type: DataTypes.STRING(255)
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

	Expense.recordName = "銀行帳戶";
	
	Expense.associate = (db) => {
		belongsTo(db, Expense, db.company, "companyId");
	}

	return Expense;
};

