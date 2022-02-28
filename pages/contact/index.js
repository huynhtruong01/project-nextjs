import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

Contact.propTypes = {}

function Contact(props) {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()

        console.log('fetch api', data)

        setUserList(data)
      } catch (error) {
        console.log('Error: ', error)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Shopping | Contact</title>
        <meta name="keywords" content="shopping" />
      </Head>
      <div className="contact">
        <h1>Contact</h1>
        <ul>
          {userList.length > 0
            ? userList.map((user) => (
                <Link href={`/contact/${user.id}`} key={user.id}>
                  {user.name}
                </Link>
              ))
            : ''}
        </ul>
      </div>
    </>
  )
}

export default Contact
