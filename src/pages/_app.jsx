import '@/styles/variables.scss'
import '@/styles/globals.scss'
import '@/styles/nprogress.scss'
import nprogress from 'nprogress'
import Router from 'next/router'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@/contexts/auth'
import { ToastContainer } from 'react-toastify'

Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp
