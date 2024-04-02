import { ToastContainer } from 'react-toastify'
import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css'
import ThemeContextProvider from '@/hooks/useTheme';


export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeContextProvider>
    </>
  );
}
