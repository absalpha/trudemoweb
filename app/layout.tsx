import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import Header from "components/Header";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "The Robot Underground",
  description: "The Robot Underground",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white dark:bg-black min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
