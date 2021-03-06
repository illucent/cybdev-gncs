import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import CardList from '../components/CardList'
import CardListSingle from '../components/CardListSingle'
import Card from '../components/Card'
import CardSingle from '../components/CardSingle'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'

const Index = ({data}) =>  {

  const posts = data.allContentfulPost.edges;

  return (
    <Container>
      <PageTitle small>
        <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, <a href="https://www.contentful.com/" target="_blank">Contentful</a> and <a href="https://www.netlify.com/" target="_blank">Netlify</a> <span>🎉</span>
      </PageTitle>
      <CardListSingle>
        <CardSingle
        key={posts[0].node.id}
        slug={posts[0].node.slug}
        image={posts[0].node.heroImage}
        title={posts[0].node.title}
        date={posts[0].node.publishDate}
        excerpt={posts[0].node.body}
        readtime={posts[0].node.body.childMarkdownRemark.timeToRead}
        />
      </CardListSingle>
      <CardList>
        {posts.slice(1).map(({ node: post })=> (
          <Card
           key={post.id}
           slug={post.slug}
           image={post.heroImage}
           title={post.title}
           date={post.publishDate}
           excerpt={post.body}
           readtime={post.body.childMarkdownRemark.timeToRead}
          />
        ))}
      </CardList>
    </Container>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              timeToRead
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default Index
