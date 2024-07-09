import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/providers/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Timbu Cloud Shop",
  description: "A future store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <CartProvider>
            <NavBar/>
            {children}
            <Footer/>
          </CartProvider>
        </div>
        </body>
    </html>
  );
}
