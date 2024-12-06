import { Router } from 'express';
import * as controller from "../controllers/editJournal.controller.js";

const EditJournalRouter = Router();

EditJournalRouter.post('/', controller.createJournal);
EditJournalRouter.get('/', controller.findAllJournal);
EditJournalRouter.get('/:journalId', controller.findOneJournal);
EditJournalRouter.put('/:journalId', controller.updateOneJournal);
EditJournalRouter.delete('/:journalId', controller.deleteOneJournal);

export default EditJournalRouter;