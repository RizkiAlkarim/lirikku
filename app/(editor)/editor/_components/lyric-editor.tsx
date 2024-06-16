'use client'

import {useMemo, useRef} from 'react'
import { Textarea } from '@/components/ui/textarea'

type TextAreaProps = {
    value: string;
    numOfLines: number;
    onValueChange: (value: string) => void;
    placeholder: string;
    name: string;
}

export default function LyricEditor({value, numOfLines, onValueChange, placeholder, name}: TextAreaProps) {
    const lineCount = useMemo(()=> value.split('\n').length, [value])
    const linesArr = useMemo(
        () =>
            Array.from({length: Math.max(numOfLines, lineCount)}, (_, i) => i + 1),
        [lineCount, numOfLines]
    )

    const lineCounterRef = useRef<HTMLDivElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleTextareaChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        onValueChange(event.target.value)
    }

    const handleTextareaScroll = () => {
        if (lineCounterRef.current && textareaRef.current){
            lineCounterRef.current.scrollTop = textareaRef.current.scrollTop
        }
    }
  return (
    <div className='flex w-full'>
        <div className='p-1.5 text-gray-400' ref={lineCounterRef}>
            {
                linesArr.map((count)=> (
                    <div key={count} className={`${count <= lineCount ? "text-black" : 'text-gray-400'}`}>{count}</div>
                ))
            }
        </div>
        <Textarea className={` outline-none resize-none border-none placeholder:text-gray-400 p-1.5 text-gray-400 w-full text-base`} name={name} onChange={handleTextareaChange} onScroll={handleTextareaScroll} placeholder={placeholder} value={value} ref={textareaRef}/>
    </div>
  )
}
