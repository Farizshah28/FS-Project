import { Outfit } from "next/font/google";
import "./globals.css";
import ClientOnlyProvider from "@/context/ClientOnlyProvider";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";  

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "TechMart - Premium Electronics Store",
  description: "Your one-stop destination for premium electronics, gadgets, and tech accessories. Shop the latest smartphones, laptops, headphones, and more with fast delivery and excellent customer service.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
       <html lang="en">
        <body className={`${outfit.className} antialiased text-gray-700`} >
          <Toaster />
          <ClientOnlyProvider>
            {children}
          </ClientOnlyProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
