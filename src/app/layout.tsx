import './globals.css'
import RootStyleRegistry from './emotion';
import {Metadata} from "next";

  const title: string =  'MyFace Designer';
  const description: string = 'O amor em forma de extensão de cílios';
  const url: string = 'http://myfacedesigner.com.br';
  const logo: string = 'http://myfacedesigner.com.br/opengraph-image.png';

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: title,
    description: description,

    openGraph: {
        title: title,
        description: description,
        url: url,
        siteName: 'MyFace Designer',
        images: [
            {
                url: logo,
                width: 800,
                height: 600,
            },
            {
                url: logo,
                width: 1800,
                height: 1200,
            }

        ],
        locale: 'pt_BR',
        type: 'website',

    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: [logo],
    } ,
}


export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="dark">
        <body>
        {children}
        </body>
        </html>
    );

}

