import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

About.propTypes = {}

function About(props) {
  return (
    <>
      <Head>
        <title>Shopping | About</title>
        <meta name="keywords" content="shopping" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laboriosam voluptatem
          possimus libero commodi necessitatibus mollitia tempora voluptatibus saepe iusto,
          accusamus quos dolorum recusandae numquam veniam velit labore rem magni?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam laboriosam voluptatem
          possimus libero commodi necessitatibus mollitia tempora voluptatibus saepe iusto,
          accusamus quos dolorum recusandae numquam veniam velit labore rem magni?
        </p>
      </div>
    </>
  )
}

export default About
