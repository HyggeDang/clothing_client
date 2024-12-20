import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "H2CL - Store Auth",
  description: "Next.js 14 H2CL Ecommerce store",
=======
  title: "H2CL Clothing - Admin Auth",
  description: "Admin dashboard to manage H2CL's data",
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
<<<<<<< HEAD
      <html lang="en" suppressHydrationWarning={true}>
=======
      <html lang="en">
>>>>>>> 2c1a2c848278c797693461797c9ba2650834301a
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
