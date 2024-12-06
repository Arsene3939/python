
describe('用戶輸入表 - 保險 insuranceId', () => {

    before(async () => {
        global.url = "/api/edit/insurance";
        global.model = db.insurance;
        global.pk = 'insuranceId';
        global.requireData = ["empCode","insuranceCode","insuranceYearMonth","insuranceGrade","insuranceLILabor","insuranceLIEnterprise","insuranceNHILabor","insuranceNHIEnterprise","insurancePension","isJournal"]
        await createTempData();
    })

    it("新增保險", createHandler)

    it("查詢所有保險", findAllHandler)

    it("查詢一筆保險", findOneHandler)

    it("更新保險", updateHandler)

    it("刪除保險", deleteHandler);
})