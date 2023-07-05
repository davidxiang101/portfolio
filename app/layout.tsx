import './globals.css'
import { Inter, Bowlby_One_SC } from 'next/font/google'
import LocalFont from "next/font/local";

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

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bowlby",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, bowlby.variable].join(" ")}>
      <body>{children}</body>
    </html>
  )
}
