import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//srxRApkQAPZrKGSUCQkK7Qtt

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-layout`}>
        <header>
          <Navigation />
        </header>
        <main className="min-h-screen px-6 mb-20 md:px-8">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
