import Header from '@/components/Header'

// children = page.tsx 리턴값
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
