"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const energyDrinks = [
  { id: 1, name: "Red Bull Energy Drink", image: "/red-bull.png", backgroundColor: "#FFFFFF" },
  { id: 2, name: "Red Bull Sugarfree", image: "/sugarfree.png", backgroundColor: "#4E6D97" },
  { id: 3, name: "Red Bull Winter Edition", image: "/winteredition.jpg", backgroundColor: "#1E2A47" },
  { id: 4, name: "Red Bull Sea Blue Edition", image: "/seablue.png", color: "#0A3D58" },
  { id: 5, name: "Red Bull Blue Edition", image: "/blue.jpg", color: "#003F87" },
  { id: 6, name: "Red Bull White Edition", image: "/white.jpg", color: "#0770ff" },
  { id: 7, name: "Red Bull Red Edition", image: "/red.jpg", backgroundColor: "#D74E4E" },
  { id: 8, name: "Red Bull Green Edition", image: "/green.jpg", color: "#58B16D" },
  { id: 9, name: "Red Bull Apricot Edition", image: "/apricot.jpg", color: "#F1B04C" },
];

export default function MainContentDrinks() {
  const [selectedDrink, setSelectedDrink] = useState(0); 

  const handlePrev = () => {
    setSelectedDrink((prev) => (prev === 0 ? energyDrinks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedDrink((prev) => (prev === energyDrinks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ backgroundColor: "#e0e0e0", padding: "20px", minHeight: "100vh", }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2 style={{ fontFamily: "Helvetica, Arial, sans-serif", fontWeight: "bold", color: "black" }}>
          Toutes les Energy Drinks
        </h2>
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", height: '800px', flexWrap: "wrap"  }}>
        <button onClick={handlePrev} style={arrowStyles}>
          ←
        </button>

        <div className="card-container" style={{ display: "flex", overflow: "hidden" }}>
          {energyDrinks.map((drink, index) => (
            <div
              key={drink.id}
              className="card"
              style={{
                position: "relative",
                cursor: "pointer",
                width: "200px",
                margin: "0 10px",
                textAlign: "center",
                borderRadius: "16px",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                transform: index === selectedDrink ? "scale(1.1)" : "scale(1)",
                backgroundColor: drink.backgroundColor || drink.color,
                flex: "1 0 200px",
              }}
              onClick={() => setSelectedDrink(index)}
            >
              <div style={{ position: "relative", width: "100%", height: "150px", overflow: "hidden" }}>
                <Image
                  src={drink.image}
                  alt={drink.name}
                  width={200}
                  height={150}
                  objectFit="cover"
                  style={{ transition: "transform 0.3s ease" }}
                />
              </div>
              <h3 style={{ margin: "10px 0", fontWeight: "bold", color: "black", fontFamily: "Helvetica, Arial, sans-serif" }}>
                {drink.name}
              </h3>
            </div>
          ))}
        </div>

        <button onClick={handleNext} style={arrowStyles}>
          →
        </button>
      </div>
    </div>
  );
}

const arrowStyles = {
  padding: "10px",
  fontSize: "24px",
  backgroundColor: "transparent",
  border: "1px solid #ddd",
  borderRadius: "50%",
  cursor: "pointer",
  fontWeight: "bold",
  fontFamily: "Helvetica, Arial, sans-serif",
  color: "black", 
};
