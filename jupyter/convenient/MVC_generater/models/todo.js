"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Todo = sequelize.define(
		"todo", // Model name
		{
			// Attributes
			todoId: {
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
			todoCode: {
    			type: Types.CODE
    		},
			todoCategory: {
    			type: DataTypes.STRING(45)
    		},
			todoDate: {
    			type: DataTypes.DATEONLY
    		},
			todoItem: {
    			type: DataTypes.STRING(255)
    		},
			todoRemark: {
    			type: DataTypes.STRING(255)
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

	Todo.recordName = "銀行帳戶";
	
	Todo.associate = (db) => {
		belongsTo(db, Todo, db.company, "companyId");
	}

	return Todo;
};

