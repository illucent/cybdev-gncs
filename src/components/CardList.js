import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  position: relative;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  .gatsby-image-outer-wrapper,
  .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
  margin: 0rem auto 6rem auto;
  max-width: 75vw;
  padding: 0px 1rem 1.45rem;
  position: relative;
`;

const CardList = (props) => {
  return (
    <Content>
      <List>
        {props.children}
      </List>
    </Content>
  )
}

export default CardList
