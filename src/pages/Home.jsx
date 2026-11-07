import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  Sparkles,
  Wifi,
  Play,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { hotel } from "../data";
import { BookingPanel, Eyebrow, SectionTitle } from "../components/Site";
const slides = [
  "/hotel/Full-Hotel-view-from-the-top.jpg",
  "/hotel/Pool-view-during-day-2.jpg",
  "/hotel/Full-Hotel-night-view-from-the-top.jpg",
  "/hotel/Presidential-Suite-bed-2-view.jpg",
];
export default function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6200);
    return () => clearInterval(t);
  }, []);
  return (
    <>
      <section className="home-hero">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            className="home-hero-image"
            style={{ backgroundImage: `url(${slides[i]})` }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="hero-overlay" />
        <div className="hero-copy">
          <Eyebrow>AN INTIMATE ESCAPE · THOHOYANDOU</Eyebrow>
          <h1>
            A stay beyond
            <br />
            <em>the expected.</em>
          </h1>
          <p>
            A considered retreat where thoughtful comfort, warm hospitality and
            room to unwind come together.
          </p>
          <div className="hero-buttons">
            <Link to="/rooms" className="gold-button">
              EXPLORE THE ROOMS <ArrowRight />
            </Link>
            <Link to="/hotel" className="hero-text-link">
              DISCOVER MERCY <ArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>TSWINGA VILLAGE · LIMPOPO</span>
          <div className="hero-dots">
            {slides.map((s, n) => (
              <button
                key={s}
                className={n === i ? "selected" : ""}
                onClick={() => setI(n)}
                aria-label={`Show slide ${n + 1}`}
              />
            ))}
          </div>
          <span>
            0{i + 1} / 0{slides.length}
          </span>
        </div>
      </section>
      <div className="booking-wrap">
        <BookingPanel />
      </div>
      <section className="intro-section section">
        <div>
          <Eyebrow>THE MERCY EXPERIENCE</Eyebrow>
          <h2>
            Quietly distinctive.
            <br />
            <em>Memorably yours.</em>
          </h2>
        </div>
        <div className="intro-right">
          <p>
            Set in Tswinga Village, Mercy Boutique Hotel welcomes travellers
            looking for a comfortable base and a little breathing room. Settle
            into a restful room, spend time outdoors and make your visit your
            own.
          </p>
          <Link className="line-link" to="/hotel">
            GET TO KNOW US <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="signature-section">
        <div className="signature-image">
          <img
            loading="lazy"
            decoding="async"
            src="/hotel/Pool-view-during-day-2.jpg"
            alt="Mercy Boutique Hotel swimming pool"
          />
        </div>
        <div className="signature-copy">
          <Eyebrow>THE ART OF UNWINDING</Eyebrow>
          <h2>
            Make time
            <br />
            for <em>nothing.</em>
          </h2>
          <p>
            Take a refreshing pause by the pool, enjoy the outdoor spaces and
            settle into the comfort of your own retreat.
          </p>
          <div className="amenity-pills">
            <span>
              <Waves /> Outdoor pool
            </span>
            <span>
              <Sparkles /> Hot tub
            </span>
            <span>
              <Wifi /> Wi-Fi
            </span>
          </div>
          <Link className="line-link" to="/experiences">
            EXPLORE EXPERIENCES <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="ROOMS & SUITES"
          title={
            <>
              Space to settle in.
              <br />
              <em>Room to feel good.</em>
            </>
          }
        >
          <Link className="line-link" to="/rooms">
            VIEW ALL ROOMS <ArrowUpRight />
          </Link>
        </SectionTitle>
        <div className="home-room-grid">
          {hotel.rooms.slice(0, 3).map((r, n) => (
            <Link
              className="room-card"
              to={`/rooms/${["deluxe-room", "king-suite", "superior-suite"][n]}`}
              key={r.name}
            >
              <div className="room-card-image">
                <img
                  loading="lazy"
                  decoding="async"
                  src={r.image}
                  alt={r.name}
                />
              </div>
              <div className="room-card-info">
                <span>ROOM COLLECTION · 0{n + 1}</span>
                <h3>{r.name}</h3>
                <p>{r.description}</p>
                <b>
                  DISCOVER ROOM <ArrowRight size={14} />
                </b>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="dark-quote">
        <p>
          Luxury is not always more.
          <br />
          <em>Sometimes, it is simply better.</em>
        </p>
        <span>THE MERCY PHILOSOPHY</span>
      </section>
      <section className="review-section section">
        <div>
          <Eyebrow>THE GUEST PERSPECTIVE</Eyebrow>
          <h2>
            Good stays
            <br />
            <em>stay with you.</em>
          </h2>
          <p>
            Explore current guest feedback and verified reviews through our
            booking partner.
          </p>
          <a
            className="line-link"
            href="https://www.booking.com/hotel/za/mercy-boutique.html"
            target="_blank"
            rel="noreferrer"
          >
            READ GUEST REVIEWS <ArrowUpRight />
          </a>
        </div>
        <div className="review-card">
          <h3>
            Real experiences.
            <br />
            <em>Honest impressions.</em>
          </h3>
          <p>
            We invite you to explore recent guest feedback directly on
            Booking.com, where ratings and reviews are maintained by the
            platform.
          </p>
        </div>
      </section>
      <section className="tour-teaser">
        <img
          loading="lazy"
          decoding="async"
          src="/hotel/Full-Hotel-night-view-from-the-top.jpg"
          alt="Hotel at night"
        />
        <div>
          <Eyebrow>TAKE A CLOSER LOOK</Eyebrow>
          <h2>
            Step inside
            <br />
            <em>Mercy.</em>
          </h2>
          <p>Explore our photo tour of the hotel and its spaces.</p>
          <Link className="gold-button" to="/tour">
            START THE VIRTUAL TOUR <Play />
          </Link>
        </div>
      </section>
      <section className="closing-cta">
        <Eyebrow>YOUR NEXT CHAPTER STARTS HERE</Eyebrow>
        <h2>
          We look forward
          <br />
          to <em>welcoming you.</em>
        </h2>
        <Link to="/book" className="gold-button">
          PLAN YOUR STAY <ArrowRight />
        </Link>
      </section>
    </>
  );
}
