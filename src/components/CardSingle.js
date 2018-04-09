import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

const Post = styled.li`
height: 50vh;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: black;
transition: all 0.4s;
a {
  transition: all 0.5s;
  color: rgba(255, 255, 255, 0);
  text-decoration: none;
}
&:after {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );
  transition: all 0.4s;
  opacity: 0;
}
&:hover {
  a {
    transition: all 0.5s;
    color: rgba(255, 255, 255, 100);
  }

  &:after {
    opacity: 1;
  }
}

`;

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 1rem .5rem 1rem;
  justify-self: space-between;
`;

const Date = styled.h3`
  margin: 0 1rem .5rem 1rem;
`;

const ReadingTime = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
`;

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  div {
    overflow: hidden;
  }
`;

const Data = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
`;


const CardSingle = (props) => {
  return (
    <Post>
      <Link to={`/${props.slug}/`}>
          <Img sizes={props.image.sizes} backgroundColor={'#eeeeee'} />
        <Data>
        <Title>{props.title}</Title>
        <Date>{props.date}</Date>
        <ReadingTime>Reading time: ~{props.readtime} min</ReadingTime>
        <Excerpt dangerouslySetInnerHTML={{ __html: props.excerpt.childMarkdownRemark.excerpt }}/>
        </Data>
      </Link>
    </Post>
  )
}

export default CardSingle
