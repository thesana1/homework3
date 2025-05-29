import React from 'react';

export default function Footer({footerText = "© 2023 Chess Learning Center. All rights reserved."}) {
  return (
    <footer className="app-footer">
      <p>{footerText}</p>
    </footer>
  );
}