"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Company = sequelize.define(
		"company", // Model name
		{
			// Attributes
			companyId: {
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
			companyName: {
    			type: DataTypes.STRING(50)
    		},
			companyTel: {
    			type: DataTypes.STRING(50)
    		},
			companyEmail: {
    			type: Types.EMAIL
    		},
			companyAddress: {
    			type: Types.ADDRESS
    		},
			companyGuiNumber: {
    			type: DataTypes.STRING(50)
    		},
			companyCurrency: {
    			type: DataTypes.STRING(3)
    		},
			companyParentCode: {
    			type: Types.CODE
    		},
			companyPrincipleName: {
    			type: DataTypes.STRING(50)
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

	Company.recordName = "銀行帳戶";
	
	Company.associate = (db) => {
		belongsTo(db, Company, db.company, "companyId");
	}

	return Company;
};

