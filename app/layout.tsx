import './globals.css'
import { Inter, Comfortaa, Anonymous_Pro } from 'next/font/google'

export const metadata = {
  title: 'David Xiang',
  description: 'Software Engineer | Student | Founder | Go-Kart Enthusiast',
  robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true
		},
	},
  icons: {
		shortcut: "/favicon.png",
	},
}

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const anonymous = Anonymous_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anonymous-pro",
})

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-comfortaa",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, anonymous.variable, comfortaa.variable].join(" ")}>
      <body>{children}</body>
    </html>
  )
}
