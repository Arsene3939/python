
describe('用戶輸入表 - 預警 alarmId', () => {

    before(async () => {
        global.url = "/api/edit/alarm";
        global.model = db.alarm;
        global.pk = 'alarmId';
        global.requireData = ["alarmCode","alarmCategory","RedThresholdValue","YellowThresholdValue","alarmClass","alarmName","alarmEnable","alarmTarget","alarmCompareType","alarmStatus"]
        await createTempData();
    })

    it("新增預警", createHandler)

    it("查詢所有預警", findAllHandler)

    it("查詢一筆預警", findOneHandler)

    it("更新預警", updateHandler)

    it("刪除預警", deleteHandler);
})