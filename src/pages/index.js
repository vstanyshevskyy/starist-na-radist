import "./less/index.less"
import React from "react"
import graphql from 'graphql';
import { withPrefix } from 'gatsby-link'
import Slider from '../components/slider'
import AboutUs from '../components/about-us'
import PersonsList from '../components/persons-list'
import Numbers from '../components/numbers'
import News from '../components/news'

export default function HomePage ({
  data:
  { 
    NumbersData: { edges: [{ node: { frontmatter: numbersData } }] },
    VolunteersSettings: { edges: [{ node: { frontmatter: volunteersSettings }}] },
    VolunteersData: { edges: volunteersData },
  }
}) {
  const volunteers = volunteersData.map(v => ({html: v.node.html, ...v.node.frontmatter}));
  return (
  <div>
    <Slider />
    <News />
    <AboutUs />
    <PersonsList {...volunteersSettings} list={volunteers} />
    <Numbers {...numbersData} />
  </div>
  )
}

export const pageQuery = graphql`
query HomePageData {
  NumbersData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "numbers_settings"} }}){
    edges{
      node{
        frontmatter {
          title
          blocks {
            title
            value
          }
        } 
      }
    }
  }
  VolunteersSettings: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "volunteers_settings"} }}){
    edges{
      node{
        frontmatter {
          title: homepageTitle
          count: homepageCount
          seeAllText
        }
      }
    }
  }
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
}
`;

