import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LaunchPad - Build Something Amazing',
  description: 'The modern platform to launch your next big idea. Fast, scalable, and beautifully designed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
