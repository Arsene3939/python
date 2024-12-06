
describe('用戶輸入表 - 付款方法 pmId', () => {

    before(async () => {
        global.url = "/api/edit/paymentMethod";
        global.model = db.paymentMethod;
        global.pk = 'pmId';
        global.requireData = ["paymentMethodName","paymentTerm"]
        await createTempData();
    })

    it("新增付款方法", createHandler)

    it("查詢所有付款方法", findAllHandler)

    it("查詢一筆付款方法", findOneHandler)

    it("更新付款方法", updateHandler)

    it("刪除付款方法", deleteHandler);
})