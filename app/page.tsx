import { Poppins } from '@next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400','700'] 
})

export default function Home() {
  return (
    <main className='bg-background text-main'>
      <Header />
      <Featured />
    </main>
  )
}
