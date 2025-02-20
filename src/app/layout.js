import './globals.css';
import { metadata } from '@/metadata';
import { CONFERENCE } from '@/conference';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeContext';
import InfoAlert from '@/components/InfoAlert';

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <Header themeToggle={<ThemeToggle />} />
          <main className="flex-grow">
            <InfoAlert text={CONFERENCE.infoText} />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
