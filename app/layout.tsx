import type { Metadata } from "next";
import '@/app/ui/styles/globals.scss'
import { rubik } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Bookmark landing page",
  description: "Landing page for a project called bookmark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased bg-[var(--clr-grey-50)]`}>
        {children}
      </body>
    </html>
  );
}
