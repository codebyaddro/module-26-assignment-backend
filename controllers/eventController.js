const Event = require("../models/Event");

// Create event
exports.createEvent = async (req, res) => {
    try {
        const event = await Event.create({
            ...req.body,
            createdBy: req.user.id,
        });
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: "Event creation failed" });
    }
};

// Get all events
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch events" });
    }
};

// 🔹 Update event
exports.updateEvent = async (req, res) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }

        res.json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: "Event update failed" });
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: "Event deleted" });
    } catch (error) {
        res.status(500).json({ message: "Delete failed" });
    }
};
