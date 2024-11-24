// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "mantine-datatable/styles.layer.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@/styles/datatable.css";

import { SessionProvider } from "next-auth/react";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import NextTopLoader from "nextjs-toploader";

// import localFont from "next/font/local";
import { iproTheme, resolver } from "@/styles/ipro-theme";
import { Notifications } from "@mantine/notifications";
import ErrorBoundary from "@/utils/error-boundary";
import Error from "./error";
import "../styles/globals.css";

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
          <MantineProvider
            defaultColorScheme="auto"
            theme={iproTheme}
            cssVariablesResolver={resolver}
          >
            <ErrorBoundary fallback={<Error />}>
              <Notifications />
              {children}
            </ErrorBoundary>
          </MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
