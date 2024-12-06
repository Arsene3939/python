
describe('用戶輸入表 - 簡明三表 fsId', () => {

    before(async () => {
        global.url = "/api/edit/financialStatement";
        global.model = db.financialStatement;
        global.pk = 'fsId';
        global.requireData = ["fsCategory","fsFirstLevelCode","fsFirstLevelAccount","fsSecondLevelCode","fsSecondLevelAccount","fsThirdLevelCode","fsThirdLevelAccount","fsFourthLevelCode","fsFourthLevelAccount","fsDuration","fsAmount"]
        await createTempData();
    })

    it("新增簡明三表", createHandler)

    it("查詢所有簡明三表", findAllHandler)

    it("查詢一筆簡明三表", findOneHandler)

    it("更新簡明三表", updateHandler)

    it("刪除簡明三表", deleteHandler);
})