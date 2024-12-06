
describe('用戶輸入表 - 分錄 journalId', () => {

    before(async () => {
        global.url = "/api/edit/journal";
        global.model = db.journal;
        global.pk = 'journalId';
        global.requireData = ["journalSeqNo","journalSubjectsNo","journalDate","journalAccountCode","journalAccountName","journalType","journalTrxTable","journalTrxId","journalAmount","journalDesc","jouranlRemark"]
        await createTempData();
    })

    it("新增分錄", createHandler)

    it("查詢所有分錄", findAllHandler)

    it("查詢一筆分錄", findOneHandler)

    it("更新分錄", updateHandler)

    it("刪除分錄", deleteHandler);
})