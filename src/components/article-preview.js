import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Preview = styled.div``

const PreviewImage = styled.img``

const PreviewTitle = styled.h3`
  font-size: 1.5rem;
`

const PreviewPublishDate = styled.p`
  font-size: 0.75rem;
`

const PreviewContent = styled.p``

export default ({ article }) => (
  <Preview>
    <PreviewImage
      src={`${article.heroImage.file.url}?fit=scale&w=350&h=196`}
      alt=""
    />
    <PreviewTitle>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </PreviewTitle>
    <PreviewPublishDate>{article.publishDate}</PreviewPublishDate>
    <PreviewContent
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Preview>
)
