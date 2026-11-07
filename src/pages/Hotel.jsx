import React from "react";
import { Link } from "react-router-dom";
import {
  Wifi,
  CarFront,
  Waves,
  Utensils,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { hotel } from "../data";
import { PageHero, Eyebrow } from "../components/Site";
const icons = [Waves, Utensils, Wifi, CarFront, Clock, ShieldCheck];
export default function Hotel() {
  return (
    <>
      <PageHero
        kicker="WELCOME TO MERCY"
        title={
          <>
            A place to pause.
            <br />
            <em>A place to belong.</em>
          </>
        }
        sub="Discover a welcoming boutique hotel in Tswinga Village, Thohoyandou."
        image="/hotel/Full-Hotel-view-from-the-top.jpg"
      />
      <section className="story-section section">
        <div>
          <Eyebrow>OUR APPROACH</Eyebrow>
          <h2>
            Hospitality with
            <br />
            <em>room to breathe.</em>
          </h2>
        </div>
        <div>
          <p>
            Mercy Boutique Hotel offers a relaxed setting for visitors to
            Thohoyandou and the wider Limpopo region. Whether you are travelling
            for work, visiting family or planning a getaway, our aim is to make
            your stay comfortable and straightforward.
          </p>
          <p>
            Explore the accommodation, discover the facilities and contact the
            hotel team with any questions before you travel.
          </p>
          <Link className="line-link" to="/rooms">
            EXPLORE ACCOMMODATION <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="hotel-photo-band">
        <img
          loading="lazy"
          decoding="async"
          src="/hotel/Full-Hotel-night-view-from-the-top.jpg"
          alt="Mercy Boutique Hotel after dark"
        />
        <div>
          <Eyebrow>THE PROPERTY</Eyebrow>
          <h2>
            Comfort, day
            <br />
            <em>and night.</em>
          </h2>
        </div>
      </section>
      <section className="section">
        <Eyebrow>FACILITIES & AMENITIES</Eyebrow>
        <h2>
          Everything you need
          <br />
          <em>to settle in.</em>
        </h2>
        <div className="facility-grid">
          {hotel.facilities.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="facility-card" key={f}>
                <Icon />
                <h3>{f}</h3>
                <p>
                  Contact the hotel to confirm availability and any specific
                  requirements for your stay.
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="closing-cta">
        <Eyebrow>MAKE YOURSELF AT HOME</Eyebrow>
        <h2>
          Your stay at
          <br />
          <em>Mercy awaits.</em>
        </h2>
        <Link className="gold-button" to="/book">
          CHECK AVAILABILITY <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
