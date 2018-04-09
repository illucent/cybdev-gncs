import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  height: 100%
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
