import React from 'react'
import { RiCircleFill } from 'react-icons/ri'

const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center backdrop-blur-sm mix-blend-soft-light bg-slate-200'>
        <div className='animate-pulse'>
          <RiCircleFill size={60} color='#454545'/>
        </div>
    </div>
  )
}

export default Loading