import { ReactNode } from 'react';
import { Metadata } from 'next';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Your App Name',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: Props) {
  return children;
}