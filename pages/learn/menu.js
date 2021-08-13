import Head from 'next/head'
import Link from 'next/link'
import MainStyle from '../../components/layouts'

export default function FirstLearn() {
    return (
    <>
    <MainStyle> 
    <Head>
        <title>Box Counter</title>
    </Head>
    
    <h1 > Learning even way more stuff maybe </h1> 
    
    <h2 className="title">
    Read{' '}
    
    <Link href="/learn/first-learn">
      <a>First learn page please!</a>
    </Link>
  </h2>
  </MainStyle>
    </>
    
    )
  }



// Normal HTML
/*  git commit --amend --reset-author
<h1 className="title">
Learn <a href="https://nextjs.org">Next.js!</a>
</h1>
*/

