import "./globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import SessionProvider from "@/app/api/auth/[...nextauth]/provider";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="flex flex-col">
            <div className="flex-grow">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
