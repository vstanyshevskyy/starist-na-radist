import React from 'react';
import Slider from 'react-slick'
import { withPrefix } from 'gatsby-link'
import "./index.less"

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const slides = [
  {
    img: '/img/1.jpg',
    caption: 'Танцерухова терепія в пансіонаті'
  },
  {
    img: '/img/2.jpg',
    caption: 'Пісенний заспів в пансіонаті'
  },
  {
    img: '/img/3.jpg',
    caption: 'Команда волонтерів молодці вообще ребята'
  },
]

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mobileNavVisible: false};
  }

  render() {
    return <Slider {...sliderSettings}>
    {
      slides.map(s => (
        <div>
          <div className="slide" style={{backgroundImage: `url(${withPrefix(s.img)}`}}>
            <div className="caption">
              <p className="title">{s.caption}</p>
              <p className="description">Lorem ipsum .....</p>
            </div>
          </div>
        </div>
      ))
    }
  </Slider>
  }
}

export default HomeSlider