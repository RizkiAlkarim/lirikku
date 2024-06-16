import Image from 'next/image'
import { Button } from '@/components/ui/button'
import listen from '@/assets/listen.svg'
import spotify from '@/assets/spotify.svg'
import youtube from '@/assets/youtube.svg'

export default function DetailAudio() {
  return (
    <div className='flex flex-col gap-2'>
    <div className='font-bold'>Video/audio</div>
    <div className='flex pl-6 gap-8 text-sm'>
        <Button variant='ghost'>
            <Image alt='listen-icon' src={listen} className='mr-2'></Image>
            listen
        </Button>
        <Button variant='ghost'>
            <Image alt='spotify-icon' src={spotify} className='mr-2'></Image>
            spotify
        </Button>
        <Button variant='ghost'>
            <Image alt='youtube-icon' src={youtube} className='mr-2'></Image>
            youtube
        </Button>
    </div>
</div>
  )
}
