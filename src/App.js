import React from "react";
import twicelogo from "./twicelogo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <header className="App-header">
        <img src={twicelogo} className="App-logo" alt="logo" />
        <p>TWICE Album App</p>
        <a
          className="App-link"
          href="https://youtu.be/mH0_XpSHkZo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stream MORE & MORE
        </a>
      </header>
      <p className="names">
        NAYEON | JEONGYEON | MOMO | SANA | JIHYO
        <br />
        <t />
        MINA | DAHYUN | CHAEYOUNG | TZUYU
      </p>
    </div>
  );
}

export default App;
