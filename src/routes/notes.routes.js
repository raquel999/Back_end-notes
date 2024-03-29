const { Router } = require ("express");
const NotesController = require("../controllers/NotesController")
const ensureAuthenticted = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router();
const notesController = new NotesController(); 

notesRoutes.use(ensureAuthenticted);

notesRoutes.get ("/", notesController.index);
notesRoutes.post("/", notesController.create);
notesRoutes.get ("/:id", notesController.show);
notesRoutes.delete ("/:id", notesController.delete);

module.exports = notesRoutes;