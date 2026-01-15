import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@runic-rpc/ui/styles';
import './globals.css';
import { DocsLayout } from '../components/DocsLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RunicRPC Documentation',
  description: 'Ancient reliability for modern Solana infrastructure',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}
