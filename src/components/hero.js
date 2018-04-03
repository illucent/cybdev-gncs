import React from 'react'
import styled from 'styled-components'

const Hero = styled.div`
  position: relative;
  background: #000;
  color: #fff;
  text-align: center;
  height: 30em;
`

const HeroImage = styled.img`
  height: 100%;
  width: auto;
  margin: 0 auto;
`

const HeroDetails = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  top: 60%;
  left: 50%;
  transform: translate(-50%, 0);
`

const HeroHeadline = styled.h3`
  margin: 0;
`

const HeroTitle = styled.p`
  margin: 0;
  font-size: 1.125em;
  font-weight: bold;
`

const HeroBio = styled.p`
  margin: 0;
`

export default ({ person }) => (
  <Hero>
    <HeroImage
      src={`${person.node.image.file.url}?w=1180&h=600&fit=pad&bg=rgb:000000`}
      alt=""
    />
    <HeroDetails>
      <HeroHeadline>{person.node.name}</HeroHeadline>
      <HeroTitle>{person.node.title}</HeroTitle>
      <HeroBio>{person.node.shortBio.shortBio}</HeroBio>
    </HeroDetails>
  </Hero>
)
