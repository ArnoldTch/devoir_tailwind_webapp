import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header style={{ display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                borderBottom: '1px solid #ddd',
                backgroundImage: 'url(/jeremiah.jpg)',
                backgroundSize: 'cover',      
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: 'auto' }}>
      <a href="/">
        <Image src="/redbull-logo.svg" alt="Logo" width={50} height={50} style={{ cursor: 'pointer' }} />
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', color: "#ffffff", padding: "10px 20px", borderRadius: "16px", backgroundColor: "#1a1a1a", border: "1px solid #ddd", margin: "0 auto",}}>
        <div className="dropdown" style={{ position: 'relative' }}>
          <label className="dropdown-label" style={{ cursor: 'pointer' }}>Energy Drinks</label>
          <div className="dropdown-content">
            <p>Toutes les Red Bull Energy Drinks</p>
            <p>Red Bull Energy Drink</p>
            <p>Red Bull Energy Sugarfree</p>
            <p>Red Bull Edition</p>
          </div>
        </div>

        <label>Événements</label>
        <label>Athlètes</label>

        {/* Deuxième liste déroulante */}
        <div className="dropdown" style={{ position: 'relative' }}>
          <label className="dropdown-label" style={{ cursor: 'pointer' }}>Red Bull TV</label>
          <div className="dropdown-content">
            <p>Découvrez</p>
            <p>Direct</p>
            <p>Films</p>
            <p>Séries</p>
            <p>Clips</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
