import './globals.css'
import { Inter } from 'next/font/google'
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

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
