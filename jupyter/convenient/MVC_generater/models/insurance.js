"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Insurance = sequelize.define(
		"insurance", // Model name
		{
			// Attributes
			insuranceId: {
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
			empCode: {
    			type: Types.CODE
    		},
			insuranceCode: {
    			type: Types.CODE
    		},
			insuranceYearMonth: {
    			type: DataTypes.DATEONLY
    		},
			insuranceGrade: {
    			type: DataTypes.STRING(45)
    		},
			insuranceLILabor: {
    			type: Types.MONEY
    		},
			insuranceLIEnterprise: {
    			type: Types.MONEY
    		},
			insuranceNHILabor: {
    			type: Types.MONEY
    		},
			insuranceNHIEnterprise: {
    			type: Types.MONEY
    		},
			insurancePension: {
    			type: Types.MONEY
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

	Insurance.recordName = "銀行帳戶";
	
	Insurance.associate = (db) => {
		belongsTo(db, Insurance, db.company, "companyId");
	}

	return Insurance;
};

