import React from 'react'

function WorksItems(props) {
  return (
    <div className='border border-type space-y-6 max-w-sm'>
        <img src={`./img/works/${props.img}`} alt="" />
        <div className='text-left px-4 pb-4 space-y-4'>
            <h3 className='font-poppins text-xl font-bold'>{props.title}</h3>
            <a href={`${props.site}`} target='blank_' className='font-poppins text-main underline decoration-2 decoration-main'>View live site</a>
        </div>
    </div>
  )
}

export default WorksItems