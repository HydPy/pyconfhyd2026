import { Belanosima, Bungee } from 'next/font/google';
import './globals.css';
import { metadata } from '@/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';
export { metadata };

const belanosima = Belanosima({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-belanosima',
});

const bungee = Bungee({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bungee',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="Z4hozcIBBrLFjoeT038NmGotLZIkhtLRTMF8aJIAosQ"
        />
      </head>
      <body suppressHydrationWarning className={`flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 ${belanosima.variable} ${bungee.variable}`}>
        <ThemeProvider>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow pt-36 sm:pt-32">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
