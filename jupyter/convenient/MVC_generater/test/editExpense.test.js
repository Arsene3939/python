
describe('用戶輸入表 - 成本列表 expId', () => {

    before(async () => {
        global.url = "/api/edit/expense";
        global.model = db.expense;
        global.pk = 'expId';
        global.requireData = ["bizUnitCode","projCode","prodNumber","empCode","expCode","expInvoiceNumber","expInvoiceDate","expTaxCode","expReceiptType","expAccount","expType","expContent","expAmount","expPayfor","expPaymentMethod","expEstPaidDate","expPaidDate","expPaidStatus","expRemark","isJournal"]
        await createTempData();
    })

    it("新增成本列表", createHandler)

    it("查詢所有成本列表", findAllHandler)

    it("查詢一筆成本列表", findOneHandler)

    it("更新成本列表", updateHandler)

    it("刪除成本列表", deleteHandler);
})