'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { SearchIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/shared/ui/common/form'
import { Input } from '@/shared/ui/common/input'

const FormSchema = z.object({
  search: z.string().trim(),
})

export const Search = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: '',
    },
  })

  function onSubmit(formData: z.infer<typeof FormSchema>) {
    console.log(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=''>
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem className='relative space-y-0'>
              <FormControl>
                <Input
                  placeholder='Search...'
                  autoComplete='off'
                  {...field}
                  className='flex h-10 w-full items-center rounded-full border-border bg-background pl-9 pr-4 text-base caret-accent outline-none focus:border-accent'
                />
              </FormControl>
              <SearchIcon className='absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground' />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
