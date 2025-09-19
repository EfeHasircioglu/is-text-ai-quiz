import fs from "fs";
import path from "path";

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

  // Handle GET requests only
  if (req.method === "GET") {
    try {
      // Read data.json from the root directory
      const dataPath = path.join(process.cwd(), "data.json");
      const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

      const random = data[Math.floor(Math.random() * data.length)];
      res.status(200).json({
        id: random.id,
        text: random.text,
        isAi: random.isAi,
      });
      return;
    } catch (error) {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Failed to load data" });
      return;
    }
  }

  // Method not allowed
  res.status(405).json({ error: "Method not allowed" });
}
