'use client'

import {useState} from 'react'
import LyricEditor from './lyric-editor'

export default function TextareaWrapper() {
    const [jpValue, setJpValue]= useState('')
    const [idValue, setIdValue]= useState('')
  return (
    <>
        <LyricEditor name='jp-editor' value={jpValue} onValueChange={(value: string)=> setJpValue(value)} numOfLines={1} placeholder='Enter original lyric here'/>
        <LyricEditor name='id-editor' value={idValue} onValueChange={(value: string)=> setIdValue(value)} numOfLines={1} placeholder='Enter translation lyric here'/>
    </>
  )
}
