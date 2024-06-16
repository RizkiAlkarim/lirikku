'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const items = [
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
    items: z.array(z.string()).refine((value)=> value.some((item)=> item), {
        message: "You have to select at least one item.",
    })
})

export default function GenreForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: ['folk', 'metal']
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>){
        console.log({
            title: "You submitted the following values:",
            description: data
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="items"
                render={() => (
                    <FormItem>
                        <div className="mb-1">
                            <FormLabel className="text-xs">GENRE</FormLabel>
                        </div>
                        <div className='grid grid-cols-3 gap-1 w-fit'>
                            {items.map((item) => (
                                <FormField
                                key={item.id}
                                control={form.control}
                                name="items"
                                render={({ field }) => {
                                    return (
                                    <FormItem
                                        key={item.id}
                                        className="flex flex-row items-start space-x-1 space-y-0"
                                    >
                                        <FormControl>
                                        <Checkbox
                                            checked={field.value?.includes(item.id)}
                                            onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([...field.value, item.id])
                                                : field.onChange(
                                                    field.value?.filter(
                                                    (value) => value !== item.id
                                                    )
                                                )
                                            }}
                                        />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                        {item.label}
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
                {/* <Button type="submit">Submit</Button> */}
            </form>
        </Form>
    )
}
