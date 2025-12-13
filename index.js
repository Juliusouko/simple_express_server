// Sample node server

import express from "express";
import fs from "fs/promises"; // Use promises for modern async
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 3000;

// Gets filename and dirname of the current working directory file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();


server.get("/", async (req, res) => {
    try {
      const filePath = path.join(__dirname, "index.html");
      res.sendFile(filePath);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).send("500 Internal Server Error 💀");
    }
});

server.get("/about", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "about.html");
    res.sendFile(filePath);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("500 Internal Server Error 💀");
  }
});

server.get("/contact", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "contact.html");
    res.sendFile(filePath);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("500 Internal Server Error 💀");
  }
});

server.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
