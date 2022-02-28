import React from 'react'
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { userItem: data },
  }
}

function DetailPage({ userItem }) {
  return (
    <div>
      <h1>Detail page</h1>
      <h3>{userItem.name}</h3>
      <p>Email: {userItem.email}</p>
      <p>Phone: {userItem.phone}</p>
      <p>Website: {userItem.website}</p>
    </div>
  )
}

export default DetailPage
