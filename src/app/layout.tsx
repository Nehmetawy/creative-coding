import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/assets/css/global.css';
import '@/assets/css/tailwind.theme.css';
import '@/assets/css/radix-ui.css';

export const metadata: Metadata = {
  title: 'Creative Coding',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Theme scaling="100%" className="min-h-0 p-0">
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
