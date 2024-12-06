"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Product = sequelize.define(
		"product", // Model name
		{
			// Attributes
			prodId: {
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
			vendorCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			prodModel: {
    			type: DataTypes.STRING(50)
    		},
			prodName: {
    			type: DataTypes.STRING(50)
    		},
			prodBrand: {
    			type: DataTypes.STRING(50)
    		},
			prodDesc: {
    			type: DataTypes.STRING(255)
    		},
			prodUnitPrice: {
    			type: Types.MONEY
    		},
			prodUnitCost: {
    			type: Types.MONEY
    		},
			prodSafetyQty: {
    			type: DataTypes.INTEGER
    		},
			prodUnit: {
    			type: DataTypes.STRING(50)
    		},
			prodMOQ: {
    			type: DataTypes.INTEGER
    		},
			prodUnitPriceQuantity1: {
    			type: DataTypes.INTEGER
    		},
			prodUnitPriceQuantity2: {
    			type: DataTypes.INTEGER
    		},
			prodUnitPriceQuantity3: {
    			type: DataTypes.INTEGER
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

	Product.recordName = "銀行帳戶";
	
	Product.associate = (db) => {
		belongsTo(db, Product, db.company, "companyId");
	}

	return Product;
};

