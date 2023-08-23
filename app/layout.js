import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Prince's Blog",
  description: 'Created by Prince',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
