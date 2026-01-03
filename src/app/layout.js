import './globals.css';
import { metadata } from '@/metadata';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';
export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="google-site-verification"
          content="Z4hozcIBBrLFjoeT038NmGotLZIkhtLRTMF8aJIAosQ"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
