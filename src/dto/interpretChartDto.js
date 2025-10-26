// DTO for birth chart interpretation request
module.exports = function validateInterpretChartDto(body) {
  if (
    !body.sunSign ||
    !body.moonSign ||
    !body.ascendant ||
    !Array.isArray(body.planetaryPositions)
  ) {
    return false;
  }
  // Add more validation as needed
  return true;
};
