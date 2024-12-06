
describe('用戶輸入表 - 專案 projId', () => {

    before(async () => {
        global.url = "/api/edit/project";
        global.model = db.project;
        global.pk = 'projId';
        global.requireData = ["custCode","empCode","bizUnitCode","projCode","projName","projContent","projStatus","projContractDate","projStartDate","projFinishedDate","projAccruedRevenue","projPlanGrossProfit","projContractAmount"]
        await createTempData();
    })

    it("新增專案", createHandler)

    it("查詢所有專案", findAllHandler)

    it("查詢一筆專案", findOneHandler)

    it("更新專案", updateHandler)

    it("刪除專案", deleteHandler);
})