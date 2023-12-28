import Navbar from '@components/navbar/Navbar';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
