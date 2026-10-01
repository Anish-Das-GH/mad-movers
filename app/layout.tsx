import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Mad Movers | Multi-Branch Dance School & Activity Centre',
  description: 'Work Like a Mad to Make Yourself Glad. Eastern India\'s premier dance academy and multi-branch activity centre. Urban dance, contemporary, kathak, yoga, and mind sports across our state-of-the-art studios.',
  openGraph: {
    title: 'Mad Movers | Multi-Branch Dance School & Activity Centre',
    description: 'Work Like a Mad to Make Yourself Glad. Premier dance training, masterclasses, yoga, and youth activity centre.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mad Movers | Dance School & Activity Centre',
    description: 'Work Like a Mad to Make Yourself Glad. Multi-branch dance school and activity centre.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
