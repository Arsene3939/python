"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const FixedAssets = sequelize.define(
		"fixedAssets", // Model name
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
			faAccountCode: {
    			type: Types.CODE
    		},
			faCategory: {
    			type: DataTypes.STRING(50)
    		},
			faType: {
    			type: DataTypes.STRING(50)
    		},
			faOriginalValue: {
    			type: DataTypes.DECIMAL(12,2)
    		},
			faDepreciationStartDate: {
    			type: DataTypes.DATEONLY
    		},
			faDuration: {
    			type: DataTypes.DECIMAL(12,2)
    		},
			faDepreciationCalMethod: {
    			type: DataTypes.STRING(25)
    		},
			faAccumulatedDepreciation: {
    			type: DataTypes.DECIMAL(12,2)
    		},
			faNetValue: {
    			type: DataTypes.DECIMAL(12,2)
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

	FixedAssets.recordName = "銀行帳戶";
	
	FixedAssets.associate = (db) => {
		belongsTo(db, FixedAssets, db.company, "companyId");
	}

	return FixedAssets;
};

