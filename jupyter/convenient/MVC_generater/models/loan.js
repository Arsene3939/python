"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Loan = sequelize.define(
		"loan", // Model name
		{
			// Attributes
			loanId: {
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
			loanCode: {
    			type: Types.CODE
    		},
			loanType: {
    			type: DataTypes.STRING(45)
    		},
			loanAmount: {
    			type: Types.MONEY
    		},
			loanInterestRate: {
    			type: DataTypes.DECIMAL
    		},
			loanTerm: {
    			type: DataTypes.INTEGER
    		},
			loanDate: {
    			type: DataTypes.DATEONLY
    		},
			loanRepaymentMethod: {
    			type: DataTypes.STRING(45)
    		},
			loanRepaymentAmount: {
    			type: Types.MONEY
    		},
			loanRepaymentDate: {
    			type: DataTypes.DATEONLY
    		},
			loanStatus: {
    			type: DataTypes.STRING(45)
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

	Loan.recordName = "銀行帳戶";
	
	Loan.associate = (db) => {
		belongsTo(db, Loan, db.company, "companyId");
	}

	return Loan;
};

