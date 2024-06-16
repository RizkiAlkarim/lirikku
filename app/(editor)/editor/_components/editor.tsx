import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TextareaWrapper from './lyric-editor-wrapper'
import Preview from './preview'

export default function Editor() {
  return (
    <div className='flex justify-center w-full p-4'>
          <Tabs defaultValue='editor' className='w-full flex flex-col items-center'>
              <TabsList className='grid grid-cols-2 w-fit justify-self-center'>
                  <TabsTrigger value='editor'>Editor</TabsTrigger>
                  <TabsTrigger value='preview'>Preview</TabsTrigger>
              </TabsList>
              <TabsContent value='editor' className='w-full h-full p-4'>
                <div className='flex items-start gap-2 w-full'>
                  <TextareaWrapper />
                </div>
              </TabsContent>
              <TabsContent value='preview' className='w-full h-full p-4'>
                  <Preview info={{artist: "Artist", songName: "Song"}} />
              </TabsContent>
          </Tabs>
      </div>
  )
}
