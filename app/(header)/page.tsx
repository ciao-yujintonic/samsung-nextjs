import { Metadata } from "next";

export const metaData: Metadata = {
  title: '페이지 이름 | 사이트 이름',
  description: '페이지 설명',
  // <meta property="og:xxx">
  openGraph: {
    type: 'website',
    title: '메인 페이지',
    description: '메인 페이지 설명',
    images: 'https://picsum.photos/1200/630',
    url: 'https://abc.com/', // 페이지 주소 O, 사이트 주소 X
    siteName: '사이트 이름'
  },
  twitter: {
    card: 'summary_large_image',
    title: '메인 페이지',
    description: '메인 페이지 설명',
    images: 'https://picsum.photos/1200/630',
    site: '사이트 이름'
  }
}

export default function Home() {
  return (
    <>
      <h1>Home Page!</h1>
    </>
  );
}
