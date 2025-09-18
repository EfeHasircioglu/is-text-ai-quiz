import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const resp = await fetch("http://localhost:3000/prompt");
const { id, text, isAi } = await resp.json();
console.log(id, text, isAi); //! DEBUG
function App() {
  return <>{text.toString()}</>;
}

export default App;
