import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "mendoza.dev | Porfolio",
  description: "Desarrollador fullstack Argentino con gran pasión en el sector IT.",
  alternates: {
    canonical: 'https://mendozanicolas.github.io/'
  },
  openGraph: {
    title: "mendoza.dev | Porfolio",
    image: 'https://mendozanicolas.github.io/projects/opengraph-image.png'
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Nicolas Mendoza",
  "jobTitle": "Tecnico en informatica personal y profesional",
  "url": "https://mendozanicolas.github.io/",
  "sameAs": [
    "https://www.linkedin.com/in/mendoza-nicolas/",
    "https://github.com/MendozaNicolas"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Municipalidad de Berisso"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
        {children}
        </body>
    </html>
  );
}
