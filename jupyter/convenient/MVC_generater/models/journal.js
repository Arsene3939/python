"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Journal = sequelize.define(
		"journal", // Model name
		{
			// Attributes
			journalId: {
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
			journalSeqNo: {
    			type: DataTypes.INTEGER
    		},
			journalSubjectsNo: {
    			type: DataTypes.INTEGER
    		},
			journalDate: {
    			type: DataTypes.DATEONLY
    		},
			journalAccountCode: {
    			type: Types.CODE
    		},
			journalAccountName: {
    			type: DataTypes.STRING(45)
    		},
			journalType: {
    			type: DataTypes.STRING(25)
    		},
			journalTrxTable: {
    			type: DataTypes.STRING(25)
    		},
			journalTrxId: {
    			type: DataTypes.INTEGER
    		},
			journalAmount: {
    			type: DataTypes.REAL
    		},
			journalDesc: {
    			type: DataTypes.STRING(255)
    		},
			jouranlRemark: {
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

	Journal.recordName = "銀行帳戶";
	
	Journal.associate = (db) => {
		belongsTo(db, Journal, db.company, "companyId");
	}

	return Journal;
};

