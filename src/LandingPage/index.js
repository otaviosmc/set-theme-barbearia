import React, { useState } from "react";
import "./style.css";
export default function LandingPage() {
  const [tema, setTema] = useState(false);

  const alterarTema = () => {
    setTema(!tema);
  };
  return (
    <div className={tema ? "modo-escuro h-screen" : "modo-claro h-screen"}>
      <header>
        <div className="default-container w-full flex items-center justify-between px-4">
          <img src="/assets/barbearia-logo.png" className="w-24" />
          <button
            onClick={alterarTema}
            className="font-bold flex items-center border-2 rounded-full px-4 py-2 borda-dourada"
          >
            <img
              src={tema ? "/assets/sun.png" : "/assets/moon.png"}
              className="w-6 mr-2"
            />
            {tema ? "Light" : "Dark"}
          </button>
        </div>
      </header>
      <main>
        <section className="banner"></section>
        <div className="default-container text-center px-4">
          <h1 className="font-bold text-4xl py-8 md:py-14 md:text-5xl">
            Bem-vindo ao Barber Shop
          </h1>
          <h2 className="font-bold py-6">
            Nossa barbearia sempre oferece profissionais de qualidade e estamos
            prontos para lidar com suas maiores expectativas.
          </h2>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>
          <p className="text-5xl py-8 font-gv md:py-12">S.Kelly</p>
        </div>
      </main>
    </div>
  );
}
