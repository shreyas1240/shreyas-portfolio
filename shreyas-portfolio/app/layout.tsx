import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreyas G. | Full-Stack Developer & Data Science',
  description: 'Portfolio of Shreyas G. — Full-stack development, data science and machine learning projects.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
