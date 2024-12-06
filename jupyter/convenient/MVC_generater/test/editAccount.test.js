
describe('用戶輸入表 - 會計項目 accountId', () => {

    before(async () => {
        global.url = "/api/edit/account";
        global.model = db.account;
        global.pk = 'accountId';
        global.requireData = ["accountCode","accountName","accountType","accountExpirationDate"]
        await createTempData();
    })

    it("新增會計項目", createHandler)

    it("查詢所有會計項目", findAllHandler)

    it("查詢一筆會計項目", findOneHandler)

    it("更新會計項目", updateHandler)

    it("刪除會計項目", deleteHandler);
})