import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, Clock3, Heart, Leaf, Sparkles } from "lucide-react";

const services = [
  { name: "Deep tissue", duration: "60 min", price: "R500.00" },
  { name: "Deep tissue", duration: "90 min", price: "R650.00" },
  { name: "Back, Neck and Shoulders", duration: "45 min", price: "R250.00" },
  { name: "Back, Neck and Shoulders", duration: "30 min", price: "R200.00" },
  { name: "Swedish", duration: "30 min", price: "R350.00" },
  { name: "Swedish", duration: "90 min", price: "R600.00" },
  { name: "Prenatal", duration: "30 min", price: "R400.00" },
  { name: "Prenatal", duration: "90 min", price: "R750.00" },
  { name: "Postnatal", duration: "30 min", price: "R400.00" },
  { name: "Postnatal", duration: "90 min", price: "R750.00" },
  { name: "Aromatherapy", duration: "60 min", price: "R400.00" },
  { name: "Aromatherapy", duration: "90 min", price: "R650.00" },
];
const extras = [
  { name: "Hot stones", price: "R70.00" },
  { name: "Foot massage", price: "R100.00" },
  { name: "Head massage", price: "R50.00" },
];

export default function Spa() {
  return (
    <main className="spa-page">
      <section className="spa-hero" aria-labelledby="spa-title">
        <img className="spa-hero-image" src="/spa/spa-hero.png" alt="A peaceful luxury spa massage in a warm candlelit treatment room" />
        <div className="spa-hero-shade" />
        <div className="spa-hero-copy">
          <p className="spa-eyebrow">MERCY BOUTIQUE HOTEL · WELLNESS</p>
          <h1 id="spa-title"><span>Spa</span> Services</h1>
          <p className="spa-tagline">Relax. Rejuvenate. Restore.</p>
          <p className="spa-intro">Step away from the everyday and enjoy a moment of calm. Discover soothing treatments designed to help you unwind, refresh your body and renew your spirit.</p>
          <a className="spa-cta" href="https://wa.me/?text=Hello%20Mercy%20Boutique%20Hotel%2C%20I%27d%20like%20to%20enquire%20about%20spa%20services." target="_blank" rel="noreferrer">
            Book your spa experience <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="spa-benefits" aria-label="Spa experience benefits">
        <article><Leaf /><h3>Relax</h3><p>Ease tension and unwind</p></article>
        <article><Sparkles /><h3>Rejuvenate</h3><p>Refresh body and mind</p></article>
        <article><Heart /><h3>Restore</h3><p>Find your balance</p></article>
      </section>

      <section className="spa-content">
        <div className="spa-section-heading">
          <p className="spa-eyebrow">A MOMENT FOR YOU</p>
          <h2>Our Spa Menu</h2>
          <p>Explore our massage treatments and add-on experiences.</p>
        </div>
        <div className="spa-menu-grid">
          <div className="spa-menu-card">
            <h3>Massage treatments</h3>
            <div className="spa-price-list">
              {services.map((item, index) => (
                <div className="spa-price-row" key={`${item.name}-${item.duration}-${index}`}>
                  <span>{item.name}</span><span className="spa-duration"><Clock3 size={14} />{item.duration}</span><strong>{item.price}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="spa-menu-card spa-extras-card">
            <h3>Enhance your experience</h3>
            <p className="spa-card-intro">Add a little extra relaxation to your treatment.</p>
            <div className="spa-price-list">
              {extras.map((item) => (
                <div className="spa-price-row spa-extra-row" key={item.name}>
                  <span>{item.name}</span><strong>{item.price}</strong>
                </div>
              ))}
            </div>
            <div className="spa-note"><CalendarDays size={19} /><p>Please enquire about availability and appointments before visiting.</p></div>
            <a className="spa-cta spa-cta-dark" href="https://wa.me/?text=Hello%20Mercy%20Boutique%20Hotel%2C%20please%20help%20me%20book%20a%20spa%20appointment." target="_blank" rel="noreferrer">Enquire about availability <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <p className="spa-disclaimer">Prices and treatment details are displayed as provided by Mercy Boutique Hotel. Please confirm availability and any treatment suitability directly with the hotel.</p>
      </section>

      <section className="spa-poster-section">
        <div className="spa-poster-copy">
          <p className="spa-eyebrow">YOUR WELLNESS MOMENT</p>
          <h2>Make time to feel renewed.</h2>
          <p>Pair your stay with a restorative spa experience at Mercy Boutique Hotel.</p>
        </div>
        <img src="/spa/spa-services-menu.jpeg" alt="Mercy Boutique Hotel spa services menu and massage prices" loading="lazy" />
      </section>
    </main>
  );
}
