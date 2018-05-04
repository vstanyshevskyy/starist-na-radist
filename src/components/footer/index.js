import React from 'react';
import SocialLinks from '../social-links';
import "./index.less"
import LazyLoad from 'react-lazy-load';

const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const mapStyles = require("../../misc/map-styles.json");

const StyledMapWithAnInfoBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8991aZttpe7ZwK4sktjiQRIlvCnTZC90&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: props.center.lat, lng: props.center.lng }}
    defaultOptions={{ styles: mapStyles }}>
      <Marker position={{ lat: props.marker.lat, lng: props.marker.lng }} />
  </GoogleMap>
);

export default (props) => <footer className='footer' role='footer'>
  <div className='footer-map' id='map'>
    <LazyLoad threshold={400}>
      <StyledMapWithAnInfoBox
        center={{ lat: props.mapCenterLat, lng: props.mapCenterLng }}
        marker={{ lat: props.mapMarkerLat, lng: props.mapMarkerLng }} />
    </LazyLoad>
  </div>
  <div className='footer-contacts'>
    <div className='contact-form'>
      <h3>Напишіть нам</h3>
      <form>
        <input className='form-input form-input--required' type='text' placeholder='Ваше імя *' required='true' aria-label='Ваше імя' />
        <input className='form-input form-input--required' type='email' placeholder='E-mail *' required='true' aria-label='Ваша електронна адреса' />
        <input className='form-input' type='tel' placeholder='+38 0' aria-label='Ваш номер телефону' />
        <textarea className='form-input form-input--required form-input--textarea' placeholder='Ваше повідомлення *' required='true' ></textarea>
        <div className='submit-container'>
          <input className='btn btn--big btn--green' type='submit' value='Відправити повідомлення' />
        </div>
      </form>
    </div>
    <div className='footer-contacts-address'>
      <h3>Залишаймось на зв'язку</h3>
      <div className='footer-contacts-address__wrapper'>
        <div className='footer-contacts-address__type'>Адреса</div>
        <div className='footer-contacts-address__value'>{props.address}</div>
      </div>
      <div className='footer-contacts-address__wrapper'>
        <div className='footer-contacts-address__type'>Телефон</div>
        <div className='footer-contacts-address__value'>
          <a className='link__not-a-link' href={`tel:${props.telephone}`}>{props.telephone}</a>
        </div>
      </div>
      <div className='footer-contacts-address__wrapper'>
        <div className='footer-contacts-address__type'>Поштова скринька</div>
        <div className='footer-contacts-address__value'>
          <a className='link__not-a-link' href={`mailto:${props.email}`}>{props.email}</a>
        </div>
      </div>
    </div>
    <div className='footer-contacts-copyrights'>
      <div className='footer-contacts-copyrights__text'>
        {props.copyrightText}
        <br />
        Дизайн - 
        <br />
        Розробка - 
      </div>
      <div className='footer-contacts-copyrights__socials'>
        <SocialLinks linksType="monogrey" />
      </div>
    </div>
  </div>
</footer>
