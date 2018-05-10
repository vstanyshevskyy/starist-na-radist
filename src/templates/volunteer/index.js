import React from 'react';
import graphql from 'graphql';
import Link, { withPrefix } from 'gatsby-link';
import PageHeader from '../../components/page-header'
import SocialLinks from '../../components/social-links'

import './index.less';

export default function Template ({ pathContext, data: {
    VolunteersSettings: { edges: [{ node: { frontmatter: volunteersSettings }}] },
    Volunteer: { edges: volunteersData },
}}) {
  const volunteer = {
    ...volunteersData[0].node.frontmatter,
    text: volunteersData[0].node.html,
    fb: 'fb',
    instagram: 'instagram',
  };
  return (
    <div className="wrapper">
      <PageHeader 
        image={volunteersSettings.headerImage}
        title={volunteersSettings.headerTitle} />
      <div className="volunteer">
        
        <div className='volunteer__photo'>
          <img src={withPrefix(volunteer.image)} />
        </div>
        <div className='volunteer__details'>
          <h2 className='volunteer__name'>{volunteer.name}</h2>
          <div className='volunteer__description' dangerouslySetInnerHTML={{__html: volunteer.text}}></div>
          <p>{volunteer.name} в соціальних мережах:</p>
          <SocialLinks
            icons={[
              {Facebook: volunteer.fb},
              {Instagram: volunteer.instagram},
            ]}
            />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query Volunteer($slug: String) {
    Volunteer: allMarkdownRemark(filter: { 
      frontmatter:  {
        contentType: { eq: "volunteers" },
        path: { eq: $slug }
      }
    }){
      edges {
        node {
        html
          frontmatter {
            name
            path
            subtitle
            image
            instagram
            facebook
            metaTitle
            metaKeywords
            metaDescription
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
          }
        }
      }
    }
  }
`;
