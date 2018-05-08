import React from 'react';
import Person from "../person"
import Link from 'gatsby-link';
import "./index.less"

class PersonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <div className='persons-list'>
      <h3 className='persons_list__title'>{this.props.title}</h3>
      <div className='persons-list__list'>
        {
          this.props.list.slice(0, this.props.count).map(p => <Person {...p} />)
        }
      </div>
      <div className='persons_list__button-container'>
        <Link className='persons_list__see-all btn btn--orange btn--large' to='/volunteers'>{this.props.seeAllText}</Link>
      </div>
    </div>
  }
}

export default PersonsList