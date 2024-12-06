
describe('用戶輸入表 - 庫存盤點 invId', () => {

    before(async () => {
        global.url = "/api/edit/inv";
        global.model = db.inv;
        global.pk = 'invId';
        global.requireData = ["storageCode","empCode","shopCode","prodNumber","invCode","invDate","invLeftQty","invUnitCost"]
        await createTempData();
    })

    it("新增庫存盤點", createHandler)

    it("查詢所有庫存盤點", findAllHandler)

    it("查詢一筆庫存盤點", findOneHandler)

    it("更新庫存盤點", updateHandler)

    it("刪除庫存盤點", deleteHandler);
})