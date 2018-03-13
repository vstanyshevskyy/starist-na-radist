import React from 'react';
import "./index.less"
import { withPrefix } from 'gatsby-link';

class NewsSingle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const layout = this.props.layout || 'horizontal';
    const imageLayout = layout === 'horizontal' ? 'height' : 'width';
    return <div className={`news-single news-single--${layout} news-single--${this.props.color}`}>
      <div className={`news-single__image-container news-single__image-container--full-${imageLayout}`}
        style={{backgroundImage: `url(${withPrefix(this.props.data.img)})`}}>
        {/* <img className='news-single__thumbnail' src={withPrefix(this.props.data.img)} /> */}
      </div>
      <div className='news-single__info'>
        <h4 className='news-single__title'>{this.props.data.title}</h4>
        <div className='news-single__description'>{this.props.data.description}</div>
      </div>
    </div>
  }
}

export default NewsSingle