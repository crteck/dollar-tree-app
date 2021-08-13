import Head from 'next/head'
import Layouts, { siteTitle } from '../components/layouts'
import utilStyles from '../styles/utils.module.css'
import appTheme from '../styles/theme.module.css'
const transLate = require('tesseract.js');

transLate.recognize('./pic.png', 'eng', {logger: e => console.log(e) })
.then(out => console.log(out.data.text))
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
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <form className={appTheme.backgroundcolor}>  
        <h1>Insert Box</h1>
        <label>
        Box Tag
        <br></br>
        <input type="file" name="decoder"></input>
        </label>
        <br></br> 
      </form>
      
      

    </Layouts>
  )
}
