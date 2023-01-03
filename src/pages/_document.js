import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="robots" content="index, follow" />
				<meta name="keywords" content="casa, apartamentos, terrenos e imóveis comerciais em Tramandaí." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
