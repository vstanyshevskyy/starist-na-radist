import React from 'react';
import Person from "../person"
import Link from 'gatsby-link';
import "./index.less"

class PersonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const volunteers = this.props.count
      ? this.props.list.slice(0, this.props.count)
      : this.props.list;
    return <div className='persons-list'>
      { this.props.title
        ? <h3 className='persons_list__title'>{this.props.title}</h3>
        : null }
      <div className='persons-list__list'>
        {
          volunteers.map(p => <Person {...p} />)
        }
      </div>
      { this.props.seeAllText
        ? <div className='persons_list__button-container'>
            <Link className='persons_list__see-all btn btn--orange btn--large' to='/volunteers'>{this.props.seeAllText}</Link>
          </div>
        : null }
    </div>
  }
}

export default PersonsList