import React from "react";

const Home = () => {
  return (
    <div className="panel home-page">
    <h1 key="home-header" className="flex-container">
      <span>T<span className="font-gold">S</span>T - Trafne Statystyki Tekstu</span>
    </h1>
    <p>Witaj na stronie aplikacji T<span className="font-gold">S</span>T. Jest to narzędzie, pozwalające na szczegółową analizę tekstu online. Oprócz popularnych statystyk, takich jak: liczba znaków, czy liczba słów w tekście, T<span className="font-gold">S</span>T oblicza wiele innych np. liczbę znaków interpunkcyjnych.</p>
    <p className="keyboard-only">Poza korzystaniem z menu, po aplikacji możesz nawigować za pomocą klawiatury (strzałki ↑/↓).</p>
    <p>Masz uwagi? Napisz do mnie. Kliknij w stopce moją wizytówkę.</p>
  </div>);
};

export default Home;
