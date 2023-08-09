import './globals.css'
import type { Metadata } from 'next'
import RootStyleRegistry from './emotion';


  const title:String =  'MyFace Designer';
  const description:String = 'Embelezando o olhar...';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="pt-BR">
      <head >
        <title>{title}</title>

      </head>
      <body>
      <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
      </html>
  );
}
