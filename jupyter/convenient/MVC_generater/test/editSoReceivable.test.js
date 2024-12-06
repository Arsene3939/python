
describe('用戶輸入表 - 產品銷貨紀錄 soRcvId', () => {

    before(async () => {
        global.url = "/api/edit/soReceivable";
        global.model = db.soReceivable;
        global.pk = 'soRcvId';
        global.requireData = ["empCode","custCode","prodNumber","shopCode","bizUnitCode","soRcvCode","soRcvInvoiceNumber","soRcvSalesQty","soRcvInvoiceDate","soRcvSalesAmount","soRcvDueDate","soRcvPostDate","soRcvStatus","soRcvSalesChannel","soRcvSalesPlatform","soRcvRemark","isJournal"]
        await createTempData();
    })

    it("新增產品銷貨紀錄", createHandler)

    it("查詢所有產品銷貨紀錄", findAllHandler)

    it("查詢一筆產品銷貨紀錄", findOneHandler)

    it("更新產品銷貨紀錄", updateHandler)

    it("刪除產品銷貨紀錄", deleteHandler);
})