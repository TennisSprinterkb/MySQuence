const router = require("express").Router();
const sequenceRoutes = require("./sequence-api-routes");

// Book routes
router.use("/", sequenceRoutes);

module.exports = router;