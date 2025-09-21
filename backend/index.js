import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
//frontendi express'den sunuyorum
app.use(express.static(path.join(process.cwd(), ".../frontend/dist")));
// GET /prompt ile JSON dosyasından rastgele bir yazı döndürüyoruz
app.get("/prompt", (req, res) => {
  const random = data[Math.floor(Math.random() * data.length)]; //random, data.json'daki objelerden, yani yazılardan bir tanesi
  //burada bilgilerin bazılarını client'e gönderiyoruz
  res.json({ id: random.id, text: random.text, isAi: random.isAi });
});

//react için catch all handler
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "../frontend/dist", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0");
