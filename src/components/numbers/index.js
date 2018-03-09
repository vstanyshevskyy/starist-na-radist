import React from 'react';
import "./index.less"

class Numbers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='numbers'>
      <h3 className='numbers__title'>Проект в цифрах</h3>
      <div className='numbers__full-width-container'>
        <div className='numbers__inner-container'>
          {
            this.props.numbers.map(n => <div className="numbers__number">
              <div className="numbers__value">{n.number}</div>
              <div className="numbers__description">{n.description}</div>
            </div>)
          }
        </div>
      </div>
    </div>
  }
}

export default Numbers