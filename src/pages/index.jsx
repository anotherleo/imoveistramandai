import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tramandaí Imóveis | Empreendimentos em Tramandaí</title>
        <meta property="og:site_name" content="Tramandaí Imóveis" />
        <meta property="og:title" content="Tramandaí Imóveis | Empreendimentos em Tramandaí" />
        <meta name="twitter:title" content="Tramandaí Imóveis | Empreendimentos em Tramandaí" />
        <meta name="description" content="Os melhores empreendimentos imobiliários em Tramandaí você encontra aqui. Venha realizar seu sonho! Corretores online, atendimento personalizado e condições exclusivas!" />
        <meta property="og:description" content="Os melhores empreendimentos imobiliários em Tramandaí você encontra aqui. Venha realizar seu sonho! Corretores online, atendimento personalizado e condições exclusivas!" />
        <meta name="twitter:description" content="Os melhores empreendimentos imobiliários em Tramandaí você encontra aqui. Venha realizar seu sonho! Corretores online, atendimento personalizado e condições exclusivas!" />
        <meta name="twitter:image" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:type" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta property="og:url" content="http://www.imoveistramandai.com.br/" />
        <meta name="twitter:site" content="http://www.imoveistramandai.com.br/" />
        <meta name="twitter:card" content="summary" />

				<link rel="canonical" href="http://www.imoveistramandai.com.br" />
      </Head>

			<Header />
			<Link href="theroof">The Roof</Link>
			<Footer />
    </>
  )
}