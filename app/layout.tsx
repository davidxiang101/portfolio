import './globals.css'
import { Inter, Source_Code_Pro } from 'next/font/google'
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

const bowlby = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-scp",
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
