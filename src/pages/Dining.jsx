import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Utensils, Wine, Coffee, CakeSlice } from "lucide-react";
import { PageHero, Eyebrow } from "../components/Site";

const foodItems = [
  {
    image: "/food/food-dish-1.jpeg",
    title: "Grilled Chicken & Chips",
    description: "A generous grilled chicken plate served with golden chips and fresh salad-style accompaniments.",
    category: "Main course",
  },
  {
    image: "/food/food-dish-2.jpeg",
    title: "Seafood Platter",
    description: "A seafood-focused plate with prawns, vegetables, lemon and potato-style sides, beautifully presented.",
    category: "Seafood",
  },
  {
    image: "/food/food-dish-3.jpeg",
    title: "Prawn & Seafood Plate",
    description: "A colourful seafood dish featuring prawns with vegetables, potatoes and a fresh lemon finish.",
    category: "Seafood",
  },
  {
    image: "/food/food-dish-4.jpeg",
    title: "Seafood & Vegetable Platter",
    description: "A rich mixed seafood serving accompanied by vegetables and lemon for a bright finishing note.",
    category: "Seafood",
  },
  {
    image: "/food/food-dish-5.jpeg",
    title: "Creamy Pasta",
    description: "Comforting pasta coated in a creamy herb-flecked sauce and served in a clean, contemporary presentation.",
    category: "Pasta",
  },
  {
    image: "/food/food-dish-6.jpeg",
    title: "Creamy Chicken Pasta",
    description: "A creamy pasta dish with sliced chicken and herbs, presented as a relaxed but refined meal.",
    category: "Pasta",
  },
  {
    image: "/food/food-dish-7.jpeg",
    title: "Herbed Pasta",
    description: "A warm pasta preparation finished with herbs and a light savoury sauce.",
    category: "Pasta",
  },
  {
    image: "/food/food-dish-8.jpeg",
    title: "Grilled Chicken Platter",
    description: "Grilled chicken served with chips and fresh vegetables for a hearty hotel dining favourite.",
    category: "Main course",
  },
  {
    image: "/food/food-dish-9.jpeg",
    title: "Poolside Meal",
    description: "A relaxed dining moment beside the pool, pairing a plated meal with a refreshing drink.",
    category: "Poolside",
  },
  {
    image: "/food/food-dish-10.jpeg",
    title: "Prawn & Seafood Special",
    description: "A neatly plated seafood creation with prawns, vegetables and a bright citrus garnish.",
    category: "Seafood",
  },
  {
    image: "/food/food-dish-11.jpeg",
    title: "Creamy Prawn Pasta",
    description: "A generous pasta dish with prawns, a creamy sauce and fresh lemon to lift the flavour.",
    category: "Seafood & pasta",
  },
  {
    image: "/food/food-dish-12.jpeg",
    title: "Crispy Bites",
    description: "Crisp golden bites served with dipping sauces, ideal for sharing or enjoying as a starter.",
    category: "Starter",
  },
  {
    image: "/food/food-dish-13.jpeg",
    title: "Grilled Meat & Mash",
    description: "A substantial grilled meat plate served with vegetables, a creamy mash-style side and pan-style accompaniments.",
    category: "Main course",
  },
  {
    image: "/food/food-dish-14.jpeg",
    title: "Grilled Meat Platter",
    description: "Tender grilled meat presented with vegetables and colourful garnishes for an elegant dining plate.",
    category: "Main course",
  },
];

const drinks = [
  {
    image: "/food/drink-1.jpeg",
    title: "Fresh Citrus Cooler",
    description: "A chilled, refreshing drink with citrus and mint, perfect for warm poolside afternoons.",
  },
  {
    image: "/food/drink-2.jpeg",
    title: "Sunset Cocktail",
    description: "A vibrant cocktail-style drink served against the sunset for a relaxed evening at Mercy.",
  },
  {
    image: "/food/drink-3.jpeg",
    title: "Creamy Indulgence",
    description: "A rich, creamy blended drink served chilled for a slower coffee-and-dessert moment.",
  },
];

const tableSetups = [
  ["/food/Table-setUp-1.jpeg", "Classic table setting", "A refined white table arrangement prepared for an intimate dining experience."],
  ["/food/Table-setUp-2.jpeg", "Celebration setting", "A more dramatic table layout with florals, glassware and coordinated place settings."],
  ["/food/Table-setUp-3.jpeg", "Signature dining table", "A polished long-table arrangement suited to celebrations, private dinners and special occasions."],
];

export default function Dining() {
  return (
    <>
      <PageHero
        kicker="FOOD & HOSPITALITY"
        title={<>A moment<br /><em>around the table.</em></>}
        sub="Discover the food, drinks and beautifully prepared dining settings captured at Mercy Boutique Hotel."
        image="/food/Table-setUp-2.jpeg"
      />

      <section className="story-section section dining-intro">
        <div>
          <Eyebrow>DINING AT MERCY</Eyebrow>
          <h2>Good food.<br /><em>Good company.</em></h2>
        </div>
        <div>
          <p>
            Mercy Boutique Hotel's restaurant brings together African and South African-inspired dining,
            relaxed poolside moments and more intimate table settings for celebrations and special occasions.
          </p>
          <p>
            The dishes below are presented from the hotel's supplied food photographs. Dish names and descriptions
            are intentionally descriptive rather than claiming ingredients that cannot be confirmed from the photographs.
          </p>
          <div className="dining-actions">
            <a
              className="gold-button"
              href="https://menu.ps.me/jgakDYpYlSM"
              target="_blank"
              rel="noreferrer"
            >
              VIEW CURRENT MENU <ArrowUpRight />
            </a>
            <Link className="line-link" to="/contact">
              DINING ENQUIRIES <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section dining-highlights">
        <div className="dining-highlight-card">
          <Utensils />
          <span>RESTAURANT</span>
          <h3>A relaxed dining experience</h3>
          <p>Enjoy plated meals in a setting that moves easily from casual daytime dining to more intimate evenings.</p>
        </div>
        <div className="dining-highlight-card">
          <Wine />
          <span>DRINKS</span>
          <h3>Something refreshing</h3>
          <p>From chilled citrus refreshers to colourful cocktail-style drinks, the menu photographs capture a relaxed poolside mood.</p>
        </div>
        <div className="dining-highlight-card">
          <CakeSlice />
          <span>OCCASIONS</span>
          <h3>Set the table beautifully</h3>
          <p>Coordinated table settings make the restaurant suitable for intimate celebrations, dinners and special moments.</p>
        </div>
      </section>

      <section className="section dining-gallery-section">
        <div className="section-heading-row">
          <div>
            <Eyebrow>THE FOOD COLLECTION</Eyebrow>
            <h2>Plates made to<br /><em>be remembered.</em></h2>
          </div>
          <p>
            Browse the dishes captured at Mercy, from seafood and grilled plates to creamy pasta and shareable starters.
          </p>
        </div>

        <div className="food-grid">
          {foodItems.map((item, index) => (
            <article className={`food-card ${index % 5 === 0 ? "food-card-featured" : ""}`} key={item.image}>
              <div className="food-card-image">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                <span>{item.category}</span>
              </div>
              <div className="food-card-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section drinks-section">
        <div className="section-heading-row">
          <div>
            <Eyebrow>DRINKS & REFRESHMENTS</Eyebrow>
            <h2>Raise a glass<br /><em>by the water.</em></h2>
          </div>
          <p>Slow afternoons, sunset colours and refreshing drinks form part of the Mercy dining atmosphere.</p>
        </div>

        <div className="drinks-grid">
          {drinks.map((item) => (
            <article className="drink-card" key={item.image}>
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pool-dining-feature">
        <div className="pool-dining-media">
          <img src="/food/food-served-in-pool.jpeg" alt="Food served beside the swimming pool at Mercy Boutique Hotel" loading="lazy" />
          <video autoPlay muted loop playsInline preload="metadata">
            <source src="/food/pool-and-food.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pool-dining-copy">
          <Eyebrow>POOL & DINING</Eyebrow>
          <h2>Take your meal<br /><em>outside.</em></h2>
          <p>
            The supplied photographs show food being enjoyed around the pool, giving the dining experience a relaxed,
            resort-like character during sunny afternoons.
          </p>
          <Link className="gold-button" to="/contact">
            PLAN A DINING VISIT <ArrowUpRight />
          </Link>
        </div>
      </section>

      <section className="section table-settings-section">
        <div className="section-heading-row">
          <div>
            <Eyebrow>THE TABLE</Eyebrow>
            <h2>Beautifully<br /><em>set for you.</em></h2>
          </div>
          <p>Explore the table styling supplied for the website, from intimate settings to celebration-ready arrangements.</p>
        </div>

        <div className="table-settings-grid">
          {tableSetups.map(([image, title, description]) => (
            <article key={image}>
              <img src={image} alt={title} loading="lazy" decoding="async" />
              <div>
                <span>THE MERCY TABLE</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta dining-cta">
        <Eyebrow>DINING ENQUIRIES</Eyebrow>
        <h2>Planning something<br /><em>special?</em></h2>
        <p>Ask the Mercy team about current menu availability, dietary requirements, dining arrangements and private occasions.</p>
        <Link className="gold-button" to="/contact">
          CONTACT MERCY <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
