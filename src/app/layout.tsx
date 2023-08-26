import './globals.css'
import RootStyleRegistry from './emotion';


  const title: string =  'MyFace Designer';
  const description: string = 'O amor em forma de extensão de cílios';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="pt-BR">
      <head >
        <title>{title}</title>
        <meta name="description" content={description} />

      </head>
      <body>
      <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
      </html>
  );
}
