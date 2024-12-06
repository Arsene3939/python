"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Shop = sequelize.define(
		"shop", // Model name
		{
			// Attributes
			shopId: {
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
			shopCode: {
    			type: Types.CODE
    		},
			shopName: {
    			type: DataTypes.STRING(255)
    		},
			shopArea: {
    			type: DataTypes.STRING(45)
    		},
			shopAddress: {
    			type: Types.ADDRESS
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

	Shop.recordName = "銀行帳戶";
	
	Shop.associate = (db) => {
		belongsTo(db, Shop, db.company, "companyId");
	}

	return Shop;
};

