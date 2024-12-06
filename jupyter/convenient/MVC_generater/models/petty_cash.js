"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const PettyCash = sequelize.define(
		"pettyCash", // Model name
		{
			// Attributes
			pcId: {
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
			projCode: {
    			type: Types.CODE
    		},
			empCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			pcCode: {
    			type: Types.CODE
    		},
			pcContent: {
    			type: DataTypes.STRING(255)
    		},
			pcApplyDate: {
    			type: DataTypes.DATEONLY
    		},
			pcReceiptDate: {
    			type: DataTypes.DATEONLY
    		},
			pcFeeType: {
    			type: DataTypes.STRING(45)
    		},
			pcAmount: {
    			type: Types.MONEY
    		},
			pcTaxCode: {
    			type: Types.CODE
    		},
			pcPaidStatus: {
    			type: DataTypes.BOOLEAN
    		},
			pcPaidDate: {
    			type: DataTypes.DATEONLY
    		},
			pcSendStatus: {
    			type: DataTypes.BOOLEAN
    		},
			pcReceiptType: {
    			type: DataTypes.INTEGER
    		},
			pcRemark: {
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

	PettyCash.recordName = "銀行帳戶";
	
	PettyCash.associate = (db) => {
		belongsTo(db, PettyCash, db.company, "companyId");
	}

	return PettyCash;
};

