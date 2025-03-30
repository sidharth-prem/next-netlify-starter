import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sidharth Prem's Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hello! Myself Sidharth Prem" />
        <p className="description">
          You can find me under the clouds
        </p>
      </main>

      <Footer />
    </div>
  )
}
