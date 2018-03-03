import React from 'react';
import "./index.less"
import SocialLinks from '../social-links';
import logo from "./img/logo.png"

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mobileNavVisible: false};

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav() {
    this.setState(prevState => ({
      mobileNavVisible: !prevState.mobileNavVisible
    }));
  }

  render() {
    return <nav className={`navbar ${this.state.mobileNavVisible ? 'navbar--mobile' : ''}`} role="navigation">
    <div className="navbar__wrapper">
      <button className='navbar__burger'
        onClick={this.toggleMobileNav}><i className="icon icon-menu"></i></button>
      <div className='navbar-body-overlay' onClick={this.toggleMobileNav}></div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item navbar__menu-item--close navbar__menu-item--mobile-only">
          <button className="btn--unstyled" onClick={this.toggleMobileNav}><i className='icon icon-cross' /></button>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link" href='#'>Про проект</a>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link" href='#'>Новини</a>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link" href='#'>Пансіонат</a>
        </li>
        <li className="navbar__menu-item">
          <a className="navbar__menu-link" href='#'>Спонсори</a>
        </li>
        <li className="navbar__menu-item navbar__menu-item--mobile-only">
          <a className="navbar__menu-link" href='#'>Контакти</a>
        </li>
        <li className="navbar__menu-item navbar__menu-item--social-links navbar__menu-item--mobile-only">
          <SocialLinks />
        </li>
      </ul>
      <a href='/' className='navbar__logo-container'>
        <img className='navbar__logo' src={logo} />
        <div>#старістьНАрадість</div>  
      </a>
      <div className="navbar__contacts">
        <div className="navbar__social-links">
          <SocialLinks />
        </div>
        <a className="btn btn--outline-blue" href='/contacts'>Зв'язатись</a>
      </div>
    </div>
  </nav>
  }
}

export default Navbar