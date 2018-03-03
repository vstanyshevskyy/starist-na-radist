import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Helmet from 'react-helmet'
import './index.less'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="#старістьНАрадість"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className="content"><Navbar />
      {children()}
    </div>
    <Footer />
  </div>
);

export default TemplateWrapper
