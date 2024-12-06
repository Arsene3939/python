
describe('用戶輸入表 - 公司 companyId', () => {

    before(async () => {
        global.url = "/api/edit/company";
        global.model = db.company;
        global.pk = 'companyId';
        global.requireData = ["companyName","companyTel","companyEmail","companyAddress","companyGuiNumber","companyCurrency","companyParentCode","companyPrincipleName"]
        await createTempData();
    })

    it("新增公司", createHandler)

    it("查詢所有公司", findAllHandler)

    it("查詢一筆公司", findOneHandler)

    it("更新公司", updateHandler)

    it("刪除公司", deleteHandler);
})