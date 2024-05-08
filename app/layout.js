import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apple Clone",
  description: "Iphone 15 Pro Clone with NextJS",
  icons: {
    icon: [
      {
        url: '/assets/images/apple-dark.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/assets/images/apple.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
