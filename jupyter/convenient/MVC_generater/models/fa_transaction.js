"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const FaTransaction = sequelize.define(
		"faTransaction", // Model name
		{
			// Attributes
			faId: {
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
			fatCode: {
    			type: Types.CODE
    		},
			faCode: {
    			type: Types.CODE
    		},
			deptCode: {
    			type: Types.CODE
    		},
			empCode: {
    			type: Types.CODE
    		},
			faName: {
    			type: DataTypes.STRING(100)
    		},
			faCategory: {
    			type: DataTypes.STRING(50)
    		},
			faType: {
    			type: DataTypes.STRING(50)
    		},
			fatTransactionDate: {
    			type: DataTypes.DATEONLY
    		},
			fatPaidRcvDate: {
    			type: DataTypes.DATEONLY
    		},
			fatAmount: {
    			type: DataTypes.DECIMAL(12,2)
    		},
			fatIsCash: {
    			type: DataTypes.BOOLEAN
    		},
			fatSellerAndBuyer: {
    			type: DataTypes.STRING(100)
    		},
			fatStatus: {
    			type: DataTypes.STRING(50)
    		},
			fatRemarks: {
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

	FaTransaction.recordName = "銀行帳戶";
	
	FaTransaction.associate = (db) => {
		belongsTo(db, FaTransaction, db.company, "companyId");
	}

	return FaTransaction;
};

