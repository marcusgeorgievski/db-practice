import AuthProvider from "./AuthProvider";
import Nav from "./Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          <main className="p-4">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
