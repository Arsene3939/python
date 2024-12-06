
describe('用戶輸入表 - 固定資產買賣表 faId', () => {

    before(async () => {
        global.url = "/api/edit/faTransaction";
        global.model = db.faTransaction;
        global.pk = 'faId';
        global.requireData = ["fatCode","faCode","deptCode","empCode","faName","faCategory","faType","fatTransactionDate","fatPaidRcvDate","fatAmount","fatIsCash","fatSellerAndBuyer","fatStatus","fatRemarks","isJournal"]
        await createTempData();
    })

    it("新增固定資產買賣表", createHandler)

    it("查詢所有固定資產買賣表", findAllHandler)

    it("查詢一筆固定資產買賣表", findOneHandler)

    it("更新固定資產買賣表", updateHandler)

    it("刪除固定資產買賣表", deleteHandler);
})