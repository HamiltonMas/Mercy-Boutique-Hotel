import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  ShieldCheck,
  CalendarDays,
  Users,
  BedDouble,
  ChevronDown,
} from "lucide-react";
import { bookingUrl, hotel } from "../data";
const hotelWhatsAppNumber = "27717458188";
export const waLink = (
  message = "Hello Mercy Boutique Hotel, I would like to enquire about a stay.",
) => `https://wa.me/${hotelWhatsAppNumber}?text=${encodeURIComponent(message)}`;

// Keep the primary navigation concise while retaining direct access to every page.
export const nav = [
  ["Home", "/"],
  ["The Hotel", "/hotel"],
  ["Rooms", "/rooms"],
  ["Experiences", "/experiences"],
  ["Dining", "/dining"],
  ["Events", "/events"],
  ["Discover Limpopo", "/discover"],
  ["Offers", "/offers"],
  ["Gallery", "/gallery"],
  ["Virtual Tour", "/tour"],
  ["Contact", "/contact"],
  ["Spa", "/spa"],
];

const navigationGroups = [
  {
    label: "Stay",
    items: [
      ["The Hotel", "/hotel"],
      ["Rooms", "/rooms"],
      ["Special Offers", "/offers"],
    ],
  },
  {
    label: "Experiences",
    items: [
      ["Experiences", "/experiences"],
      ["Dining", "/dining"],
      ["Events", "/events"],
      ["Discover Limpopo", "/discover"],
      ["Spa", "/spa"],
    ],
  },
  {
    label: "Explore",
    items: [
      ["Gallery", "/gallery"],
      ["Virtual Tour", "/tour"],
    ],
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const headerRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    const closeOnOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenGroup(null);
        setOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setOpen(false);
      }
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-is-open" : ""}`}
    >
      <Link
        to="/"
        className="brand"
        onClick={closeMenus}
        aria-label="Mercy Boutique Hotel home"
      >
        <span className="brand-monogram">M</span>
        <span className="brand-word">
          <b>MERCY</b>
          <small>BOUTIQUE HOTEL</small>
        </span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          setOpenGroup(null);
        }}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="primary-navigation"
      >
        {open ? "✕" : "☰"}
      </button>
      <nav
        id="primary-navigation"
        className={open ? "main-nav nav-open" : "main-nav"}
        aria-label="Main navigation"
      >
        <NavLink to="/" end onClick={closeMenus}>
          Home
        </NavLink>
        {navigationGroups.map((group) => {
          const expanded = openGroup === group.label;
          const groupActive = group.items.some(
            ([, path]) =>
              location.pathname === path ||
              (path !== "/" && location.pathname.startsWith(`${path}/`)),
          );
          return (
            <div
              className={`nav-dropdown${expanded ? " dropdown-open" : ""}${groupActive ? " has-active-page" : ""}`}
              key={group.label}
            >
              <button
                className={`nav-dropdown-trigger${groupActive ? " group-active" : ""}`}
                type="button"
                aria-controls={`nav-group-${group.label.toLowerCase()}`}
                aria-expanded={expanded}
                onClick={() => setOpenGroup(expanded ? null : group.label)}
              >
                {group.label}
                <ChevronDown size={13} aria-hidden="true" />
              </button>
              <div
                id={`nav-group-${group.label.toLowerCase()}`}
                className="nav-dropdown-menu"
                hidden={!expanded}
              >
                {group.items.map(([label, path]) => (
                  <NavLink key={path} to={path} onClick={closeMenus}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          );
        })}
        <NavLink to="/contact" onClick={closeMenus}>
          Contact
        </NavLink>
        <Link
          className="header-book header-book-mobile"
          to="/book"
          onClick={closeMenus}
        >
          RESERVE <ArrowUpRight size={15} />
        </Link>
      </nav>
      <Link className="header-book" to="/book" onClick={closeMenus}>
        RESERVE <ArrowUpRight size={15} />
      </Link>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-monogram">M</span>
            <span className="brand-word">
              <b>MERCY</b>
              <small>BOUTIQUE HOTEL</small>
            </span>
          </Link>
          <p className="footer-desc">
            A considered escape in Tswinga Village, Thohoyandou. Thoughtful
            spaces, warm hospitality and time to unwind.
          </p>
        </div>
        <div>
          <label>EXPLORE</label>
          {nav.slice(1, 8).map(([n, p]) => (
            <NavLink
              key={p}
              to={p}
              className={({ isActive }) =>
                isActive ? "active-footer-link" : ""
              }
            >
              {n}
            </NavLink>
          ))}
        </div>
        <div>
          <label>GET IN TOUCH</label>
          <p>{hotel.address}</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Mercy+Boutique+Hotel+Tswinga+Thohoyandou"
            target="_blank"
            rel="noreferrer"
          >
            Directions <ArrowUpRight size={14} />
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer">
            WhatsApp <MessageCircle size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mercy Boutique Hotel</span>
        <span>THOHOYANDOU · LIMPOPO · SOUTH AFRICA</span>
      </div>
    </footer>
  );
}
export function PageHero({
  kicker,
  title,
  sub,
  image = "/hotel/Full-Hotel-view-from-the-top.jpg",
}) {
  return (
    <section
      className="page-hero"
      style={{ "--page-image": `url("${image}")` }}
    >
      <div className="page-hero-inner">
        <div className="eyebrow eyebrow-light">
          <span />
          {kicker}
        </div>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}
export function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}
export function BookingPanel() {
  const [inDate, setInDate] = React.useState(""),
    [outDate, setOutDate] = React.useState(""),
    [adults, setAdults] = React.useState("2"),
    [rooms, setRooms] = React.useState("1"),
    [error, setError] = React.useState("");
  const todayLocal = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  };
  function submit() {
    if (!inDate || !outDate) {
      setError("Choose your arrival and departure dates.");
      return;
    }
    if (inDate < todayLocal()) {
      setError("Arrival date cannot be in the past.");
      return;
    }
    if (outDate <= inDate) {
      setError("Departure must be after arrival.");
      return;
    }
    const url = new URL(bookingUrl);
    url.searchParams.set("checkin", inDate);
    url.searchParams.set("checkout", outDate);
    url.searchParams.set("group_adults", adults);
    url.searchParams.set("no_rooms", rooms);
    url.searchParams.set("group_children", "0");
    window.open(url, "_blank", "noopener,noreferrer");
    setError("");
  }
  return (
    <div className="booking-panel">
      <div className="booking-panel-title">
        <Eyebrow>YOUR MERCY ESCAPE</Eyebrow>
        <h3>Find your dates.</h3>
      </div>
      <label>
        <span>
          <CalendarDays /> CHECK IN
        </span>
        <input
          type="date"
          min={todayLocal()}
          value={inDate}
          onChange={(e) => setInDate(e.target.value)}
        />
      </label>
      <label>
        <span>
          <CalendarDays /> CHECK OUT
        </span>
        <input
          type="date"
          min={inDate || todayLocal()}
          value={outDate}
          onChange={(e) => setOutDate(e.target.value)}
        />
      </label>
      <label>
        <span>
          <Users /> GUESTS
        </span>
        <select value={adults} onChange={(e) => setAdults(e.target.value)}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <label>
        <span>
          <BedDouble /> ROOMS
        </span>
        <select value={rooms} onChange={(e) => setRooms(e.target.value)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </label>
      <button className="gold-button" onClick={submit}>
        CHECK AVAILABILITY <ArrowUpRight size={15} />
      </button>
      {error && <p className="booking-error">{error}</p>}
      <small className="booking-note">
        <ShieldCheck size={13} /> Live rates and availability are confirmed by
        Booking.com.
      </small>
    </div>
  );
}
export function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Mercy Boutique Hotel"
    >
      <MessageCircle />
    </a>
  );
}
