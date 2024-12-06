"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Project = sequelize.define(
		"project", // Model name
		{
			// Attributes
			projId: {
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
			empCode: {
    			type: Types.CODE
    		},
			bizUnitCode: {
    			type: Types.CODE
    		},
			projCode: {
    			type: Types.CODE
    		},
			projName: {
    			type: DataTypes.STRING(50)
    		},
			projContent: {
    			type: DataTypes.STRING(255)
    		},
			projStatus: {
    			type: DataTypes.STRING(50)
    		},
			projContractDate: {
    			type: DataTypes.DATEONLY
    		},
			projStartDate: {
    			type: DataTypes.DATEONLY
    		},
			projFinishedDate: {
    			type: DataTypes.DATEONLY
    		},
			projAccruedRevenue: {
    			type: Types.MONEY
    		},
			projPlanGrossProfit: {
    			type: Types.MONEY
    		},
			projContractAmount: {
    			type: Types.MONEY
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

	Project.recordName = "銀行帳戶";
	
	Project.associate = (db) => {
		belongsTo(db, Project, db.company, "companyId");
	}

	return Project;
};

