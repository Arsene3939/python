"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Salaries = sequelize.define(
		"salaries", // Model name
		{
			// Attributes
			salariesId: {
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
			salariesCode: {
    			type: Types.CODE
    		},
			salariesMonthlySalary: {
    			type: Types.MONEY
    		},
			salariesHourlySalary: {
    			type: Types.MONEY
    		},
			salariesYearMonth: {
    			type: DataTypes.DATEONLY
    		},
			salariesWorkingHour: {
    			type: DataTypes.REAL
    		},
			salariesOvertimeWorkingHour: {
    			type: DataTypes.REAL
    		},
			salariesBonus: {
    			type: Types.MONEY
    		},
			salariesOvertimePay: {
    			type: Types.MONEY
    		},
			salariesFoodExp: {
    			type: Types.MONEY
    		},
			salariesOthersExp: {
    			type: Types.MONEY
    		},
			salariesOffAmount: {
    			type: Types.MONEY
    		},
			salariesWithHoldingTax: {
    			type: Types.MONEY
    		},
			salariesLI: {
    			type: Types.MONEY
    		},
			salariesNHI: {
    			type: Types.MONEY
    		},
			salariesOthersFee: {
    			type: Types.MONEY
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

	Salaries.recordName = "銀行帳戶";
	
	Salaries.associate = (db) => {
		belongsTo(db, Salaries, db.company, "companyId");
	}

	return Salaries;
};

