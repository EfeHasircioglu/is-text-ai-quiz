import { useState } from "react";

export default function Modal({ toggleModal, isCorrect }) {
  /* closeModal fonksiyonu ve isCorrect durumu olacak */
  return (
    <div className="text-lg w-full py-10 text-center flex flex-col gap-3 bg-slate-900 ">
      <div>
        {isCorrect
          ? "✔️ Congratulations! You are right."
          : "❌ Your answer is wrong, better luck next time!"}
      </div>
      <button
        className="w-full
    justify-self-center p-2 cursor-pointer bg-blue-600 hover:bg-blue-800 transition-colors text-white rounded-xl"
        onClick={() => toggleModal()}
      >
        Continue
      </button>
    </div>
  );
}
