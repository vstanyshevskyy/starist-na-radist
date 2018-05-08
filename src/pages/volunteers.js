import "./less/volunteers.less"
import React from "react"
import graphql from 'graphql';
import { withPrefix } from 'gatsby-link'
import PageHeader from '../components/page-header'
import PersonsList from '../components/persons-list'

export default function HomePage ({
  data:
  { 
    VolunteersData: { edges: volunteersData },
    VolunteersSettings: { edges: [{ node: { frontmatter: volunteersSettings }}] }
  }
}) {
  const volunteers = volunteersData.map(v => ({html: v.node.html, ...v.node.frontmatter}));
  return (
  <div>
    <PageHeader
      image={volunteersSettings.headerImage}
      title={volunteersSettings.headerTitle} />
    <PersonsList list={volunteers} />
  </div>
  )
}

export const pageQuery = graphql`
query VolunteersQuery {
  VolunteersData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "volunteers"} }}){
    edges{
      node{
        html
        frontmatter {
          name
          path
          image
        }
      }
    }
  }
  VolunteersSettings: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "volunteers_settings"} }}){
    edges {
      node {
        frontmatter {
          headerTitle
          headerImage
          metaTitle
          metaKeywords
          metaDescription
        }
      }
    }
  }
}
`;

