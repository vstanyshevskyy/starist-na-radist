import React from 'react';
import "./index.less"
import { withPrefix } from 'gatsby-link';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='page-header' style={{backgroundImage: `url(${withPrefix(this.props.image)})`}}>
        <h2 className='page-header__title'>{this.props.title}</h2>
      </div>
  }
}

export default Person