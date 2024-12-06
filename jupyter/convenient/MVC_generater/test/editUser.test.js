
describe('用戶輸入表 - 使用者 userId', () => {

    before(async () => {
        global.url = "/api/edit/user";
        global.model = db.user;
        global.pk = 'userId';
        global.requireData = ["userName","roleId","userEmail","userPassword","userAccessToken","userLastLogin"]
        await createTempData();
    })

    it("新增使用者", createHandler)

    it("查詢所有使用者", findAllHandler)

    it("查詢一筆使用者", findOneHandler)

    it("更新使用者", updateHandler)

    it("刪除使用者", deleteHandler);
})