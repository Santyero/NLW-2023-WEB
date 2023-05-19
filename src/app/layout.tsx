import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Space Traveling',
  description: 'Otimizando aplicações Next.js com NLW',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
