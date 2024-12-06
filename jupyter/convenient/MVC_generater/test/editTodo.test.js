
describe('用戶輸入表 - 代辦事項 todoId', () => {

    before(async () => {
        global.url = "/api/edit/todo";
        global.model = db.todo;
        global.pk = 'todoId';
        global.requireData = ["todoCode","todoCategory","todoDate","todoItem","todoRemark"]
        await createTempData();
    })

    it("新增代辦事項", createHandler)

    it("查詢所有代辦事項", findAllHandler)

    it("查詢一筆代辦事項", findOneHandler)

    it("更新代辦事項", updateHandler)

    it("刪除代辦事項", deleteHandler);
})