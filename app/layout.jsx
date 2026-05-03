import './globals.css';

export const metadata = {
  title: 'Ravindu Ashan | Associate Software Engineer',
  description:
    'Professional portfolio of K.G. Ravindu Ashan Dhananjaya — Associate Software Engineer and Full-Stack Developer from Sri Lanka with 1 year company experience building POS, e-commerce, LMS, inventory, distribution, medical-service, mobile and business systems.',
  keywords: [
    'Ravindu Ashan',
    'Associate Software Engineer',
    'Full Stack Developer',
    'Laravel Developer',
    'Next.js Developer',
    'C# Developer',
    'C++ Developer',
    'Sri Lanka Software Developer',
  ],
  openGraph: {
    title: 'Ravindu Ashan | Associate Software Engineer',
    description:
      'Full-stack portfolio with company experience, Laravel/Next.js projects, POS platforms, e-commerce systems, LMS, mobile apps, C#, C++ and real business workflows.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050816',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
