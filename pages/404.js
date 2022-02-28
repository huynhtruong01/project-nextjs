import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

NotFound.propTypes = {}

function NotFound(props) {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return (
    <>
      <Head>
        <title>Shopping | Not found</title>
        <meta name="keywords" content="shopping" />
      </Head>
      <div className="not-found">
        <h1>Opppppp...</h1>
        <h4>Page not found</h4>
        <p>
          Please return page home{' '}
          <Link href="/" passHref={true}>
            Home page
          </Link>
        </p>
      </div>
    </>
  )
}

export default NotFound
