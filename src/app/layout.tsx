import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashish Kapoor | Full-Stack Developer',
  description: 'Portfolio of Ashish Kapoor, a full-stack developer skilled in React, Tailwind CSS, Node.js, and MongoDB.',
  keywords: ['Ashish Kapoor', 'Full-Stack Developer', 'React', 'Node.js', 'MongoDB', 'Portfolio', 'TypeScript', 'Convex'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
