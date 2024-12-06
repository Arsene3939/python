
describe('用戶輸入表 - 倉儲 storageId', () => {

    before(async () => {
        global.url = "/api/edit/storage";
        global.model = db.storage;
        global.pk = 'storageId';
        global.requireData = ["storageCode","storageName","storageType","storageAddress"]
        await createTempData();
    })

    it("新增倉儲", createHandler)

    it("查詢所有倉儲", findAllHandler)

    it("查詢一筆倉儲", findOneHandler)

    it("更新倉儲", updateHandler)

    it("刪除倉儲", deleteHandler);
})