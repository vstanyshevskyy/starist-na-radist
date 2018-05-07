import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Helmet from 'react-helmet'
import './index.less'

const TemplateWrapper = ({
  children, location, data:
  { 
    FooterData: { edges: [{ node: { frontmatter: footerData } }] },
    ContactsData: { edges: [{ node: { frontmatter: contactsData } }] }
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
      <Navbar {...contactsData}/>
      {children()}
    </div>
    <Footer {...footerData} {...contactsData} />
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
        facebook
        instagram
        youtube
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
  }
}
`;

