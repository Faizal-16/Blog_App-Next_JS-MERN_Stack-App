import { Geist, Geist_Mono, Gillroy } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gillroy = Geist({
  variable: "--font-gillroy",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog App",
  description: "You can write your blog here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" crosspilot="">
      <body
        className={`${gillroy.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider>
          <AuthProvider>
            <div className="max-w-[1366px] min-h-screen mx-auto my-0 px-16 py-0 flex flex-col justify-between ">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
