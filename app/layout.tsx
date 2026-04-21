import "./globals.css"
import { Inter, Roboto_Mono } from 'next/font/google'
import CursorGlow from '../components/CursorGlow'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export const metadata = {
  title: "Swayamsuchee Pradhan - CV | Software Engineer",
  description: "Portfolio of Swayamsuchee Pradhan, Software Engineer Intern.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-[#050505] text-slate-300 antialiased font-sans flex flex-col min-h-screen">
        <CursorGlow />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505]"></div>
        {children}
      </body>
    </html>
  )
}