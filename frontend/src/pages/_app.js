import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import ThemeContextProvider from '../hooks/useTheme'

// Fontes self-hosted (compatível com output: 'export'), expostas como
// variáveis CSS que o globals.css usa em --font-display/--font-sans/--font-mono.
const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--ff-display',
  display: 'swap',
})
const body = Inter({
  subsets: ['latin'],
  variable: '--ff-body',
  display: 'swap',
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--ff-mono',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <div className={`${display.variable} ${body.variable} ${mono.variable} font-sans`}>
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </ThemeContextProvider>
  )
}
