import React from 'react';
import Person from "../person"
import "./index.less"

class PersonsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='persons-list'>
      <h3 className='persons_list__title'>Команда волонтерів</h3>
      <div className='persons-list__list'>
        {
          this.props.list.map(p => <Person info={p} />)
        }
      </div>
    </div>
  }
}

export default PersonsList