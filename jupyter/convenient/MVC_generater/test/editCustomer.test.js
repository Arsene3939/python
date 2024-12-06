
describe('用戶輸入表 - 買受人(客戶) custId', () => {

    before(async () => {
        global.url = "/api/edit/customer";
        global.model = db.customer;
        global.pk = 'custId';
        global.requireData = ["custCode","custName","custRep","custTel","custEmail","custBillToAddress","custShipToAdress","custGuiNumber"]
        await createTempData();
    })

    it("新增買受人(客戶)", createHandler)

    it("查詢所有買受人(客戶)", findAllHandler)

    it("查詢一筆買受人(客戶)", findOneHandler)

    it("更新買受人(客戶)", updateHandler)

    it("刪除買受人(客戶)", deleteHandler);
})