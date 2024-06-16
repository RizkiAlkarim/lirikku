import React from 'react'

type Info = {
    artist: string;
    songName: string;
}

type Lyric = {
    original: string;
    translation: string;
}

type PreviewProps = {
    info: Info;
    lyric? : Array<Lyric>;
}

export default function Preview({info, lyric}: PreviewProps) {
  return (
    <>
        <div className='flex justify-center items-center mb-6'><span className='text-xl font-bold'>{`${info.artist} -  ${info.songName}`}</span></div>
            <div className='flex items-start gap-2 w-full'>
            <div className='text-gray-400 w-full'>
                {
                    lyric?.map(({original, translation})=> (
                        <>
                            <p className='text-black font-medium'>{original}</p>
                            <p>{translation}</p>
                        </>
                    ))
                }
            </div>
        </div>
    </>
  )
}
