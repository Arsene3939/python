
describe('用戶輸入表 - 員工 empId', () => {

    before(async () => {
        global.url = "/api/edit/employee";
        global.model = db.employee;
        global.pk = 'empId';
        global.requireData = ["deptCode","empCode","empName","empIDNumber","empEmail","empCellphone","empGender","empAddress","empTel","empTitle","empGrade","empRank","empIsPartTime ","empOnBoardDate","empResignDate","empBirthday","empLastLogin"]
        await createTempData();
    })

    it("新增員工", createHandler)

    it("查詢所有員工", findAllHandler)

    it("查詢一筆員工", findOneHandler)

    it("更新員工", updateHandler)

    it("刪除員工", deleteHandler);
})