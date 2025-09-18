import "./App.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
function App() {
  //backend'den gerekli bilgileri alıyoruz
  //doğru ve yanlış olduğunu belirten modal ayrı bir component olsun ve o componente isCorrect diye bir şey gönderelim ona göre renderlesin ama doğru veya yanlış olduğuna dair hesaplama App.jsx'de yapılsın
  //şuan elimizdeki textin verisini global olarak tutabilmek için
  const [currentData, setCurrentData] = useState("");
  //modal açık mı değil mi onu yönetebilmek için bir state
  const [isModalOpen, setIsModalOpen] = useState(true);

  async function getData() {
    const resp = await fetch("http://localhost:3000/prompt");
    const { id, text, isAi } = await resp.json();
    setCurrentData({ id, text, isAi });
    console.log(id, text, isAi); //! DEBUG
  }
  const [score, setScore] = useState(0);
  function checkText(button) {
    if (button === "ai") {
      if (currentData.isAi) {
        //TODO: Modal'daki doğru bilme durumu olacak
        //sunucudan yeni bir yazı istemek için
        getData();
      } else {
        //TODO: modaldaki yanlış bilme durumu
        //sunucudan yeni yazı
        getData();
      }
    } else if (button === "human") {
      if (!currentData.isAi) {
        //TODO: doğru bilme durumu
        //sunucudan yeni yazı
        getData();
      } else {
        //TODO: yanlış bilme durumu
        //sunucudan yeni yazı
        getData();
      }
    }
  }
  //uygulamaya ilk girdiğimizde yazı gözüksün
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-slate-900 w-screen">
      <div className="max-w-[1000px] justify-self-center flex-col h-screen text-white p-5">
        <div className="text-3xl font-bold mb-2 justify-self-center">
          Is the text AI generated?
        </div>
        <div className="p-4 border-1 bg-slate-800 text-lg border-dashed rounded-2xl mt-4">
          {currentData.text}
        </div>
        <div className="flex flex-col">
          <button
            onClick={() => checkText("ai")}
            className="w-full p-3 cursor-pointer text-lg hover:bg-blue-800 transition-colors mt-5 rounded-2xl bg-blue-600"
          >
            This text is written by AI. 🤖
          </button>
          <button
            onClick={() => checkText("human")}
            className="w-full p-3 cursor-pointer text-lg hover:bg-rose-800 transition-colors mt-5 rounded-2xl bg-rose-600"
          >
            This text is written by a human. 🙋‍♀️
          </button>
        </div>
        <div className="font-mono my-5 px-3 py-1 text-xl bg-slate-800 w-fit rounded-xl">
          Score will go here
        </div>
      </div>
    </div>
  );
}

export default App;
