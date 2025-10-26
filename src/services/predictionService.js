const genAIService = require("./genAIService");

// Simulated Model Context Protocol for birth chart calculation
module.exports = async function generateBirthChart({
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
}) {
  const text = `Generate brith chart based on this given details , date of birth ${dateOfBirth} 
  , date time ${timeOfBirth} and birth location ${placeOfBirth} based on generated birth chart tell me what is Eduction details`;
  const response = genAIService(text);
  return response;
};
