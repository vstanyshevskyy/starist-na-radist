import React from 'react';
import "./index.less"
import { withPrefix } from 'gatsby-link';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='person'>
      <div className='person__photo' style={{backgroundImage: `url(${withPrefix(this.props.info.photo)})`}}>
      </div>
      <div className='person__info'>
        <h5 className='person__name'>{this.props.info.name}</h5>
        <p className='person__description' dangerouslySetInnerHTML={{__html: this.props.info.description}}></p>
      </div>
    </div>
  }
}

export default Person