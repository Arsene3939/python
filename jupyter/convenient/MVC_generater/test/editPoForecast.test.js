
describe('用戶輸入表 - 進貨預估 poFcstId', () => {

    before(async () => {
        global.url = "/api/edit/poForecast";
        global.model = db.poForecast;
        global.pk = 'poFcstId';
        global.requireData = ["poFcstCode","poFcstStartDate","poFcstEndDate","vendorCode","prodNumber","poFcstqty","poFcstAmt"]
        await createTempData();
    })

    it("新增進貨預估", createHandler)

    it("查詢所有進貨預估", findAllHandler)

    it("查詢一筆進貨預估", findOneHandler)

    it("更新進貨預估", updateHandler)

    it("刪除進貨預估", deleteHandler);
})