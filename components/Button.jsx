import React, { Fragment } from 'react'

const Button = ({variation = 'primary', size = 'small', children, widthContent, rounded, disabled, ...props}) => {
    const sizes = {
        small: 'py-1 px-2',
        medium: 'py-1 px-9 body-medium',
        large: 'py-3 px-8',
    }

    const variations = {
        "primary": 'justify-center bg-[#292929] text-[#F6F6F6] text-[8px] md:text-xs font-bold capitalize tracking-[0.5px] md:tracking-[0.24px]',
        secondary: 'justify-center bg-gray-200 text-primary-dark-blue',
        'secondary-errored': 'justify-center bg-error-600 bg-opacity-30 text-error-600',
        outline: 'justify-center bg-white border border-primary text-primary',
        light: 'justify-center bg-white bg-opacity-5 border border-text-primary border-opacity-60 text-primary-main rounded',
        errored: 'bg-white border border-error-600 text-error-600 ',
        profile: 'bg-[#F59E0B0D] border border-[#F59E0B] text-[#F59E0B] rounded-lg',
        pending: 'justify-center bg-[#FBF2CB] text-[#FBBC55]',
        green: 'justify-center bg-[#59D23840] text-[#59D238]',
        "large": 'justify-center bg-[#292929] text-[#F6F6F6] text-sm md:text-xl font-bold capitalize tracking-[0.5px] md:tracking-[0.24px]',
    }

  return (
    <button
      className={`flex items-center space-x-3 transition-all ${disabled? 'cursor-not-allowed': 'cursor-pointer'} ${sizes[size]} ${widthContent ? 'w-max' : 'w-full'} ${variations[variation]} ${rounded ? 'rounded-[4px]' : ''}`}
      {...props}
      type={props.onClick ? 'button' : 'submit'}
      disabled={disabled}
    >
        <span className='whitespace-nowrap'>{children}</span>
    </button>
  )
}

export default Button