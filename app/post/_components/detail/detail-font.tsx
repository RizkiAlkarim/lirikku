import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'

export default function DetailFont() {
  return (
    <div className='flex flex-col gap-2'>
                <div className='font-bold'>Font</div>
                <div className='flex flex-col gap-3 pl-6 w-2/3 text-sm'>
                    <div className='grid grid-cols-2 items-center'>
                        <div>Typeface</div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder='select'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='sans-serif'>sans serif</SelectItem>
                                <SelectItem value='serif'>serif</SelectItem>
                                <SelectItem value='mono'>mono</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='grid grid-cols-2 items-center'>
                        <div>Size</div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder='select'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='small'>small</SelectItem>
                                <SelectItem value='medium'>medium</SelectItem>
                                <SelectItem value='big'>big</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
  )
}
