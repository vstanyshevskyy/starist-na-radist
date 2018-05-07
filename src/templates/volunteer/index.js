import React from 'react';
import graphql from 'graphql';
import Link, { withPrefix } from 'gatsby-link';
import SocialLinks from '../../components/social-links'

import './index.less';

export default function Template ({ pathContext, data }) {
  const volunteer = {
    ...data.Volunteer.edges[0].node.frontmatter,
    text: data.Volunteer.edges[0].node.html,
    fb: 'fb',
    instagram: 'instagram',
  };
  return (
    <div className="volunteer">
      <div className='volunteer__photo'>
        <img src={withPrefix(volunteer.image)} />
      </div>
      <div className='volunteer__details'>
        <h2 className='volunteer__name'>{volunteer.name}</h2>
        <SocialLinks 
          facebookLink={volunteer.fb}
          instagramLink={volunteer.instagram}
          />
        <div className='volunteer__description' dangerouslySetInnerHTML={{__html: volunteer.text}}></div>
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
  }
`;
