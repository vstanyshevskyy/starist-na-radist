import React from 'react';

class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const linkModifier = this.props.linksType || 'default';
    return <div className="social-links">
      {
        this.props.facebookLink 
          ? <a href={this.props.facebookLink} className={`social-links__link social-links__link--facebook social-links__link--${linkModifier}`}>
            <i className="icon icon-facebook-with-circle"></i>
          </a>
        : null
      }
      {
        this.props.instagramLink
          ? <a href={this.props.instagramLink} className={`social-links__link social-links__link--instagram social-links__link--${linkModifier}`}>
            <i className="icon icon-instagram-with-circle"></i>
          </a>
        : null
      }
      {
        this.props.youtubeLink
          ? <a href={this.props.youtubeLink} className={`social-links__link social-links__link--youtube social-links__link--${linkModifier}`}>
            <i className="icon icon-youtube-with-circle"></i>
          </a>
        : null
      }
    </div>
  }
}

export default SocialLinks;
