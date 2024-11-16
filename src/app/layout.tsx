// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@/styles/datatable.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";

// import localFont from "next/font/local";
import "../styles/globals.css";
import { iproTheme, resolver } from "@/styles/ipro-theme";
import { Notifications } from "@mantine/notifications";

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
  title: "Ipro Fix",
  description: "Ipro Fix Web Application"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextTopLoader />
        <SessionProvider>
          <MantineProvider defaultColorScheme="auto" theme={iproTheme} cssVariablesResolver={resolver}>
            <Notifications />
            {children}
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
