import Navbar from "../components/Navbar"
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Mi tienda con Next.js - HomePage',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: "tienda, online, ecommerce"
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <header>
          <h1>Navbar</h1>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  )
}
