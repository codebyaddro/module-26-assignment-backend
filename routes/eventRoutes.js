const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");
const {
    createEvent,
    getEvents,
    deleteEvent,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/", verifyToken, createEvent);
router.delete("/:id", verifyToken, deleteEvent);

module.exports = router;
