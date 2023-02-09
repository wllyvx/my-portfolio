import Image from 'next/image'
import { Poppins } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400','700'] 
})

export default function Home() {
  return (
    <main className='bg-background text-main'>
      <Header />
    </main>
  )
}
