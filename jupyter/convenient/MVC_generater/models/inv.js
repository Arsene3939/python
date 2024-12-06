"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Inv = sequelize.define(
		"inv", // Model name
		{
			// Attributes
			invId: {
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
			storageCode: {
    			type: Types.CODE
    		},
			empCode: {
    			type: Types.CODE
    		},
			shopCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			invCode: {
    			type: Types.CODE
    		},
			invDate: {
    			type: DataTypes.DATE
    		},
			invLeftQty: {
    			type: DataTypes.INTEGER
    		},
			invUnitCost: {
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

	Inv.recordName = "銀行帳戶";
	
	Inv.associate = (db) => {
		belongsTo(db, Inv, db.company, "companyId");
	}

	return Inv;
};

