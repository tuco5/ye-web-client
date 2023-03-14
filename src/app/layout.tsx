import { WhatsappButton } from '@/components/atoms';
import { Inter } from '@next/font/google';
import { Navbar, Footer } from '../components/organisms';
import '../sass/global.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        <WhatsappButton phone="3330378059" />
        <Footer />
      </body>
    </html>
  );
}
