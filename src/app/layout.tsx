import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "@/app/store/provider";
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Appdule',
  description: 'Appointment schedulling application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">        
        <body className={inter.className}>
          <div className='main'>  
            <Providers>{children}</Providers>
          </div>
        </body>
      </html>
  )
}
