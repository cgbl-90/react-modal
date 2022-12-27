import React, { useState } from "react";
import carmen from "./carmen.svg";
import "./sass/App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" />
        <h3>.react | sass.</h3>
      </header>
      <main>
        <div
          className="modal"
          style={{
            display: showModal ? "block" : "none",
          }}
        >
          <button className="close" onClick={() => setShowModal(false)}>
            X
          </button>
          <p>MODAL TEXT</p>
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          SHOW MODAL
        </button>
      </main>
      <footer className="flex">
        <a
          href="https://github.com/cgbl-90"
          target="_blank"
          rel="noopener noreferrer"
        >
          .github.
        </a>
        <a href="https://t.me/cg_bl" target="_blank" rel="noopener noreferrer">
          .let's connect on telegram.
        </a>
      </footer>
    </div>
  );
}

export default App;
