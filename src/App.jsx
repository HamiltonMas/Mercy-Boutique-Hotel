import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Header, Footer, WhatsAppFloat } from "./components/Site";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Experiences from "./pages/Experiences";
import Dining from "./pages/Dining";
import Events from "./pages/Events";
import Discover from "./pages/Discover";
import Offers from "./pages/Offers";
import Gallery from "./pages/Gallery";
import Tour from "./pages/Tour";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Spa from "./pages/Spa";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const pageMeta = {
      "/": [
        "Mercy Boutique Hotel | A Stay Beyond the Expected",
        "Discover Mercy Boutique Hotel in Tswinga Village, Thohoyandou. Explore rooms, experiences and plan your stay.",
      ],

      "/hotel": [
        "The Hotel | Mercy Boutique Hotel",
        "Discover the spaces, hospitality and facilities at Mercy Boutique Hotel in Thohoyandou, Limpopo.",
      ],

      "/rooms": [
        "Rooms & Suites | Mercy Boutique Hotel",
        "Explore accommodation at Mercy Boutique Hotel and check availability for your stay.",
      ],

      "/experiences": [
        "Experiences | Mercy Boutique Hotel",
        "Explore the experiences and spaces available during a stay at Mercy Boutique Hotel.",
      ],

      "/spa": [
        "Spa & Wellness | Mercy Boutique Hotel",
        "Relax, rejuvenate and restore at Mercy Boutique Hotel. Explore our massage treatments, spa services and prices in Thohoyandou, Limpopo.",
      ],

      "/dining": [
        "Dining | Mercy Boutique Hotel",
        "Discover dining information at Mercy Boutique Hotel in Thohoyandou.",
      ],

      "/events": [
        "Events | Mercy Boutique Hotel",
        "Enquire about hosting an event at Mercy Boutique Hotel, Thohoyandou.",
      ],

      "/discover": [
        "Discover Limpopo | Mercy Boutique Hotel",
        "Explore Thohoyandou and the surrounding Limpopo region from Mercy Boutique Hotel.",
      ],

      "/offers": [
        "Special Offers | Mercy Boutique Hotel",
        "Explore current stay offers at Mercy Boutique Hotel.",
      ],

      "/gallery": [
        "Gallery | Mercy Boutique Hotel",
        "View photographs of the rooms, hotel and outdoor spaces at Mercy Boutique Hotel.",
      ],

      "/tour": [
        "Virtual Tour | Mercy Boutique Hotel",
        "Take a visual tour of Mercy Boutique Hotel in Thohoyandou.",
      ],

      "/book": [
        "Book Your Stay | Mercy Boutique Hotel",
        "Choose your dates and check accommodation availability at Mercy Boutique Hotel.",
      ],

      "/contact": [
        "Contact | Mercy Boutique Hotel",
        "Contact Mercy Boutique Hotel in Tswinga Village, Thohoyandou, Limpopo.",
      ],
    };

    const [title, description] =
      pageMeta[location.pathname] ||
      (location.pathname.startsWith("/rooms/")
        ? [
            "Room Details | Mercy Boutique Hotel",
            "Explore room details and plan your stay at Mercy Boutique Hotel.",
          ]
        : [
            "Page Not Found | Mercy Boutique Hotel",
            "The requested page could not be found.",
          ]);
    document.title = title;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.name = "description";
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    let ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) ogDescription.setAttribute("content", description);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:slug" element={<RoomDetail />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/events" element={<Events />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
