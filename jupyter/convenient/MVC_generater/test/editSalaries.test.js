
describe('用戶輸入表 - 薪資列表 salariesId', () => {

    before(async () => {
        global.url = "/api/edit/salaries";
        global.model = db.salaries;
        global.pk = 'salariesId';
        global.requireData = ["empCode","salariesCode","salariesMonthlySalary","salariesHourlySalary","salariesYearMonth","salariesWorkingHour","salariesOvertimeWorkingHour","salariesBonus","salariesOvertimePay","salariesFoodExp","salariesOthersExp","salariesOffAmount","salariesWithHoldingTax","salariesLI","salariesNHI","salariesOthersFee","isJournal"]
        await createTempData();
    })

    it("新增薪資列表", createHandler)

    it("查詢所有薪資列表", findAllHandler)

    it("查詢一筆薪資列表", findOneHandler)

    it("更新薪資列表", updateHandler)

    it("刪除薪資列表", deleteHandler);
})