import "./globals.css";

export const metadata = {
  title: "mendoza.dev | Porfolio",
  description: "Desarrollador fullstack Argentino con gran pasión en el sector IT.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
