import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Amigos Minerals | Industrial Minerals Supplier & Exporter',
  description:
    'Amigos Minerals offers sustainable mining operations, mineral processing, beneficiation, quality testing, bulk supply, and global export logistics for industrial and infrastructure needs.',

  keywords: [
    'Amigos Minerals',
    'industrial minerals supplier',
    'mining operations',
    'mineral processing',
    'beneficiation',
    'bulk mineral supply',
    'export logistics',
    'quality testing minerals',
    'India mineral exporter',
  ],

  openGraph: {
    title: 'Amigos Minerals | Industrial Minerals Supplier & Exporter',
    description:
      'Trusted supplier of high-grade industrial minerals with global logistics and sustainable operations.',
    url: 'https://amigosminerals.com',
    siteName: 'Amigos Minerals',
    images: [
      {
        url: '/assests/hero-banner-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Amigos Minerals',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Amigos Minerals | Industrial Minerals Supplier & Exporter',
    description:
      'Trusted supplier of high-grade industrial minerals with global logistics and sustainable operations.',
    images: ['/assests/hero-banner-2.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {' '}
        <ToastContainer position='top-right' autoClose={3000} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
