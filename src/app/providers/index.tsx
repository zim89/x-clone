import { ClerkProvider } from '@clerk/nextjs'
import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
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
