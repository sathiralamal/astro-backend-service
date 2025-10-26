const request = require("supertest");
const express = require("express");
const apiRoutes = require("../src/routes/api");

const app = express();
app.use(express.json());
app.use("/api/v1", apiRoutes);

describe("API Endpoints", () => {
  it("GET /api/v1/health should return status UP", async () => {
    const res = await request(app).get("/api/v1/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "UP" });
  });

  it("POST /api/v1/chart/generate should return birth chart", async () => {
    const payload = {
      dateOfBirth: "1990-05-15",
      timeOfBirth: "14:30:00",
      placeOfBirth: "London, UK",
    };
    const res = await request(app).post("/api/v1/chart/generate").send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("sunSign");
    expect(res.body).toHaveProperty("moonSign");
    expect(res.body).toHaveProperty("ascendant");
    expect(Array.isArray(res.body.planetaryPositions)).toBe(true);
  });

  it("POST /api/v1/chart/interpret should return prediction", async () => {
    const chart = {
      sunSign: "Taurus",
      moonSign: "Libra",
      ascendant: "Virgo",
      planetaryPositions: [
        { planet: "Mars", sign: "Cancer", house: 10 },
        { planet: "Venus", sign: "Gemini", house: 2 },
        { planet: "Jupiter", sign: "Leo", house: 5 },
      ],
    };
    const res = await request(app).post("/api/v1/chart/interpret").send(chart);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("prediction");
  });
});
