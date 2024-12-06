
describe('用戶輸入表 - 現金流量表 cfsId', () => {

    before(async () => {
        global.url = "/api/edit/cashflowStatement";
        global.model = db.cashflowStatement;
        global.pk = 'cfsId';
        global.requireData = ["cfsFirstLevelCode","cfsFirstLevelAccount","cfsSecondLevelCode","cfsSecondLevelAccount","cfsThirdLevelCode","cfsThirdLevelAccount","cfsFourthLevelCode","cfsFourthLevelAccount","cfsStartDate","cfsEndDate","cfsAmount","isNegative"]
        await createTempData();
    })

    it("新增現金流量表", createHandler)

    it("查詢所有現金流量表", findAllHandler)

    it("查詢一筆現金流量表", findOneHandler)

    it("更新現金流量表", updateHandler)

    it("刪除現金流量表", deleteHandler);
})