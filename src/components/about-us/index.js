import React from 'react';
import "./index.less"
import imgPath from "./img/about-us.jpg"

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='about-us'>
      <div className="about-us__image" style={{backgroundImage: `url(${imgPath})`}}>
      </div>
      <div className='about-us__content-wrapper'>
        <div className='about-us__content'>
          <h3>Про нас</h3>
          <h5>Наша місія</h5>
          <p>Благодійна неприбуткова організація "Старість НА радість" це група волонтерів, що робить все можливе риба тут і далі лорем іпсум, потім перепишем</p>
          <p>І ще трохи тексту тут і далі щоб май файно виглядало, а потім буде кнопка!</p>
          <a href='#' className="btn btn--orange">Детальніше про організацію</a>
        </div>
      </div>
    </div>
  }
}

export default AboutUs