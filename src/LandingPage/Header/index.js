import React, { useState } from "react";
import "../../index.css";

export default function Header() {
  return (
    <header>
      <div className="default-container w-full flex items-center justify-between px-4">
        <img src="/assets/barbearia-logo.png" className="w-24" />
        <button className="font-bold flex items-center border-2 rounded-full px-4 py-2 borda-dourada">
          <img src="/assets/moon.png" className="w-6 mr-2" />
          Dark
        </button>
      </div>
    </header>
  );
}
