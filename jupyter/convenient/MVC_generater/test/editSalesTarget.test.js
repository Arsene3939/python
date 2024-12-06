
describe('用戶輸入表 - 銷售預估 salesTargetId', () => {

    before(async () => {
        global.url = "/api/edit/salesTarget";
        global.model = db.salesTarget;
        global.pk = 'salesTargetId';
        global.requireData = ["salesTargetYearMonth","prodNumber","projCode","bizUnitCode","targetCode","targetAmount","targetGrossProfit","targetGPPercentage","targetNetIncome","targetNetIncomePercentage","targetInventoryDays"]
        await createTempData();
    })

    it("新增銷售預估", createHandler)

    it("查詢所有銷售預估", findAllHandler)

    it("查詢一筆銷售預估", findOneHandler)

    it("更新銷售預估", updateHandler)

    it("刪除銷售預估", deleteHandler);
})