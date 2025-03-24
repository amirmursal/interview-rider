import React from "react";

const CSSLayout = () => {
  return (
    <main>
      <header className="header">header</header>
      <div className="columns">
        <setion className="nav">Navigation</setion>
        <setion className="main">Main</setion>
        <setion className="aside">Sidebar</setion>
      </div>
      <footer className="footer"> footer</footer>
    </main>
  );
};

export default CSSLayout;
