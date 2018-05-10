import React from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGoogle from 'react-icons/lib/fa/google';
import FaInstagram from 'react-icons/lib/fa/instagram';
import './index.less';

export default class SocialIcons extends React.Component {
  getIconComponent(iconData) {
    switch (iconData.type) {
    case 'Facebook':
      return <FaFacebook />;
    case 'Twitter':
      return <FaTwitter />;
    case 'Instagram':
      return <FaInstagram />;
    case 'Google':
      return <FaGoogle />;
    default:
      return null;
    }
  }
  render() {
    return (
      <ul className='social-icons'>
        {(this.props.icons).map(icon => (
          <li key={icon.type}>
            <a href={icon.url}>
              {this.getIconComponent(icon)}
            </a>
          </li>))}
      </ul>
    );
  }
}

