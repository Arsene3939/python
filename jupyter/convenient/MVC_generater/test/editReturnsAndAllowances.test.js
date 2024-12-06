
describe('用戶輸入表 - 折讓退貨表 sraId', () => {

    before(async () => {
        global.url = "/api/edit/returnsAndAllowances";
        global.model = db.returnsAndAllowances;
        global.pk = 'sraId';
        global.requireData = ["empCode","custCode","prodNumber","shopCode","bizUnitCode","sraIsReturn","sraReturnDate","sraReturnQty","sraReturnReason","sraAllowanceAmount","sraRefundAmount","sraInvoiceNumber","isJournal"]
        await createTempData();
    })

    it("新增折讓退貨表", createHandler)

    it("查詢所有折讓退貨表", findAllHandler)

    it("查詢一筆折讓退貨表", findOneHandler)

    it("更新折讓退貨表", updateHandler)

    it("刪除折讓退貨表", deleteHandler);
})