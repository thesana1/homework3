import React from 'react';

export default function Header({Title = "Chess Learning Center"}) {
  return (
    <header className="app-header">
      <h1>{Title}</h1>
    </header>
  );
}