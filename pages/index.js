import Head from 'next/head'
import Layouts, { siteTitle } from '../components/layouts'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layouts home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Austin is learn Next.js</p>
        <p>
          I hope that this website becomes a meaningfull web app{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layouts>
  )
}
