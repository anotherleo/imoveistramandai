import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/TheRoof.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Roof | Tramandaí Imóveis</title>
        <meta property="og:site_name" content="Tramandaí Imóveis" />
        <meta property="og:title" content="The Roof | Tramandaí Imóveis" />
        <meta name="twitter:title" content="The Roof | Tramandaí Imóveis" />
        <meta name="description" content="Construindo seus sonhos perto do mar. Empreendimento de Alto Padrão na cidade de Tramandaí." />
        <meta property="og:description" content="Construindo seus sonhos perto do mar. Empreendimento de Alto Padrão na cidade de Tramandaí." />
        <meta name="twitter:description" content="Construindo seus sonhos perto do mar. Empreendimento de Alto Padrão na cidade de Tramandaí." />
        <meta name="twitter:image" content="" />
        <meta property="og:image" content="" />
        <meta property="og:image:type" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta property="og:url" content="http://www.imoveistramandai.com.br/theroof" />
        <meta name="twitter:site" content="http://www.imoveistramandai.com.br/theroof" />
        <meta name="twitter:card" content="summary" />

				<link rel="canonical" href="http://www.imoveistramandai.com.br/theroof" />
      </Head>

			<Header />
			<Link href="/">Home</Link>
			<Footer />
    </>
  )
}
