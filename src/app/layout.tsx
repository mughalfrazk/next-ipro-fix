// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

// import localFont from "next/font/local";
import "../styles/globals.css";
import { iproTheme } from "@/styles/ipro-theme";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <SessionProvider>
            <MantineProvider defaultColorScheme="light" theme={iproTheme}>
              {children}
            </MantineProvider>
          </SessionProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
