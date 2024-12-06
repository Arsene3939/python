"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const ReturnsAndAllowances = sequelize.define(
		"returnsAndAllowances", // Model name
		{
			// Attributes
			sraId: {
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
			sraIsReturn: {
    			type: DataTypes.BOOLEAN
    		},
			sraReturnDate: {
    			type: DataTypes.DATEONLY
    		},
			sraReturnQty: {
    			type: DataTypes.INTEGER
    		},
			sraReturnReason: {
    			type: DataTypes.STRING(255)
    		},
			sraAllowanceAmount: {
    			type: Types.MONEY
    		},
			sraRefundAmount: {
    			type: Types.MONEY
    		},
			sraInvoiceNumber: {
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

	ReturnsAndAllowances.recordName = "銀行帳戶";
	
	ReturnsAndAllowances.associate = (db) => {
		belongsTo(db, ReturnsAndAllowances, db.company, "companyId");
	}

	return ReturnsAndAllowances;
};

