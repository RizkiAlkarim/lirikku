import React from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function DetailHeader() {
  return (
    <div className='flex justify-between items-center font-bold'>
        <div className='cursor-pointer'>
            <ArrowRightIcon width='22' height='22'/>
        </div>
    <div>detail</div>
</div>
  )
}
