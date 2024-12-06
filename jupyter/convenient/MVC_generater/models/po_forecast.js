"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const PoForecast = sequelize.define(
		"poForecast", // Model name
		{
			// Attributes
			poFcstId: {
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
			poFcstCode: {
    			type: Types.CODE
    		},
			poFcstStartDate: {
    			type: DataTypes.DATEONLY
    		},
			poFcstEndDate: {
    			type: DataTypes.DATEONLY
    		},
			vendorCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			poFcstqty: {
    			type: DataTypes.INTEGER
    		},
			poFcstAmt: {
    			type: Types.MONEY
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

	PoForecast.recordName = "銀行帳戶";
	
	PoForecast.associate = (db) => {
		belongsTo(db, PoForecast, db.company, "companyId");
	}

	return PoForecast;
};

