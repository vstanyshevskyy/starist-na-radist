import React from 'react';
import "./index.less"
import Link from 'gatsby-link';
import { withPrefix } from 'gatsby-link';

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='person'>
      <div className='person__photo' style={{backgroundImage: `url(${withPrefix(this.props.image)})`}}>
      </div>
      <div className='person__info'>
        <h5 className='person__name'>
          <Link className='person__link' to={`/volunteers/${this.props.path}`}>{this.props.name}</Link>
        </h5>
        <p className='person__description' dangerouslySetInnerHTML={{__html: this.props.html}}></p>
      </div>
    </div>
  }
}

export default Person