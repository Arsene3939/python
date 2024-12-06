
describe('用戶輸入表 - 上傳 uploadId', () => {

    before(async () => {
        global.url = "/api/edit/upload";
        global.model = db.upload;
        global.pk = 'uploadId';
        global.requireData = ["uploadUserId","uploadType","uploadFilePath","uploadFileName","uploadDatetime","syncDatetime"]
        await createTempData();
    })

    it("新增上傳", createHandler)

    it("查詢所有上傳", findAllHandler)

    it("查詢一筆上傳", findOneHandler)

    it("更新上傳", updateHandler)

    it("刪除上傳", deleteHandler);
})