"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Customer = sequelize.define(
		"customer", // Model name
		{
			// Attributes
			custId: {
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
			custCode: {
    			type: Types.CODE
    		},
			custName: {
    			type: DataTypes.STRING(50)
    		},
			custRep: {
    			type: DataTypes.STRING(50)
    		},
			custTel: {
    			type: DataTypes.STRING(50)
    		},
			custEmail: {
    			type: Types.EMAIL
    		},
			custBillToAddress: {
    			type: Types.ADDRESS
    		},
			custShipToAdress: {
    			type: DataTypes.STRING(255)
    		},
			custGuiNumber: {
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

	Customer.recordName = "銀行帳戶";
	
	Customer.associate = (db) => {
		belongsTo(db, Customer, db.company, "companyId");
	}

	return Customer;
};

