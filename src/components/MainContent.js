// MainContent.js
import React from "react";
import Card from "./Card";
import Link from "next/link";

export default function MainContent() {
  return (
    <main style={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fefefe',
        minHeight: '100vh',
        padding: '20px',
        fontFamily: 'Bull Text, Helvetica, sans-serif', }}>
      <h2 style={{ textAlign: 'left', marginBottom: '20px', color: "black" }}>Energy Drinks</h2>
      <Link href="/alldrinks">
        <button style={{textAlign: 'center', marginBottom: '20px', color: "black", borderRadius: "10px", borderColor:"black", color:"white", backgroundColor:"black", width:"150px", height:"30px"}}>Tout voir</button>
      </Link>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          justifyContent: 'center',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Card href="/page1" imageSrc="/red-bull.png" title="Red Bull Classique" />
        <Card href="/page2" imageSrc="/summeredition.jpg" title="Red Bull Summer Edition" />
        <Card href="/page3" imageSrc="/winteredition.jpg" title="Red Bull Winter Edition" />
        <Card href="/page4" imageSrc="/sugarfree.png" title="Red Bull Sugar Free" />
      </div>
    </main>
  );
}
