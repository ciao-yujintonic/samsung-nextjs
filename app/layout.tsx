import { Metadata } from 'next';
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-roboto'
})

// template으로 기본 title을 제공할 수 있다
export const metadata: Metadata = {
  title: {
    template: '%s | 사이트 이름',
    default: '사이트 이름'
  }
}

// children = page.tsx 리턴값
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
