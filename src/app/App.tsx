import { useState, useEffect, useRef } from "react";
import { Instagram, MapPin } from "lucide-react";

import heroImg from "@/imports/MacBookPro161/75f47084631e6f665251560a4964a88fd3173782.png";
import storyImg from "@/imports/MacBookPro162/28a453819bedace36a1339c89a4dac6cbc2a390d.png";
import galleryLake from "@/imports/MacBookPro163/0486338b9ffcb590115d3cc9418c5b04e9ca5fa9.png";
import galleryForest from "@/imports/MacBookPro163/11abc78d54e1b558c7ad3f0e341f7ed95e4040bb.png";
import galleryPortrait from "@/imports/MacBookPro163/05d176c2a901b0716e99adff396bac718cd768a8.png";
import galleryCollection from "@/imports/MacBookPro163/29c72bc066970e4a74f3fa517a99063081eee2f3.png";
import galleryPanorama from "@/imports/MacBookPro163/b084b4ea89cce8226f1d40d0a43f7a0740106768.png";
import galleryWide from "@/imports/MacBookPro163/a53bba2b097032487fbba52d62f96b9de4a2f838.png";
import expLeft from "@/imports/MacBookPro164/d92dba1e42ae601c519592713fc99dac0339c60e.png";
import expCenter from "@/imports/MacBookPro164/fb47273566670376a0305867fe3b59a7a01e01a2.png";
import expRight from "@/imports/MacBookPro164/460a817ffc3817a18f5ccbaedfe13adc1e08a022.png";
import footerSunset from "@/imports/MacBookPro168/eb37d7db04341884958291c0df79334744d32622.png";
import airbnbImg from "@/imports/MacBookPro168/f4733e1c91a92dbd394ba823bda2f8a78f6695e9.png";
import propertyLiving from "@/imports/MacBookPro168/property-living.jpg";
import propertyBedroom from "@/imports/MacBookPro168/property-bedroom.jpg";
import propertyBathroom from "@/imports/MacBookPro168/property-bathroom.jpg";
import propertyKitchen from "@/imports/MacBookPro168/property-kitchen.jpg";
import propertyBalcony from "@/imports/MacBookPro168/property-balcony.jpg";
import propertyExterior from "@/imports/MacBookPro168/property-exterior.jpg";

const CG = "'Cormorant Garamond', serif";
const EBG = "'EB Garamond', serif";

const LIGHT_SECTIONS = ["gallery", "before-arrive"];

/* ─── Experience card content ─── */
const EXP_CARDS = [
  {
    img: expLeft,
    alt: "Ranikhet forest",
    title: "Forest Trails",
    body: "Trek through dense pine and oak forests around Nainital and Ranikhet. Every path leads somewhere quieter than the last.",
  },
  {
    img: expCenter,
    alt: "Kainchi Dham temple",
    title: "Kainchi Dham",
    body: "Visit the legendary ashram set beside a rushing mountain stream — a place of stillness that draws visitors from across the world.",
  },
  {
    img: expRight,
    alt: "Starry night sky",
    title: "Starlit Nights",
    body: "At 2,084 metres the sky is extraordinarily clear. Watch the Milky Way arc overhead from the terrace long after the town has gone to sleep.",
  },
];

/* ─── Before-You-Arrive carousel slides ─── */
const SLIDES = [
  [
    {
      title: "Wake to the Hills",
      subtitle: "",
      body: "Wake up to peaceful views of the surrounding hills, with partial glimpses of Naini Lake through the trees. Step onto the main balcony to enjoy sweeping panoramic views of the valley and lake.",
    },
    {
      title: "Everything Within Reach",
      subtitle: "Walk to Mall Road",
      body: "Mall Road, the lake, cafés, and the local bus stand are all just a short walk away. Leave the car behind and discover Nainital the way it's best experienced — On foot.",
    },
    {
      title: "Walk With Us",
      subtitle: "Weekend Local Walks",
      body: "On selected Saturdays and Sundays, if we're around, we'd love to share a favourite sunrise trail or a quiet corner of Nainital that rarely appears on a map.",
    },
  ],
  [
    {
      title: "Arriving Made Easy",
      subtitle: "Parking & Local Transport",
      body: "Nainital is best explored on foot, and like much of the town, private parking is limited. If you're arriving by car, we'll happily help you find the most convenient nearby parking and get you settled in.",
    },
    {
      title: "Bring Your Companion",
      subtitle: "Pet Friendly",
      body: "The mountains are better shared. Pets are always welcome. As we're surrounded by forests and wildlife, we simply recommend keeping them indoors after dark.",
    },
    {
      title: "Just Ask",
      subtitle: "Local Recommendations",
      body: "Looking for the best chai after sunrise? A quiet café? A lesser-known viewpoint? Or planning a day trip beyond Nainital? We're always happy to point you in the right direction.",
    },
  ],
];

function Navbar({ dark }: { dark: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const logo = dark ? "#ffffff" : "#040000";
  const link = dark ? "#d9d4cc" : "#040000";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const NAV_ITEMS = [
    { label: "STORY", id: "story" },
    { label: "GALLERY", id: "gallery" },
    { label: "EXPERIENCE", id: "experience" },
    { label: "LOCATION", id: "location" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-6 transition-colors duration-500">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ fontFamily: CG, color: logo, fontSize: 16, fontWeight: 400, letterSpacing: "0.2em" }}
        className="md:text-[18px] transition-colors duration-500 whitespace-nowrap"
      >
        A A H A N
      </button>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-x-10">
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={label}
            onClick={() => scrollTo(id)}
            style={{ fontFamily: CG, color: link, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}
            className="transition-colors duration-500 whitespace-nowrap"
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("location")}
        style={{ fontFamily: CG, color: link, fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}
        className="hidden md:block transition-colors duration-500 whitespace-nowrap"
      >
        BOOK YOUR STAY
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          style={{
            width: 22,
            height: 2,
            background: menuOpen ? "#d9d4cc" : logo,
            transition: "all 0.3s",
            transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
          }}
        />
        <span
          style={{
            width: 22,
            height: 2,
            background: menuOpen ? "#d9d4cc" : logo,
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: 22,
            height: 2,
            background: menuOpen ? "#d9d4cc" : logo,
            transition: "all 0.3s",
            transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
          }}
        />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black flex flex-col items-center justify-center gap-8"
          style={{ zIndex: 40 }}
        >
          {NAV_ITEMS.map(({ label, id }) => (
            <button
              key={label}
              onClick={() => scrollTo(id)}
              style={{ fontFamily: CG, color: "#d9d4cc", fontSize: 20, fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("location")}
            style={{ fontFamily: CG, color: "#ffd68b", fontSize: 20, fontWeight: 700, letterSpacing: "0.1em" }}
          >
            BOOK YOUR STAY
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── Experience card ─── */
function ExpCard({ img, alt, title, body }: { img: string; alt: string; title: string; body: string }) {
  return (
    <div className="relative overflow-hidden group cursor-pointer h-full">
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out md:group-hover:scale-105"
      />
      {/* Dark overlay — off on mobile, fades in on hover for desktop only */}
      <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/60 transition-all duration-500 ease-in-out" />
      {/* Text block — always visible on mobile, slides up from below on desktop hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <p
          style={{
            fontFamily: CG,
            fontSize: "clamp(18px,4.5vw,22px)",
            fontWeight: 700,
            color: "#ffd68b",
            marginBottom: 10,
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontFamily: EBG,
            fontSize: "clamp(13px,3.5vw,15px)",
            fontWeight: 400,
            color: "#fff8f8",
            lineHeight: 1.6,
            textShadow: "0 1px 6px rgba(0,0,0,0.8)",
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

/* ─── App ─── */
export default function App() {
  const [darkNav, setDarkNav] = useState(true);
  const [slide, setSlide] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 80;
      const isLight = LIGHT_SECTIONS.some((id) => {
        const el = sectionRefs.current[id];
        return el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight;
      });
      setDarkNav(!isLight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reg = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="w-full bg-black overflow-x-hidden">
      <Navbar dark={darkNav} />

      {/* ── 1. HERO ─────────────────────────────────── */}
      <section className="relative w-full bg-black h-[100svh]">
        <div className="absolute left-0 right-0 overflow-hidden top-[8%] bottom-[16%] md:top-[10%] md:bottom-[13%]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${heroImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center 42%",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/70" />
        </div>

        <div className="absolute left-0 right-0 bottom-0 flex flex-col md:flex-row md:items-end md:justify-between gap-3 px-6 md:px-10 pb-6 md:pb-8 h-[16%] md:h-[13%] justify-end">
          <div>
            <p style={{ fontFamily: CG, fontSize: "clamp(13px,3.8vw,16px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.5 }}>
              Wake with Aahan.
            </p>
            <p style={{ fontFamily: CG, fontSize: "clamp(13px,3.8vw,16px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.5 }}>
              Sunrises, mountain views, and the charm of Nainital.
            </p>
          </div>
          <p style={{ fontFamily: EBG, fontSize: "clamp(11px,3vw,13px)", fontWeight: 400, color: "#ffd68b" }}>
            Nainital, Uttarakhand &nbsp;·&nbsp; 2,084m
          </p>
        </div>
      </section>

      {/* ── 2. STORY ────────────────────────────────── */}
      <section id="story" ref={reg("story")} className="bg-black">
        <div className="flex flex-col md:flex-row md:min-h-screen">
          <div className="shrink-0 overflow-hidden w-full h-[45vh] md:w-[34%] md:h-[80vh] md:mt-[95px] md:ml-[44px]">
            <img src={storyImg} alt="Nainital hillside" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 pt-10 pb-14 px-6 md:pt-32 md:pb-20 md:px-14 flex flex-col">
            <p style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#ffd68b", marginBottom: 20, letterSpacing: "0.05em" }}>
              Our Story
            </p>
            <div
              style={{ fontFamily: EBG, fontSize: "clamp(15px,4vw,18px)", fontWeight: 400, color: "#fff8f8", lineHeight: 1.75 }}
              className="space-y-4"
            >
              <p>Some dreams arrive quietly.</p>
              <p>
                Ours began on a cold morning in Nainital, watching the first rays of sunlight slip across the mountains.
                The town below was still waking. The streets were quiet. The lake reflected the fading night, and for a
                few unhurried moments, nothing seemed to ask for our attention.
              </p>
              <p>Only the mountains.</p>
              <p>Only the light.</p>
              <p>
                That morning stayed with us long after the sun had risen. It wasn't just the view — it was the feeling
                that life could move a little slower here.
              </p>
              <p>That feeling became Aahan.</p>
              <p>
                Named after the first light of the day, Aahan is our vision of a place that captures what makes Nainital
                unforgettable. Mornings spent watching the peaks glow gold. Walks through the familiar bustle of Mall
                Road. Evenings wrapped in the cool mountain air. And the quiet comfort of returning to a space that
                feels like home.
              </p>
              <p>We're not building just another place to stay.</p>
              <p>
                We're creating a place that lets you experience Nainital the way we fell in love with it, one sunrise
                at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. GALLERY ──────────────────────────────── */}
      <section
        id="gallery"
        ref={reg("gallery")}
        className="bg-[#fef7ee] flex flex-col justify-center py-16 md:py-0 md:h-screen"
      >
        <p
          className="text-center mb-6"
          style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#a86d00", letterSpacing: "0.08em" }}
        >
          Gallery
        </p>

        {/* Mobile gallery grid */}
        <div className="px-4 grid grid-cols-2 gap-2 md:hidden">
          <div className="overflow-hidden aspect-square">
            <img src={galleryForest} alt="Nainital Lake" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={galleryPortrait} alt="Nainital path" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={galleryCollection} alt="Nainital signpost" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={galleryLake} alt="Café Lakeside" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden h-[20vh] col-span-2">
            <img src={galleryWide} alt="Snowy mountain" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden h-[20vh] col-span-2">
            <img src={galleryPanorama} alt="Prayer flags panorama" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop gallery grid */}
        <div
          className="hidden md:grid px-10"
          style={{
            gridTemplateColumns: "26fr 24fr 18fr 32fr",
            gridTemplateRows: "42vh 32vh",
            gap: 5,
          }}
        >
          <div style={{ gridColumn: "1", gridRow: "1", overflow: "hidden" }}>
            <img src={galleryForest} alt="Nainital Lake" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "2", gridRow: "1 / 3", overflow: "hidden" }}>
            <img src={galleryPortrait} alt="Nainital path" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "3", gridRow: "1", overflow: "hidden" }}>
            <img src={galleryCollection} alt="Nainital signpost" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "4", gridRow: "1", overflow: "hidden" }}>
            <img src={galleryWide} alt="Snowy mountain" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "1", gridRow: "2", overflow: "hidden" }}>
            <img src={galleryLake} alt="Café Lakeside" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "3 / 5", gridRow: "2", overflow: "hidden" }}>
            <img src={galleryPanorama} alt="Prayer flags panorama" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 4. Property photos ──────────────────────────────── */}
      <section
        id="Property Photos"
        ref={reg("Property Photos")}
        className="bg-[#fef7ee] flex flex-col justify-center py-16 md:py-0 md:h-screen"
      >
        <p
          className="text-center mb-6"
          style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#a86d00", letterSpacing: "0.08em" }}
        >
          Property Photos
        </p>

        {/* Mobile gallery grid */}
        <div className="px-4 grid grid-cols-2 gap-2 md:hidden">
          <div className="overflow-hidden aspect-square">
            <img src={propertyLiving} alt="Living room" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={propertyBedroom} alt="Bedroom" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={propertyBathroom} alt="Bathroom" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden aspect-square">
            <img src={propertyKitchen} alt="Kitchen" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden h-[20vh] col-span-2">
            <img src={propertyBalcony} alt="Balcony view" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden h-[20vh] col-span-2">
            <img src={propertyExterior} alt="Property exterior" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop gallery grid */}
        <div
          className="hidden md:grid px-10"
          style={{
            gridTemplateColumns: "26fr 24fr 18fr 32fr",
            gridTemplateRows: "42vh 32vh",
            gap: 5,
          }}
        >
          <div style={{ gridColumn: "1", gridRow: "1", overflow: "hidden" }}>
            <img src={propertyLiving} alt="Living room" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "2", gridRow: "1 / 3", overflow: "hidden" }}>
            <img src={propertyBedroom} alt="Bedroom" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "3", gridRow: "1", overflow: "hidden" }}>
            <img src={propertyBathroom} alt="Bathroom" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "4", gridRow: "1", overflow: "hidden" }}>
            <img src={propertyKitchen} alt="Kitchen" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "1", gridRow: "2", overflow: "hidden" }}>
            <img src={propertyBalcony} alt="Balcony view" className="w-full h-full object-cover" />
          </div>
          <div style={{ gridColumn: "3 / 5", gridRow: "2", overflow: "hidden" }}>
            <img src={propertyExterior} alt="Property exterior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* ── 5. EXPERIENCE ───────────────────────────── */}
      <section
        id="experience"
        ref={reg("experience")}
        className="bg-black flex flex-col justify-center py-16 md:py-0 md:h-screen"
      >
        <div className="px-6 md:px-10 mb-8">
          <p style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#ffd68b", marginBottom: 12, letterSpacing: "0.05em" }}>
            Days at Aahan
          </p>
          <p style={{ fontFamily: CG, fontSize: "clamp(14px,4vw,16px)", fontWeight: 400, color: "#ffffff", maxWidth: 860, lineHeight: 1.65 }}>
            The mountains have a way of calling everyone differently. Some answer with long hikes through the pines.
            Others with a quiet sunrise and a cup of chai overlooking the hills. However Nainital speaks to you,
            we'll help you discover it.
          </p>
        </div>

        {/* Mobile: stacked cards */}
        <div className="px-6 flex flex-col gap-4 md:hidden">
          {EXP_CARDS.map((card) => (
            <ExpCard key={card.title} {...card} />
          ))}
        </div>

        {/* Desktop: 25/47/28 grid */}
        <div
          className="hidden md:grid px-10"
          style={{ gridTemplateColumns: "25fr 47fr 28fr", height: "60vh", gap: 8 }}
        >
          {EXP_CARDS.map((card) => (
            <ExpCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      {/* ── 6. BEFORE YOU ARRIVE ────────────────────── */}
      <section
        id="before-arrive"
        ref={reg("before-arrive")}
        className="bg-[#fef7ee] px-6 md:px-10 flex flex-col justify-center py-16 md:py-0 md:h-screen"
      >
        <p style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#a86d00", marginBottom: 16, letterSpacing: "0.05em" }}>
          Before You Arrive.
        </p>
        <p style={{ fontFamily: EBG, fontSize: "clamp(16px,4.5vw,20px)", fontWeight: 400, color: "#000000", maxWidth: 400, lineHeight: 1.55, marginBottom: 32 }}>
          If this is your first time in Nainital, we've put together a few things that we think you'll find helpful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-[19.8%]">
          {SLIDES[slide].map((card) => (
            <div
              key={card.title}
              className="bg-[#fef7ee]"
              style={{ boxShadow: "0px 4px 25px 0px #c7c7cc", padding: "24px 20px", minHeight: 220 }}
            >
              <p style={{ fontFamily: CG, fontSize: 18, fontWeight: 700, color: "#000", marginBottom: 12, lineHeight: 1.2 }}>
                {card.title}
              </p>
              {card.subtitle && (
                <p style={{ fontFamily: EBG, fontSize: 15, fontWeight: 400, color: "#000", marginBottom: 6 }}>
                  {card.subtitle}
                </p>
              )}
              <p style={{ fontFamily: EBG, fontSize: 15, fontWeight: 400, color: "#000", lineHeight: 1.6 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10" style={{ gap: 0 }}>
          <button
            onClick={() => setSlide(0)}
            aria-label="Slide 1"
            className="w-[70px] md:w-[140px]"
            style={{
              height: 5,
              background: slide === 0 ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
          <button
            onClick={() => setSlide(1)}
            aria-label="Slide 2"
            className="w-[70px] md:w-[140px]"
            style={{
              height: 5,
              background: slide === 1 ? "rgba(0,0,0,0.8)" : "rgba(102,99,95,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        </div>
      </section>

      {/* ── 7. LOCATION ─────────────────────────────── */}
      <section id="location" ref={reg("location")} className="bg-black md:h-screen">
        <div className="flex flex-col md:flex-row md:h-full">
          <div className="shrink-0 overflow-hidden w-full h-[300px] md:w-[45%] md:h-[80vh] md:mt-[95px] md:ml-[44px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5535.605431541714!2d79.45923982484247!3d29.38607839735613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0a19ba26f7165%3A0x5194a600e389fef8!2sAAHAN!5e0!3m2!1sen!2sin!4v1784139751342!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aahan location map"
            />
          </div>

          <div className="flex-1 pt-10 pb-14 px-6 md:pt-36 md:pb-20 md:px-14 flex flex-col">
            <p style={{ fontFamily: CG, fontSize: "clamp(12px,3.5vw,14px)", fontWeight: 400, color: "#ffd68b", marginBottom: 28, letterSpacing: "0.05em" }}>
              Getting Here
            </p>
            <div style={{ fontFamily: EBG, fontSize: "clamp(14px,4vw,17px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.7, marginBottom: 36 }}>
              <p style={{ fontWeight: 700, marginBottom: 6 }}>Nainital, Uttarakhand</p>
              <p>
                Tucked into the hillside just above Mall Road, Aahan is easy to reach while remaining quietly connected
                to the mountains. However you choose to travel, the journey into Kumaon is as much a part of the
                experience as the stay itself.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { mode: "By Air", detail: "Pantnagar Airport — Approximately 68 km away." },
                { mode: "By Train", detail: "Kathgodam Railway Station — Approximately 34 km away." },
                { mode: "By Road", detail: "Around 300 km from Delhi, the drive takes approximately 6–7 hours, winding through the foothills before reaching Nainital." },
              ].map(({ mode, detail }) => (
                <div key={mode}>
                  <p style={{ fontFamily: CG, fontSize: "clamp(17px,4.5vw,20px)", fontWeight: 700, color: "#ffffff", marginBottom: 6 }}>
                    {mode}
                  </p>
                  <p style={{ fontFamily: EBG, fontSize: "clamp(14px,4vw,16px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.6 }}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. UNTIL NEXT SUNRISE + FOOTER ──────────── */}
      <section className="bg-black flex flex-col md:h-screen">
        <div className="relative h-[40vh] md:h-[55vh]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${footerSunset})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
            <div style={{ width: 60, height: 1, background: "#ffd68b", marginBottom: 10 }} />
            <p style={{ fontFamily: CG, fontSize: "clamp(18px,5.5vw,24px)", fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>
              Until Next Sunrise.
            </p>
            <p style={{ fontFamily: CG, fontSize: "clamp(18px,5.5vw,24px)", fontWeight: 400, color: "#ffffff", lineHeight: 1.55 }}>
              Thank you for being here.
              <br />
              We can't wait to welcome you to Aahan
            </p>
          </div>
        </div>

        <div className="px-6 md:px-10 flex-1 flex items-center py-12 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1.8fr] gap-10 md:gap-[60px] items-start w-full">
            <div>
              <p style={{ fontFamily: CG, fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 10, letterSpacing: "0.1em" }}>
                A A H A N
              </p>
              <div style={{ width: 80, height: 1, background: "#ffd68b", marginBottom: 16 }} />
              <p style={{ fontFamily: EBG, fontSize: 15, fontWeight: 400, color: "#fff9f9", lineHeight: 1.8, marginBottom: 16 }}>
                Mount Rose, Shiv Mandir,<br />
                Tallital, Nainital,<br />
                Uttrakhand, India — 263001
              </p>
              <div style={{ width: 80, height: 1, background: "#ffd68b", marginBottom: 14 }} />
              <p
                style={{
                  fontFamily: EBG,
                  fontSize: 15,
                  fontWeight: 400,
                  color: "#fff9f9",
                  lineHeight: 1.8,
                }}
              >
                <a
                  href="https://wa.me/916397568296"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  +91 6397568296
                </a>
                <br />
                <a
                  href="mailto:stayaahan@gmail.com"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  stayaahan@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p style={{ fontFamily: CG, fontSize: 15, fontWeight: 400, color: "#ffd68b", marginBottom: 22, letterSpacing: "0.05em" }}>
                Stay connected
              </p>
              <div className="space-y-5">

                <a
                  href="https://www.instagram.com/stayaahan?igsh=MWIzZ2xmMXVyNm8wMQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 22, height: 22 }}
                  >
                    <Instagram
                      size={22}
                      color="white"
                      strokeWidth={1.5}
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                  <span
                    style={{ fontFamily: EBG, fontSize: 15, color: "#fff9f9" }}
                  >
                    Instagram
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
                    <img src={airbnbImg} alt="Airbnb" style={{ width: 22, height: 22, objectFit: "contain", opacity: 0.7 }} />
                  </div>
                  <span style={{ fontFamily: EBG, fontSize: 15, color: "#fff9f9" }}>Airbnb</span>
                </div>
                <a
                  href="https://maps.app.goo.gl/aeq4ev5fSncqJFyb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 22, height: 22 }}
                  >
                    <MapPin
                      size={22}
                      color="white"
                      strokeWidth={1.5}
                      style={{ opacity: 0.7 }}
                    />
                  </div>
                  <span
                    style={{ fontFamily: EBG, fontSize: 15, color: "#fff9f9" }}
                  >
                    Google Maps
                  </span>
                </a>
              </div>
            </div>
            
            <div>
              <p style={{ fontFamily: CG, fontSize: 15, fontWeight: 400, color: "#ffd68b", marginBottom: 6, letterSpacing: "0.05em" }}>
                A short note from us
              </p>
              <p style={{ fontFamily: CG, fontSize: 15, fontWeight: 400, color: "#fff9f9", marginBottom: 12 }}>
                From Our Home to Yours.
              </p>
              <div style={{ width: 80, height: 1, background: "#ffd68b", marginBottom: 14 }} />
              <p style={{ fontFamily: EBG, fontSize: 14, fontWeight: 400, color: "#fff9f9", lineHeight: 1.85 }}>
                If you've made it this far, thank you.
                <br />
                This place means a great deal to us, and it's a privilege to share it with others. We hope your stay
                is filled with slow mornings, long conversations, quiet walks, and sunsets you'll remember long after
                you've gone home.
                <br /><br />
                We'll be here whenever you feel like returning.
              </p>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-10 pb-4 flex justify-end">
          <p style={{ fontFamily: EBG, fontSize: 12, color: "#ffffff", opacity: 0.6 }}>© 2026 Aahan</p>
        </div>
      </section>
    </div>
  );
}