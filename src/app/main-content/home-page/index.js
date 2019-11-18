import React from "react";

const Home = ()=>{
  return [
    <div key="home-description" className="panel">
    <h1 key="home-header" className="flex-container">TekStaT - statystyki textu</h1>
    <p>Witaj na stronie aplikacji TekStaT. Jest to narzędzie pozwalające na szczegółową analize tekstu online.
    Oprócz popularnych statystyk tekstu takich jak liczba znaków, najczęściej powtarzający się wyraz, liczba słow,
    TekStaT oblicza też wiele innych jak np. przybliżona liczba sylab.</p>
  <p className="keyboard-only">Oprócz korzystania ze standardowego menu, po aplikacji możesz również nawigować za pomocą klawiatury (strzałki ↑/↓)</p>
    </div>
  ];
};

export default Home;
