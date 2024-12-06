"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Employee = sequelize.define(
		"employee", // Model name
		{
			// Attributes
			empId: {
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
			deptCode: {
    			type: Types.CODE
    		},
			empCode: {
    			type: Types.CODE
    		},
			empName: {
    			type: DataTypes.STRING(50)
    		},
			empIDNumber: {
    			type: DataTypes.STRING(50)
    		},
			empEmail: {
    			type: Types.EMAIL
    		},
			empCellphone: {
    			type: DataTypes.STRING(50)
    		},
			empGender: {
    			type: DataTypes.STRING(10)
    		},
			empAddress: {
    			type: Types.ADDRESS
    		},
			empTel: {
    			type: DataTypes.STRING(50)
    		},
			empTitle: {
    			type: DataTypes.STRING(255)
    		},
			empGrade: {
    			type: DataTypes.STRING(50)
    		},
			empRank: {
    			type: DataTypes.INTEGER
    		},
			empIsPartTime : {
    			type: DataTypes.BOOLEAN
    		},
			empOnBoardDate: {
    			type: DataTypes.DATEONLY
    		},
			empResignDate: {
    			type: DataTypes.DATEONLY
    		},
			empBirthday: {
    			type: DataTypes.DATEONLY
    		},
			empLastLogin: {
    			type: DataTypes.DATE
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

	Employee.recordName = "銀行帳戶";
	
	Employee.associate = (db) => {
		belongsTo(db, Employee, db.company, "companyId");
	}

	return Employee;
};

