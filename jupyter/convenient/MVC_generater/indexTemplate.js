"use strict";

import Sequelize from "sequelize";

// AInsight
_import_

export const Op = Sequelize.Op;

// PostgreSQL FIX: Decimal 字串轉數字
Sequelize.DataTypes.postgres.DECIMAL.parse = parseFloat;

export const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DATABASE_USER,
	process.env.DATABASE_PASSWORD,
	{
		host: process.env.DATABASE_HOST,
		port: process.env.DATABASE_PORT,
		dialect: 'postgres',
		dialectOptions: {
			decimalNumbers: true
		},
		operatorsAliases: 0,
		logging: process.env.DATABASE_LOGGING === 'true' ? console.log : false
		// poll: {
		//   max: config.db.pool.max,
		//   min: config.db.pool.min,
		//   acquire: config.db.pool.acquire,
		//   idle: config.db.pool.idle
		// }
	},
);

export const db = {
    sequelize: sequelize,
_db_
};

for (const key of Object.keys(db)) {
	if (db[key].associate) {
		db[key].associate(db);
	}
}
