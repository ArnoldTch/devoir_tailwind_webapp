import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header style={{ display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                borderBottom: '1px solid #ddd',   
                flexDirection: 'column',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
                height: '800px' }}>
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40px',
        color: '#333',
        textAlign: 'center',
        fontFamily: 'Helvetica, Arial, sans-serif',
      }}>

        <Image src="/red-bull.png" alt="Redbull" width={500} height={300} style={{ marginBottom: '20px', objectFit: 'cover', borderRadius: '8px' }} />
        

        <h1 style={{
          fontSize: '36px', 
          fontWeight: 'bold', 
          color: 'black', // Red color for the text
          margin: '0',
        }}>
          Redbull donne des aiiiiles
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'center' }}>
            <button style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#d74444',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '150px',
            }}>
                Produits
            </button>
            
            <button style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#fff', 
                color: '#333',
                border: '1px solid #ddd',
                borderRadius: '16px',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '150px',
            }}>
                Société
            </button>
        </div>

      </div>
    </header>
  );
}
