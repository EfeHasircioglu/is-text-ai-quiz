import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load data once when the function is initialized
const data = JSON.parse(fs.readFileSync(join(__dirname, "data.json"), "utf-8"));

export default function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Handle GET requests to /api/prompt
  if (req.method === "GET") {
    const random = data[Math.floor(Math.random() * data.length)];
    res.status(200).json({
      id: random.id,
      text: random.text,
      isAi: random.isAi,
    });
    return;
  }

  // Method not allowed
  res.status(405).json({ error: "Method not allowed" });
}
