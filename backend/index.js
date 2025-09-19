import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

// GET /prompt ile JSON dosyasından rastgele bir yazı döndürüyoruz
app.get("/prompt", (req, res) => {
  const random = data[Math.floor(Math.random() * data.length)]; //random, data.json'daki objelerden, yani yazılardan bir tanesi
  //burada bilgilerin bazılarını client'e gönderiyoruz
  res.json({ id: random.id, text: random.text, isAi: random.isAi });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
