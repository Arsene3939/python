
describe('用戶輸入表 - 銀行帳戶 bankId', () => {

    before(async () => {
        global.url = "/api/edit/bank";
        global.model = db.bank;
        global.pk = 'bankId';
        global.requireData = ["bankCode","bankSwiftCode","bankAccount","bankOwnerType","bankOwnerCode"]
        await createTempData();
    })

    it("新增銀行帳戶", createHandler)

    it("查詢所有銀行帳戶", findAllHandler)

    it("查詢一筆銀行帳戶", findOneHandler)

    it("更新銀行帳戶", updateHandler)

    it("刪除銀行帳戶", deleteHandler);
})