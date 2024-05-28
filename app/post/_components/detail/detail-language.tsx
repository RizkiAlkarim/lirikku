import React from 'react'
import Image from 'next/image'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import jp from '@/assets/jp.svg'
import id from '@/assets/id.svg'
import kanji from '@/assets/kanji.svg'
import furigana from '@/assets/furigana.svg'
import romaji from '@/assets/romaji.svg'

export default function DetailLanguage() {
  return (
    <div className='flex flex-col gap-2'>
                <div className='font-bold'>Language</div>
                <div className='flex flex-col gap-3 pl-6 text-sm'>
                    <ToggleGroup type='multiple' className=' justify-start gap-3'>
                        <ToggleGroupItem value='jp' className='font-light gap-2'>
                            <Image alt='jp-icon' src={jp}></Image>
                            JP
                        </ToggleGroupItem>
                        <ToggleGroupItem value='id' className='font-light gap-2'>
                            <Image alt='id-icon' src={id}></Image>
                            ID
                        </ToggleGroupItem>
                    </ToggleGroup>
                    <ToggleGroup type='multiple' className=' justify-start gap-3'>
                        <ToggleGroupItem value='kanji' className='font-light gap-2'>
                            <Image alt='kanji-icon' src={kanji}></Image>
                            kanji
                        </ToggleGroupItem>
                        <ToggleGroupItem value='furigana' className='font-light gap-2'>
                            <Image alt='furigana-icon' src={furigana}></Image>
                            furigana
                        </ToggleGroupItem>
                        <ToggleGroupItem value='romaji' className='font-light gap-2'>
                            <Image alt='romaji-icon' src={romaji}></Image>
                            romaji
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>
            </div>
  )
}
