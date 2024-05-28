import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from './ui/dropdown-menu'

export default function Navbar() {
  return (
    <div className='px-16 py-6 border-b border-black'>
        <div className='flex justify-between items-center'>
        <div><span className=' font-light text-2xl'><a href="/">Lirikku</a></span></div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1'>
                <form action="submit">
                    <input className='text-sm bg-slate-200 px-4 py-2 outline-none' id='search' type="text" placeholder='search' />
                </form>
            </div>
            <div className='w-10 h-10 rounded-full bg-slate-200'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className='cursor-pointer'>
                            <AvatarImage src='' alt='user-avatar' />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-48'>
                        <DropdownMenuLabel>Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Setting</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem className='text-red-500 hover:font-bold'>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
        </div>
    </div>
  )
}
