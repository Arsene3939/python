
describe('用戶輸入表 - 零用金代墊 pcId', () => {

    before(async () => {
        global.url = "/api/edit/pettyCash";
        global.model = db.pettyCash;
        global.pk = 'pcId';
        global.requireData = ["projCode","empCode","prodNumber","pcCode","pcContent","pcApplyDate","pcReceiptDate","pcFeeType","pcAmount","pcTaxCode","pcPaidStatus","pcPaidDate","pcSendStatus","pcReceiptType","pcRemark","isJournal"]
        await createTempData();
    })

    it("新增零用金代墊", createHandler)

    it("查詢所有零用金代墊", findAllHandler)

    it("查詢一筆零用金代墊", findOneHandler)

    it("更新零用金代墊", updateHandler)

    it("刪除零用金代墊", deleteHandler);
})