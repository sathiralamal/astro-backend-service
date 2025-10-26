const express = require("express");
const router = express.Router();
const healthController = require("../controllers/healthController");
const chartController = require("../controllers/chartController");

router.get("/health", healthController.healthCheck);
router.post("/chart/generate", chartController.generateChart);

module.exports = router;
