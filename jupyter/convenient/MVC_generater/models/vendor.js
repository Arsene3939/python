"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Vendor = sequelize.define(
		"vendor", // Model name
		{
			// Attributes
			vendorId: {
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
			vendorCode: {
    			type: Types.CODE
    		},
			vendorName: {
    			type: DataTypes.STRING(50)
    		},
			vendorType: {
    			type: DataTypes.STRING(50)
    		},
			vendorTel: {
    			type: DataTypes.STRING(50)
    		},
			vendorEmail: {
    			type: Types.EMAIL
    		},
			vendorGuiNumber: {
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

	Vendor.recordName = "銀行帳戶";
	
	Vendor.associate = (db) => {
		belongsTo(db, Vendor, db.company, "companyId");
	}

	return Vendor;
};

