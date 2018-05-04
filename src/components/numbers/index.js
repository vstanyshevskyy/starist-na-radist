import React from 'react';
import "./index.less"

class Numbers extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return <div className='numbers'>
      <h3 className='numbers__title'>{this.props.title}</h3>
      <div className='numbers__full-width-container'>
        <div className='numbers__inner-container'>
          {
            this.props.blocks.map(n => <div className="numbers__number">
              <div className="numbers__value">{n.value}</div>
              <div className="numbers__description">{n.title}</div>
            </div>)
          }
        </div>
      </div>
    </div>
  }
}

export default Numbers