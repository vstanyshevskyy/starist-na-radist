import React from 'react';
import "./index.less"
import NewsSingle from '../news-single';
import { withPrefix } from 'gatsby-link';

const data = [{
  title: 'News 1',
  description: 'Some text',
  img: '/img/volunteers/ira_m.jpg'
},{
  title: 'News 2',
  description: 'Some text',
  img: '/img/volunteers/ira_m.jpg'
},{
  title: 'News 3',
  description: 'Some text',
  img: '/img/volunteers/ira_m.jpg'
},];
const colors = ['blue', 'orange'];

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='news'>
      <h3 className='news__title'>Останні новини</h3>
      <div className="news__inner-container">
        <div className='news__column news__column--first'>
          <NewsSingle data={data[0]} layout='vertical' color='green' />
        </div>
        <div className='news__column news__column--second'>
          {
            data.slice(1, 3).map((n, index) => <NewsSingle data={n} color={colors[index]} />)
          }
        </div>
      </div>
    </div>
  }
}

export default News