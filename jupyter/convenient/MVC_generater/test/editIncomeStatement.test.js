
describe('用戶輸入表 - 損益表 isId', () => {

    before(async () => {
        global.url = "/api/edit/incomeStatement";
        global.model = db.incomeStatement;
        global.pk = 'isId';
        global.requireData = ["isFirstLevelCode","isFirstLevelAccount","isSecondLevelCode","isSecondLevelAccount","isThirdLevelCode","isThirdLevelAccount","isFourthLevelCode","isFourthLevelAccount","isStartDate","isEndDate","isAmount","isNegative"]
        await createTempData();
    })

    it("新增損益表", createHandler)

    it("查詢所有損益表", findAllHandler)

    it("查詢一筆損益表", findOneHandler)

    it("更新損益表", updateHandler)

    it("刪除損益表", deleteHandler);
})