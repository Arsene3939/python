
describe('用戶輸入表 - 資產負債表 bsId', () => {

    before(async () => {
        global.url = "/api/edit/balanceSheet";
        global.model = db.balanceSheet;
        global.pk = 'bsId';
        global.requireData = ["bsFirstLevelCode","bsFirstLevelAccount","bsSecondLevelCode","bsSecondLevelAccount","bsThirdLevelCode","bsThirdLevelAccount","bsFourthLevelCode","bsFourthLevelAccount","bsDuration","bsAmount","isNegative"]
        await createTempData();
    })

    it("新增資產負債表", createHandler)

    it("查詢所有資產負債表", findAllHandler)

    it("查詢一筆資產負債表", findOneHandler)

    it("更新資產負債表", updateHandler)

    it("刪除資產負債表", deleteHandler);
})