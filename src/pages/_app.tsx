import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${display.variable} font-sans antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}