import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 1em;
  font-size: 1.25em;
`

const NavigationItem = styled.li`
  margin: 0 1em;
  a {
    color: currentColor;
  }
`

export default () => (
  <nav role="navigation">
    <Navigation>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/blog/">Blog</Link>
      </NavigationItem>
    </Navigation>
  </nav>
)
