"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const PoReceived = sequelize.define(
		"poReceived", // Model name
		{
			// Attributes
			poRcvId: {
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
			prodNumber: {
    			type: DataTypes.STRING(25)
    		},
			shopCode: {
    			type: Types.CODE
    		},
			vendorCode: {
    			type: Types.CODE
    		},
			poNumber: {
    			type: DataTypes.STRING(25)
    		},
			poRcvVendorPN: {
    			type: DataTypes.STRING(25)
    		},
			poOrderedQty: {
    			type: DataTypes.INTEGER
    		},
			poPrice: {
    			type: Types.MONEY
    		},
			poAmount: {
    			type: Types.MONEY
    		},
			poInvoiceNumber: {
    			type: DataTypes.STRING(255)
    		},
			poInvoiceDate: {
    			type: DataTypes.DATEONLY
    		},
			poTaxCode: {
    			type: Types.CODE
    		},
			poReceiptType: {
    			type: DataTypes.INTEGER
    		},
			poRcvNumber: {
    			type: DataTypes.STRING(25)
    		},
			poReceivedQty: {
    			type: DataTypes.INTEGER
    		},
			poReceivedDate: {
    			type: DataTypes.DATEONLY
    		},
			poEstPaidDate: {
    			type: DataTypes.DATEONLY
    		},
			poPaidDate: {
    			type: DataTypes.DATEONLY
    		},
			poPaidStatus: {
    			type: DataTypes.BOOLEAN
    		},
			poRemark: {
    			type: DataTypes.STRING(255)
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

	PoReceived.recordName = "銀行帳戶";
	
	PoReceived.associate = (db) => {
		belongsTo(db, PoReceived, db.company, "companyId");
	}

	return PoReceived;
};

