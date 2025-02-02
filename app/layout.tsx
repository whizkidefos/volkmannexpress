import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Chat } from "@/components/ui/chat";
import { Preloader } from "@/components/preloader";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Volkmann Express - Professional Technology Solutions',
  description: 'Volkmann Express provides innovative enterprise solutions including AI/ML, cloud solutions, cybersecurity, and digital transformation services.',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <div className="flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <Chat />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}