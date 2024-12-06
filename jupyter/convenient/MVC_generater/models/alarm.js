"use strict";

import { DataTypes } from "sequelize";
import { Types, Validates } from "../config/database.config.js";
import { belongsTo } from "../utils/database.utils.js";


// foreign key: company_id, role_id
export default (sequelize) => {
	const Alarm = sequelize.define(
		"alarm", // Model name
		{
			// Attributes
			alarmId: {
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
			alarmCode: {
    			type: Types.CODE
    		},
			alarmCategory: {
    			type: DataTypes.STRING(25)
    		},
			RedThresholdValue: {
    			type: DataTypes.INTEGER
    		},
			YellowThresholdValue: {
    			type: DataTypes.INTEGER
    		},
			alarmClass: {
    			type: DataTypes.STRING(25)
    		},
			alarmName: {
    			type: DataTypes.STRING(50)
    		},
			alarmEnable: {
    			type: DataTypes.BOOLEAN
    		},
			alarmTarget: {
    			type: DataTypes.STRING(50)
    		},
			alarmCompareType: {
    			type: DataTypes.STRING(50)
    		},
			alarmStatus: {
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

	Alarm.recordName = "銀行帳戶";
	
	Alarm.associate = (db) => {
		belongsTo(db, Alarm, db.company, "companyId");
	}

	return Alarm;
};

