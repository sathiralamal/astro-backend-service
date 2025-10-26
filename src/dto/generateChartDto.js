// DTO for birth chart generation request
module.exports = function validateGenerateChartDto(body) {
  const { dateOfBirth, timeOfBirth, placeOfBirth } = body;
  if (!dateOfBirth || !timeOfBirth || !placeOfBirth) {
    return false;
  }
  // Add more validation as needed
  return true;
};
