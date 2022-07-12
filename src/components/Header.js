import React from 'react'

function Header() {
  return (
    <header className='w-full flex flex-col items-center justify-center'>
        <nav className='flex justify-start w-[80%] items-start py-4'>
            <p className='font-dm text-6xl'>w</p>
        </nav>
        <div className='flex flex-col space-y-6 md:space-y-0 md:flex-row md:shadow-bold justify-between items-center border border-type max-w-6xl'>
            <img src="./img/willy-ava-bw.png" alt="" className='w-screen md:w-full'/>
            <div className='text-left p-5 md:pl-12 space-y-4 md:space-y-6'>
                <h1 className='font-dm font=bold text-main text-6xl md:text-[6rem] leading-[3.5rem] md:leading-[5rem]'>Willy Fajar Ramadhan</h1>
                <div>
                    <p className='font-poppins font-bold text-xl md:text-2xl'>Frontend Developer</p>
                    <p className='font-poppins'>I basically build beautiful website 🙂</p>
                </div>
                <button className='bg-main px-4 py-2 md:px-8 md:py-4 hover:shadow-bold text-background text-md md:text-xl font-dm'><a href="https://wa.me/62895335731642" target='blank_'>Contact Me!</a></button>
            </div>
        </div>
    </header>
  )
}

export default Header