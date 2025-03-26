import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import CustomCursor from "./components/CustomCursor"
import { ThemeProvider } from "./components/theme-provider"

const aftika = localFont({
  src: [
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-extrabold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../common/fonts/Fontspring-DEMO-aftika-extralight.otf",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-aftika",
})

export const metadata: Metadata = {
  title: "Altuum | Agencia de Marketing Digital",
  description:
    "Potencia tu presencia digital con Altuum. Especialistas en marketing digital, SEO, redes sociales y publicidad online en España.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${aftika.variable} antialiased bg-gradient-to-b from-black to-gray-900 text-white min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

