
describe('用戶輸入表 - 產品 prodId', () => {

    before(async () => {
        global.url = "/api/edit/product";
        global.model = db.product;
        global.pk = 'prodId';
        global.requireData = ["storageCode","vendorCode","prodNumber","prodModel","prodName","prodBrand","prodDesc","prodUnitPrice","prodUnitCost","prodSafetyQty","prodUnit","prodMOQ","prodUnitPriceQuantity1","prodUnitPriceQuantity2","prodUnitPriceQuantity3"]
        await createTempData();
    })

    it("新增產品", createHandler)

    it("查詢所有產品", findAllHandler)

    it("查詢一筆產品", findOneHandler)

    it("更新產品", updateHandler)

    it("刪除產品", deleteHandler);
})