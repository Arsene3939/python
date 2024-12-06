
describe('用戶輸入表 - _zhname_ _smallname_Id', () => {

    before(async () => {
        global.url = "/api/edit/_name_";
        global.model = db._name_;
        global.pk = '_smallname_Id';
        global.requireData = [_reqlist_]
        await createTempData();
    })

    it("新增_zhname_", createHandler)

    it("查詢所有_zhname_", findAllHandler)

    it("查詢一筆_zhname_", findOneHandler)

    it("更新_zhname_", updateHandler)

    it("刪除_zhname_", deleteHandler);
})