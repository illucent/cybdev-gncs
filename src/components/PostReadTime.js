import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  @media (max-width: 768px) {
    max-width: ${props => props.theme.sizes.maxWidthCenteredMobile};
  }
`;

const Date = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`;

const PostReadTime = (props) => {
  return (
    <Wrapper>
      <Date><span>Reading time:</span> ~{props.timeToRead} min</Date>
    </Wrapper>
  )
}

export default PostReadTime
