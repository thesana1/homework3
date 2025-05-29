import React from 'react';

export default function Card({ title, description, imageUrl, bgColor = "#ffffff" }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}