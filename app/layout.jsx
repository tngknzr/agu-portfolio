import Navbar from '@components/navbar/Navbar';
import { Public_Sans } from 'next/font/google';

const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  title: 'Agustin Paredes',
  description:
    "Welcome to my website! I'elcome to my website! I'm Agustin Paredes, a passionate new web developer eager to contribute my skills and creativity to your team. Explore my portfolio and let's connect!m Agustin Paredes, a passionate new web developer eager to contribute my skills and creativity to your team. Explore my portfolio and let's connect!",
};

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
