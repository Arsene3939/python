
describe('用戶輸入表 - 店家 shopId', () => {

    before(async () => {
        global.url = "/api/edit/shop";
        global.model = db.shop;
        global.pk = 'shopId';
        global.requireData = ["shopCode","shopName","shopArea","shopAddress"]
        await createTempData();
    })

    it("新增店家", createHandler)

    it("查詢所有店家", findAllHandler)

    it("查詢一筆店家", findOneHandler)

    it("更新店家", updateHandler)

    it("刪除店家", deleteHandler);
})