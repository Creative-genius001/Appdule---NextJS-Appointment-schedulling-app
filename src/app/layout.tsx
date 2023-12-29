import './globals.css'
import type { Metadata } from 'next'
import { Providers } from "@/app/store/provider";
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Toaster } from 'react-hot-toast';


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
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: '',
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          /> 
            <Providers>{children}</Providers>
          </div>
        </body>
      </html>
  )
}
