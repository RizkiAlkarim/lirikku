import React from 'react'
import Image from 'next/image'

export default function DetailInfo() {
  return (
    <div className='flex flex-col gap-2'>
                <div className='font-bold text-'>Song Information</div>
                <div className='flex items-center pl-6 gap-6 text-sm'>
                    <div className='w-[72px] h-[72px] bg-slate-200'>
                        <Image src="" alt="cover" />
                    </div>
                    <div>
                        <p>
                            <span className='font-bold'>Song : </span>
                            <span>幸せ (Shiawase)</span>
                        </p>
                        <p>
                            <span className='font-bold'>Artist/Band : </span>
                            <span>BackNumber</span>
                        </p>
                        <p>
                            <span className='font-bold'>Release : </span>
                            <span>6 Maret 2011</span>
                        </p>
                    </div>
                </div>
            </div>
  )
}
