import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Helmet from 'react-helmet'
import './index.less'

const TemplateWrapper = ({
  children, location, data:
  { 
    FooterData: { edges: [{ node: { frontmatter: footerData } }] },
    ContactsData: { edges: [{ node: { frontmatter: contactsData } }] },
    NavigationData: { edges: [{ node: { frontmatter: navbarData } }] }
  }
}) => (
  <div>
    <Helmet
      title="#старістьНАрадість"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]}
    />
    <div className="content">
      <Navbar {...navbarData}/>
      {children()}
    </div>
    <Footer {...footerData} socialLinks={navbarData.socialIcons} />
  </div>
);

export default TemplateWrapper;

export const pageQuery = graphql`
query LayoutData {
  FooterData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "footer_settings"} }}){
    edges{
     node{
       frontmatter{
        contentType
        copyrightText
       }
     }
    }
  },
  ContactsData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "contacts_settings"} }}){
    edges{
     node{
       frontmatter{
        address
        telephone
        email
        mapCenterLat
        mapCenterLng
        mapMarkerLat
        mapMarkerLng
      }
     }
    }
  },
  NavigationData: allMarkdownRemark(filter: { frontmatter:  { contentType: { eq: "navbar_settings"} }}){
    edges{
      node{
        frontmatter{
          links {
            text
            url
          }
          socialIcons {
            type
            url
          }
        }
      }
    }
  }
}
`;

