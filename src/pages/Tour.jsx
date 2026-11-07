import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero, Eyebrow } from "../components/Site";
import VirtualTour from "./VirtualTour";

const stops = [
  [
    "Arrive at Mercy",
    "Get a sense of the property and its setting.",
    "/hotel/Full-Hotel-view-from-the-top.jpg",
  ],
  [
    "Poolside pause",
    "Take a look at the outdoor swimming pool.",
    "/hotel/Pool-view-during-day-2.jpg",
  ],
  [
    "Deluxe comfort",
    "Explore the Deluxe Room photography.",
    "/hotel/Deluxe-bedroom-view-3.jpg",
  ],
  [
    "Suite living",
    "Discover the King Suite and its sitting area.",
    "/hotel/King-suit-view-4.jpg",
  ],
  [
    "Presidential Suite",
    "Step into the signature suite photographs.",
    "/hotel/Presidential-Suite-bed-2-view.jpg",
  ],
  [
    "After dark",
    "See Mercy illuminated in the evening.",
    "/hotel/Full-Hotel-night-view-from-the-top.jpg",
  ],
];

export default function Tour() {
  const [step, setStep] = useState(0),
    s = stops[step];

  return (
    <>
      <PageHero
        kicker="THE MERCY PHOTO TOUR"
        title={
          <>
            Step inside
            <br />
            <em>and explore.</em>
          </>
        }
        sub="A guided visual journey through the hotel's spaces, rooms and outdoor setting."
      />

      {/* --- ORIGINAL PHOTO TOUR SECTION --- */}
      <section
        className="section tour-section"
        style={{ paddingBottom: "40px" }}
      >
        <div className="tour-stage">
          <AnimatePresence mode="wait">
            <motion.img
              key={step}
              src={s[2]}
              alt={s[0]}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="tour-stage-shade" />
          <div className="tour-caption">
            <Eyebrow>
              STOP 0{step + 1} / 0{stops.length}
            </Eyebrow>
            <h2>{s[0]}</h2>
            <p>{s[1]}</p>
          </div>
          <div className="tour-controls">
            <button
              onClick={() => setStep((step + stops.length - 1) % stops.length)}
              aria-label="Previous stop"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => setStep((step + 1) % stops.length)}
              aria-label="Next stop"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="tour-steps">
          {stops.map(([t, , img], i) => (
            <button
              key={t}
              className={i === step ? "active" : ""}
              onClick={() => setStep(i)}
            >
              <img loading="lazy" decoding="async" src={img} alt="" />
              <span>
                0{i + 1} · {t}
              </span>
            </button>
          ))}
        </div>
        <p className="fine-print" style={{ marginBottom: 0 }}>
          This is an interactive photographic tour, not a 360-degree or
          virtual-reality walkthrough. A true 360° tour requires panoramic
          source photographs.
        </p>
      </section>

      {/* --- NEW 360 VIRTUAL TOUR SECTION --- */}
      {/* Added style to pull it up and reduce padding */}
      <section className="section tour-section" style={{ paddingTop: "40px" }}>
        <div style={{ marginBottom: "20px" }}>
          <Eyebrow>THE 360° EXPERIENCE</Eyebrow>
          <h2 style={{ marginTop: "15px" }}>
            Look around.
            <br />
            <em>Move through.</em>
          </h2>
          <p
            style={{
              maxWidth: "600px",
              color: "#777269",
              fontSize: "12px",
              lineHeight: "2",
            }}
          >
            Use your mouse, trackpad, or finger to drag the image and look
            around the room. Click the floating arrows on the left and right to
            move into connected spaces.
          </p>
        </div>

        <VirtualTour />

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "15px",
            fontSize: "11px",
            color: "#777269",
          }}
        >
          <span>
            <span style={{ color: "#e0c99f" }}>●</span> Gold Arrows: Move to
            next room
          </span>
          <span>
            <span style={{ color: "#e0c99f" }}>●</span> Floating Emojis: Click
            for room info
          </span>
        </div>
      </section>
    </>
  );
}
