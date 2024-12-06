"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Bank = sequelize.define(
		"bank", // Model name
		{
			// Attributes
			bankId: {
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
			bankCode: {
    			type: Types.CODE
    		},
			bankSwiftCode: {
    			type: Types.CODE
    		},
			bankAccount: {
    			type: DataTypes.STRING(255)
    		},
			bankOwnerType: {
    			type: DataTypes.INTEGER
    		},
			bankOwnerCode: {
    			type: Types.CODE
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

	Bank.recordName = "銀行帳戶";
	
	Bank.associate = (db) => {
		belongsTo(db, Bank, db.company, "companyId");
	}

	return Bank;
};

