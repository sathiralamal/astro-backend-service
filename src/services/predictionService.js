const genAIService = require("./genAIService");

// Simulated Model Context Protocol for birth chart calculation
module.exports = async function generateBirthChart({
  dateOfBirth,
  timeOfBirth,
  placeOfBirth,
}) {
  const text = `Generate brith chart based on this given brith details , date of birth : ${dateOfBirth} 
  , brith time : ${timeOfBirth} and birth place is ${placeOfBirth} tell me about this person`;
  const response = genAIService(text);
  return response;
};
