import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function SearchWrapper({onSearchClose, isSearchOpen}) {

  return (
    <div className={`w-full fixed h-screen bg-white top-0 z-20 max-h-[41rem] border-b border-[#333f48] ${isSearchOpen ? 'visible' : 'hidden'}`} >
      <div className='max-w-[62.25rem] mx-auto py-14 px-5 sm:px-14'>
        <div className='text-center flex flex-col gap-6'>
          <input  type='text' placeholder="I'm looking for..." className='border-b border-[#c6a992] w-full text-center pb-4 text-2xl font-thin'/>
          <div className='text-sm flex justify-center gap-1'>
            <span className='text-[#989ea3]'>Search by brand, product type, product name, or ingredient.</span>
            <span className='underline'>Clear</span>
          </div>
        </div>

        {/* Results Container */}
        <div className='mt-24'>
          {/* Most Popular Searches */}
          <div className='text-center text-sm'>
            <span className='font-bold'>Most Popular Searches</span>
            <ul className='flex flex-col gap-3 mt-8'>
              <li>Heyday Valentine's Day Set</li>
              <li>White Tea Antioxidant Mask</li>
              <li>Sea Berry Balancing Facial Oil</li>
              <li>Glycolic Glow Treatment</li>
            </ul>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className='absolute top-8 right-8'>
        <XMarkIcon className='h-8 w-8 cursor-pointer' onClick={onSearchClose}/>
      </div>
    </div>
  )
}
