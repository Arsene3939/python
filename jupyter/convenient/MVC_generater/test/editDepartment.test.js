
describe('用戶輸入表 - 部門 deptId', () => {

    before(async () => {
        global.url = "/api/edit/department";
        global.model = db.department;
        global.pk = 'deptId';
        global.requireData = ["deptName","deptCode"]
        await createTempData();
    })

    it("新增部門", createHandler)

    it("查詢所有部門", findAllHandler)

    it("查詢一筆部門", findOneHandler)

    it("更新部門", updateHandler)

    it("刪除部門", deleteHandler);
})