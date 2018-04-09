import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  margin: 0 auto;
  width: ${props => props.theme.sizes.maxWidth};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  @media (max-width: 768px) {
    width: ${props => props.theme.sizes.maxWidthMobile};
  }
`;

const Container = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default Container
