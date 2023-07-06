"use client"
import { ThemeProvider } from "next-themes"
import Script from "next/script"
import { ReactNode } from "react"
import * as gtag from "./gtag"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {children}
    </ThemeProvider>
  )
}
