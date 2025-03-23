const express = require("express");
const app = express();
const { apiKeyAuth } = require("@vpriem/express-api-key-auth");
require("dotenv").config();
const cors = require("cors");
const kuliner = require("./data/kuliner");
const wisata = require("./data/wisata");
const umkm = require("./data/umkm");
const berita = require("./data/berita");

const API_KEY = process.env.API_KEY;
const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "DELETE", "PUT"],
};

const validateApiKey = (req, res, next) => {
  const reqApiKey = req.headers["x-api-key"];

  if (!reqApiKey) {
    return res.status(401).json({ error: "API key required" });
  }

  if (reqApiKey !== API_KEY) {
    return res.status(403).json({ error: "Invalid API key" });
  }

  next();
};

const apiKeyMiddleware = apiKeyAuth([API_KEY]);

app.use(cors(corsConfig));
app.use(validateApiKey, apiKeyMiddleware);

app.get("/api/berita", (req, res) => res.json(berita));
app.get("/api/kuliner", (req, res) => res.json(kuliner));
app.get("/api/umkm", (req, res) => res.json(umkm));
app.get("/api/wisata", (req, res) => res.json(wisata));

app.listen(3000, () => {
  console.log("Running on : http://localhost:3000");
});

module.exports = app;
