import './globals.css'
import RootStyleRegistry from './emotion';

  const title: string =  'MyFace Designer';
  const description: string = 'O amor em forma de extensão de cílios';
  const url: string = 'http://myfacedesigner.com.br';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="pt-BR">
      <head >
        <title>{title}</title>
        <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/logobackround.jpg" />
          <meta property="og:url" content={url} />

      </head>
      <body>
      <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
      </html>
  );
}
