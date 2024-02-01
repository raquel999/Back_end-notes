const { Router } = require ("express");
const TagsController = require("../controllers/TagsController")


const ensureAuthenticted = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();
const tagsController = new TagsController()

tagsRoutes.get ('/', ensureAuthenticted , tagsController.index);

module.exports = tagsRoutes;