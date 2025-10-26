const generateBirthChart = require("../services/predictionService");
const validateGenerateChartDto = require("../dto/generateChartDto");

exports.generateChart = (req, res) => {
  if (!validateGenerateChartDto(req.body)) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  generateBirthChart(req.body)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json(error.message);
    });
};
