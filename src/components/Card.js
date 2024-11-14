import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ href, imageSrc, title }) {  
  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <div
        className="card"
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '16px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',  
          transition: 'transform 0.3s',
          cursor: 'pointer',
          width: '250px',
          textAlign: 'center',
          color: '#000',
          backgroundColor: '#fff',
        }}
      >
        <div
          className="image-container"
          style={{
            overflow: 'hidden',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        >
          <Image
            src={imageSrc}
            alt={title}
            width={250}
            height={150}
            style={{ transition: 'transform 0.3s ease' }}
            className="card-image"
          />
        </div>
        <h3 style={{ margin: '10px 0' }}>{title}</h3>
      </div>
    </Link>
  );
}
