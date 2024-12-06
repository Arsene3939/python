"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const SoReceivable = sequelize.define(
		"soReceivable", // Model name
		{
			// Attributes
			soRcvId: {
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
			empCode: {
    			type: Types.CODE
    		},
			custCode: {
    			type: Types.CODE
    		},
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			shopCode: {
    			type: Types.CODE
    		},
			bizUnitCode: {
    			type: Types.CODE
    		},
			soRcvCode: {
    			type: Types.CODE
    		},
			soRcvInvoiceNumber: {
    			type: DataTypes.STRING(50)
    		},
			soRcvSalesQty: {
    			type: DataTypes.INTEGER
    		},
			soRcvInvoiceDate: {
    			type: DataTypes.DATEONLY
    		},
			soRcvSalesAmount: {
    			type: Types.MONEY
    		},
			soRcvDueDate: {
    			type: DataTypes.DATEONLY
    		},
			soRcvPostDate: {
    			type: DataTypes.DATEONLY
    		},
			soRcvStatus: {
    			type: DataTypes.BOOLEAN
    		},
			soRcvSalesChannel: {
    			type: DataTypes.STRING(50)
    		},
			soRcvSalesPlatform: {
    			type: DataTypes.STRING(50)
    		},
			soRcvRemark: {
    			type: DataTypes.STRING(50)
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

	SoReceivable.recordName = "銀行帳戶";
	
	SoReceivable.associate = (db) => {
		belongsTo(db, SoReceivable, db.company, "companyId");
	}

	return SoReceivable;
};

