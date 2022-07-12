import React from 'react'
import WorksItems from './WorksItems'
import worksData from '../worksData'

function Works() {
  
  const workElements = worksData.map(item => {
    return (
        <WorksItems 
            key={item.id}
            img={item.img}
            title={item.title}
            site={item.site}
        />
    )
  })
  
  return (
    <section className='mt-24 px-6 md:px-0 pb-12 flex justify-center w-full max-w-6xl'>
        <div className='flex flex-col justify-center items-center w-full space-y-6 md:space-y-12'>
            <div className='flex justify-between w-full text-left'>
                <h2 className='text-left font-poppins text-2xl md:text-4xl font-bold'>
                    My Works //
                </h2>
                <button className='hidden md:block font-poppins px-8 border border-main bg-background hover:bg-main text-main hover:text-background transition-all duration-200'><a href="http://github.com/wllyvx" target='blank_'>View All</a></button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-10'>
                {workElements}
            </div>
            <button className='block md:hidden font-poppins px-8 border border-main bg-background hover:bg-main text-main hover:text-background transition-all duration-200'><a href="http://github.com/wllyvx" target='blank_'>View All</a></button>
        </div>
    </section>
  )
}

export default Works