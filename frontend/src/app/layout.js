// src/app/layout.js
import './globals.css'; // Ensure the path is correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
