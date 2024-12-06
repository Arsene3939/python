"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const User = sequelize.define(
		"user", // Model name
		{
			// Attributes
			userId: {
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
			userName: {
    			type: DataTypes.STRING(50)
    		},
			roleId: {
    			type: DataTypes.INTEGER
    		},
			userEmail: {
    			type: Types.EMAIL
    		},
			userPassword: {
    			type: DataTypes.STRING(60)
    		},
			userAccessToken: {
    			type: DataTypes.STRING(255)
    		},
			userLastLogin: {
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

	User.recordName = "銀行帳戶";
	
	User.associate = (db) => {
		belongsTo(db, User, db.company, "companyId");
	}

	return User;
};

