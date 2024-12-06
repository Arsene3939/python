
describe('用戶輸入表 - 現金帳 cashflowId', () => {

    before(async () => {
        global.url = "/api/edit/cashflow";
        global.model = db.cashflow;
        global.pk = 'cashflowId';
        global.requireData = ["cashflowNumber","cashflowDate","bankCode","cashflowDesc","cashflowType","cashflowTrxType","cashflowAmount","cashflowCurrency","isJournal"]
        await createTempData();
    })

    it("新增現金帳", createHandler)

    it("查詢所有現金帳", findAllHandler)

    it("查詢一筆現金帳", findOneHandler)

    it("更新現金帳", updateHandler)

    it("刪除現金帳", deleteHandler);
})