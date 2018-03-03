import React from 'react';

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const linkModifier = this.props.linksType || 'default';
    return <div className="social-links">
      <a href="https://www.facebook.com/pg/staristNAradist" className={`social-links__link social-links__link--facebook social-links__link--${linkModifier}`}>
        <i className="icon icon-facebook-with-circle"></i>
      </a>
      <a href="#" className={`social-links__link social-links__link--instagram social-links__link--${linkModifier}`}>
        <i className="icon icon-instagram-with-circle"></i>
      </a>
      <a href="https://www.youtube.com/channel/UCydvBI5YmJPtRv5yzsQmIdA" className={`social-links__link social-links__link--youtube social-links__link--${linkModifier}`}>
        <i className="icon icon-youtube-with-circle"></i>
      </a>
    </div>
  }
}

export default SocialLinks;
