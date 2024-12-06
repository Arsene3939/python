
describe('用戶輸入表 - 固定資產變動表 faId', () => {

    before(async () => {
        global.url = "/api/edit/fixedAssets";
        global.model = db.fixedAssets;
        global.pk = 'faId';
        global.requireData = ["faCode","deptCode","empCode","faName","faAccountCode","faCategory","faType","faOriginalValue","faDepreciationStartDate","faDuration","faDepreciationCalMethod","faAccumulatedDepreciation","faNetValue","isJournal"]
        await createTempData();
    })

    it("新增固定資產變動表", createHandler)

    it("查詢所有固定資產變動表", findAllHandler)

    it("查詢一筆固定資產變動表", findOneHandler)

    it("更新固定資產變動表", updateHandler)

    it("刪除固定資產變動表", deleteHandler);
})