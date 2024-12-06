
describe('用戶輸入表 - 銀行借貸表 loanId', () => {

    before(async () => {
        global.url = "/api/edit/loan";
        global.model = db.loan;
        global.pk = 'loanId';
        global.requireData = ["loanCode","loanType","loanAmount","loanInterestRate","loanTerm","loanDate","loanRepaymentMethod","loanRepaymentAmount","loanRepaymentDate","loanStatus","isJournal"]
        await createTempData();
    })

    it("新增銀行借貸表", createHandler)

    it("查詢所有銀行借貸表", findAllHandler)

    it("查詢一筆銀行借貸表", findOneHandler)

    it("更新銀行借貸表", updateHandler)

    it("刪除銀行借貸表", deleteHandler);
})