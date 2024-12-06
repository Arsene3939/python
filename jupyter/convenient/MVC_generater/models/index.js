"use strict";

import Sequelize from "sequelize";

// AInsight
import todo from "./todo.js";
import financial_statement from "./financial_statement.js";
import balance_sheet from "./balance_sheet.js";
import income_statement from "./income_statement.js";
import cashflow_statement from "./cashflow_statement.js";
import fa_transaction from "./fa_transaction.js";
import fixed_assets from "./fixed_assets.js";
import account from "./account.js";
import journal from "./journal.js";
import alarm from "./alarm.js";
import user from "./user.js";
import department from "./department.js";
import employee from "./employee.js";
import customer from "./customer.js";
import bank from "./bank.js";
import loan from "./loan.js";
import cashflow from "./cashflow.js";
import company from "./company.js";
import product from "./product.js";
import inv from "./inv.js";
import vendor from "./vendor.js";
import payment_method from "./payment_method.js";
import petty_cash from "./petty_cash.js";
import po_received from "./po_received.js";
import so_receivable from "./so_receivable.js";
import returns_and_allowances from "./returns_and_allowances.js";
import project from "./project.js";
import salaries from "./salaries.js";
import shop from "./shop.js";
import storage from "./storage.js";
import business_unit from "./business_unit.js";
import expense from "./expense.js";
import sales_target from "./sales_target.js";
import po_forecast from "./po_forecast.js";
import insurance from "./insurance.js";
import upload from "./upload.js";


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
	todo: todo(sequelize),
	financialStatement: financial_statement(sequelize),
	balanceSheet: balance_sheet(sequelize),
	incomeStatement: income_statement(sequelize),
	cashflowStatement: cashflow_statement(sequelize),
	faTransaction: fa_transaction(sequelize),
	fixedAssets: fixed_assets(sequelize),
	account: account(sequelize),
	journal: journal(sequelize),
	alarm: alarm(sequelize),
	user: user(sequelize),
	department: department(sequelize),
	employee: employee(sequelize),
	customer: customer(sequelize),
	bank: bank(sequelize),
	loan: loan(sequelize),
	cashflow: cashflow(sequelize),
	company: company(sequelize),
	product: product(sequelize),
	inv: inv(sequelize),
	vendor: vendor(sequelize),
	paymentMethod: payment_method(sequelize),
	pettyCash: petty_cash(sequelize),
	poReceived: po_received(sequelize),
	soReceivable: so_receivable(sequelize),
	returnsAndAllowances: returns_and_allowances(sequelize),
	project: project(sequelize),
	salaries: salaries(sequelize),
	shop: shop(sequelize),
	storage: storage(sequelize),
	business_unit: business_unit(sequelize),
	expense: expense(sequelize),
	salesTarget: sales_target(sequelize),
	poForecast: po_forecast(sequelize),
	insurance: insurance(sequelize),
	upload: upload(sequelize),

};

for (const key of Object.keys(db)) {
	if (db[key].associate) {
		db[key].associate(db);
	}
}
