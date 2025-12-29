const router = require("express").Router();
const verifyToken = require("../middleware/verifyToken");

const {
    createEvent,
    getEvents,
    deleteEvent,
    updateEvent,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/", verifyToken, createEvent);
router.put("/:id", verifyToken, updateEvent);
router.delete("/:id", verifyToken, deleteEvent);

module.exports = router;

