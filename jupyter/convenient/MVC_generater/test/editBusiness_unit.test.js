
describe('用戶輸入表 - 事業體 bizUnitId', () => {

    before(async () => {
        global.url = "/api/edit/business_unit";
        global.model = db.business_unit;
        global.pk = 'bizUnitId';
        global.requireData = ["bizUnitCode","bizUnitName"]
        await createTempData();
    })

    it("新增事業體", createHandler)

    it("查詢所有事業體", findAllHandler)

    it("查詢一筆事業體", findOneHandler)

    it("更新事業體", updateHandler)

    it("刪除事業體", deleteHandler);
})