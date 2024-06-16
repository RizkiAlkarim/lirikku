'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const genres = [
    {
        id: "folk",
        label: "Folk"
    },
    {
        id: "metal",
        label: "Metal"
    },
    {
        id: "pop",
        label: "Pop"
    },
    {
        id: "rnb",
        label: "RnB"
    },
    {
        id: "rock",
        label: "Rock"
    },
    {
        id: "other",
        label: "Other"
    }
  ] as const
  
const FormSchema = z.object({
    artist: z.string(),
    song: z.string(),
    coverImage: z.string(),
    genre: z.array(z.string()).refine((value)=> value.some((item)=> item), {
        message: "You have to select at least one item.",
    }),
    youtubeUrl: z.string(),
    spotifyUrl: z.string()
})

export default function InfoForm() {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          artist: '',
          song: '',
          coverImage: '',
          genre: [],
          youtubeUrl: '',
          spotifyUrl: '',
        }
      })
    
      function onSubmit(data: z.infer<typeof FormSchema>){
        console.log(data)
      }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
            <FormField 
            control={form.control}
            name='artist'
            render={({field})=> (
                <FormItem>
                <FormLabel className="text-xs">ARTIST</FormLabel>
                <FormControl>
                    <Input placeholder='artist name' {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
            control={form.control}
            name='song'
            render={({field})=> (
                <FormItem>
                <FormLabel className="text-xs">SONG</FormLabel>
                <FormControl>
                    <Input placeholder='song name' {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
            control={form.control}
            name='coverImage'
            render={({field})=> (
                <FormItem>
                <FormLabel className="text-xs">COVER IMAGE</FormLabel>
                <FormControl>
                    <Input placeholder='add the file link' {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="genre"
            render={() => (
                <FormItem>
                    <div className="mb-1">
                        <FormLabel className="text-xs">GENRE</FormLabel>
                    </div>
                    <div className='grid grid-cols-3 gap-1 w-fit'>
                        {genres.map((genre) => (
                            <FormField
                            key={genre.id}
                            control={form.control}
                            name="genre"
                            render={({ field }) => {
                                return (
                                <FormItem
                                    key={genre.id}
                                    className="flex flex-row items-start space-x-1 space-y-0"
                                >
                                    <FormControl>
                                    <Checkbox
                                        checked={field.value?.includes(genre.id)}
                                        onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, genre.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                (value) => value !== genre.id
                                                )
                                            )
                                        }}
                                    />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                    {genre.label}
                                    </FormLabel>
                                </FormItem>
                                )
                            }}
                            />
                        ))}
                    </div>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField 
                control={form.control}
                name='youtubeUrl'
                render={({field})=> (
                <FormItem>
                    <FormLabel className="text-xs">YOUTUBE URL</FormLabel>
                    <FormControl>
                        <Input placeholder='add the youtube url here' {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField 
                control={form.control}
                name='spotifyUrl'
                render={({field})=> (
                <FormItem>
                    <FormLabel className="text-xs">SPOTIFY URL</FormLabel>
                    <FormControl>
                        <Input placeholder='add the spotify url here' {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <Button type="submit">Save</Button>
        </form>
    </Form>
  )
}
