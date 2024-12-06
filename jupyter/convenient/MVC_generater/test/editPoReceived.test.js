
describe('用戶輸入表 - 採購收料 poRcvId', () => {

    before(async () => {
        global.url = "/api/edit/poReceived";
        global.model = db.poReceived;
        global.pk = 'poRcvId';
        global.requireData = ["empCode","prodNumber","shopCode","vendorCode","poNumber","poRcvVendorPN","poOrderedQty","poPrice","poAmount","poInvoiceNumber","poInvoiceDate","poTaxCode","poReceiptType","poRcvNumber","poReceivedQty","poReceivedDate","poEstPaidDate","poPaidDate","poPaidStatus","poRemark","isJournal"]
        await createTempData();
    })

    it("新增採購收料", createHandler)

    it("查詢所有採購收料", findAllHandler)

    it("查詢一筆採購收料", findOneHandler)

    it("更新採購收料", updateHandler)

    it("刪除採購收料", deleteHandler);
})