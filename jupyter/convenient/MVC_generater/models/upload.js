"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Upload = sequelize.define(
		"upload", // Model name
		{
			// Attributes
			uploadId: {
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
			uploadUserId: {
    			type: DataTypes.INTEGER
    		},
			uploadType: {
    			type: DataTypes.STRING(50)
    		},
			uploadFilePath: {
    			type: DataTypes.STRING(255)
    		},
			uploadFileName: {
    			type: DataTypes.STRING(50)
    		},
			uploadDatetime: {
    			type: DataTypes.DATE
    		},
			syncDatetime: {
    			type: DataTypes.DATE
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

	Upload.recordName = "銀行帳戶";
	
	Upload.associate = (db) => {
		belongsTo(db, Upload, db.company, "companyId");
	}

	return Upload;
};

