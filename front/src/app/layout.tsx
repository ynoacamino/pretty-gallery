import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Love',
  description: 'Galleria de imagenes entre tu y yo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased bg-gradient-to-b from-teal-400 to-gray-800"
      >
        {children}
      </body>
    </html>
  );
}
