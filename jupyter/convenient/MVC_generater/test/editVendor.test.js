
describe('用戶輸入表 - 供應廠商(含合作商) vendorId', () => {

    before(async () => {
        global.url = "/api/edit/vendor";
        global.model = db.vendor;
        global.pk = 'vendorId';
        global.requireData = ["vendorCode","vendorName","vendorType","vendorTel","vendorEmail","vendorGuiNumber"]
        await createTempData();
    })

    it("新增供應廠商(含合作商)", createHandler)

    it("查詢所有供應廠商(含合作商)", findAllHandler)

    it("查詢一筆供應廠商(含合作商)", findOneHandler)

    it("更新供應廠商(含合作商)", updateHandler)

    it("刪除供應廠商(含合作商)", deleteHandler);
})