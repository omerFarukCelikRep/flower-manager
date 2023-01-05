import React from "react";
import "./contact.css";

import Map from "../../img/map.jpg";
import Flower from "../../img/flowe.jpeg";
import Flower1 from "../../img/flower-1.jpeg";
import Flower2 from "../../img/flower-2.jpeg";

export const Contact = () => {
  return (
    <>
      <div>
        <div className="map-part">
          <div className="map">
            <img src={Map} alt="" />
          </div>
          <div className="map-text">
            <div className="footer-contact text-light">
              <h1>İLETİŞİM</h1>
              <h5>
                Evliya Çelebi Mah. İstasyon Cad. Miraç Sk. No: 11 Tuzla /
                İSTANBUL-TURKEY
              </h5>
              <h5>+(90) 533-310-38-24</h5>
              <h5>flowermanager@gmail.com</h5>
            </div>
          </div>
        </div>
        {/* <!-- section social media start--> */}
        <section className="social-media-part">
          <div className="social-media">
            <div className="social-media-header">
              <h1>SOSYAL MEDYA</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                pretium nunc sit nulla etiam.
              </p>
            </div>
            <div className="social-media-links">
              <div className="social-media-link">
                <a href="#" className="link-text">Facebook</a>
              </div>

              <div className="social-media-link">
                <a href="#" className="link-text">Instagram</a>
              </div>
              <div className="social-media-link">
                <a href="#" className="link-text">Twitter</a>
              </div>
              <div className="social-media-link">
                <a href="#" className="link-text">Linkdin</a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- section social media end--> */}
        {/* <!-- yacht-part start --> */}
        <section className="yacht-part">
          <div className="yacht">
            <div className="yacht-2">
              <img src={Flower1} alt="" />
            </div>
            <div className="yacht-2">
              <img src={Flower2} alt="" />
            </div>
          </div>
        </section>
        {/* <!-- yacht-part end --> */}
        {/* <!-- contac-us start --> */}
        <section className="contac-us">
          <div className="contac-us-column">
            <div className="contac-us-header-texts">
              <h1>LÜTFEN DİLEK VE ÖNERİLERİNİZ İÇİN ULAŞIN</h1>
            </div>
            <div className="contac-us-row">
              <div className="contac-us-photo">
                <img src={Flower} alt="" />
              </div>
              <div className="contac-us-form">
                <div className="contac-inputs">
                  <label for="name">İsim *</label>
                  <input type="text" ad="name" />
                </div>
                <div className="contac-inputs">
                  <label for="surname">Soy İsim *</label>
                  <input type="text" ad="surname" />
                </div>
                <div className="contac-inputs ">
                  <label for="email">E-mail *</label>
                  <input type="email" ad="email" />
                </div>
                <div className="contac-inputs">
                  <label for="phone">phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}}"
                  />
                </div>
                <div className="contac-inputs-text">
                  <label for="mesaj">Mesajınız *</label>
                  <textarea ad="mesaj"></textarea>
                </div>
              </div>
            </div>
            <div className="send-box">
              <button className="send-button text-light">SEND</button>
            </div>
          </div>
        </section>
        {/*  contac-us end  */}
      </div>
    </>
  );
};
export default Contact;
