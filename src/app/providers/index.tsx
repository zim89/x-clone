import { ClerkProvider } from '@clerk/nextjs'
import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <ClerkProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
      >
        <QueryProvider> {children}</QueryProvider>
      </ThemeProvider>
    </ClerkProvider>
  )
}
