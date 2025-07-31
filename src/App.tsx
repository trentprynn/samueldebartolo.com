import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  NavLink,
  useMatch,
  useLocation,
} from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FaSquareFull, FaRegSquareFull } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";

function App() {
  return (
    <BrowserRouter>
      <TrackingWrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </TrackingWrapper>
    </BrowserRouter>
  );
}

function Contact() {
  type SketchImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  const [currentImage, setCurrentImage] = useState<SketchImage | null>(null);
  const didMount = useRef(false);

  const sketchImages: SketchImage[] = [
    {
      src: "/assets/sketches/brocconi_2268_3024.png",
      alt: "Brocconi sketch",
      width: 2268,
      height: 3024,
    },
    {
      src: "/assets/sketches/catholic_church_2689_2930.png",
      alt: "Catholic Church sketch",
      width: 2689,
      height: 2930,
    },
    {
      src: "/assets/sketches/kunsthaus_zurich_3024_4032.png",
      alt: "Kunsthaus Zurich sketch",
      width: 3024,
      height: 4032,
    },
    {
      src: "/assets/sketches/st_benedict_2269_3024.png",
      alt: "St Benedict sketch",
      width: 2269,
      height: 3024,
    },
    {
      src: "/assets/sketches/therme_vals_998_1331.png",
      alt: "Therme Vals sketch",
      width: 998,
      height: 1331,
    },
  ];

  useEffect(() => {
    // This ensures the effect logic runs only once
    if (!didMount.current) {
      didMount.current = true;

      const lastViewed = localStorage.getItem("lastViewedSketch");
      let availableImages = [...sketchImages];

      if (lastViewed) {
        availableImages = availableImages.filter(
          (img) => img.src !== lastViewed,
        );
      }

      if (availableImages.length === 0) {
        availableImages = [...sketchImages];
      }

      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const selected = availableImages[randomIndex];

      setCurrentImage(selected);
      localStorage.setItem("lastViewedSketch", selected.src);
    }
  }, []);

  return (
    <div className="flex flex-col justify-end items-end md:flex-row md:items-start md:pt-[5rem] gap-6">
      <div className="order-2 md:order-1">
        {currentImage && (
          <LazyImage
            src={currentImage.src}
            alt={currentImage.alt}
            className="object-cover w-[300px] md:w-[400px]"
            width={currentImage.width}
            height={currentImage.height}
          />
        )}
      </div>
      <div className="flex flex-col items-end text-right order-1 md:pt-18 md:order-2">
        <h1 className="text-2xl">samuel debartolo </h1>
        <h2 className="text-xs font-semibold">studio</h2>
        <a href="tel:+16026530533" className="pt-10 text-sm">
          602.327.0390
        </a>
        <a href="mailto:studio@samueldebartolo.com" className="text-sm">
          studio@samueldebartolo.com
        </a>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div>
      <div className="flex flex-col items-end text-right">
        <h1 className="text-2xl font-thin">sojourn montrose</h1>
        <p className="mt-5 max-w-[50rem]">
          while finishing my graduate thesis I began to aid a small
          houston-based church in developing a property for their weekly
          gathering. the goal was to lightly touch an existing historic church
          while also creating a beautiful and sacred internal experience for
          worship. the design strips the building back to its raw materials and
          lets the work breath with updated light and air qualities.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8 justify-end">
        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_with_children_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior featuring children playing"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_old_2550_1650.jpeg"
            alt="Montrose Sanctuary front exterior before renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />

          <LazyImage
            src="/assets/montrose/exterior_front_bright_2550_1650.jpeg"
            alt="Montrose Sanctuary front exterior after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_pews_old_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews before renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />

          <LazyImage
            src="/assets/montrose/interior_pews_2_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_rear_old_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews before renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />

          <LazyImage
            src="/assets/montrose/exterior_rear_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior rear after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_pews_with_people_2_2550_1650.jpeg"
            alt="Montrose Sanctuary interior after renovation with people gathered"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-4">
          <div className="flex-1">
            <LazyImage
              src="/assets/montrose/interior_pews_with_people_1_2550_1650.jpeg"
              alt="Montrose Sanctuary interior after renovation with people gathered"
              className="object-cover"
              width={2550}
              height={1650}
            />
          </div>
          <div className="flex-1" />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-4">
          <div className="flex-1" />
          <div className="flex-1">
            <LazyImage
              src="/assets/montrose/interior_play_room_2550_1650.jpeg"
              alt="Montrose Sanctuary children's play room after renovation"
              className="object-cover"
              width={2550}
              height={1650}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_hallway_with_child_2550_1650.jpeg"
            alt="Montrose Sanctuary interior hallway featuring child after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />

          <LazyImage
            src="/assets/montrose/interior_pews_1_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>

        <div className="flex flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_dark_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior front at night after renovation"
            className="object-cover"
            width={2550}
            height={1650}
          />
        </div>
      </div>
    </div>
  );
}

function LazyImage({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // decode() resolves even for cached assets and runs *after* mount,
    // guaranteeing at least one render where `loaded` is still false.
    const img = new Image();
    img.src = src;
    img
      .decode()
      .catch(() => {}) // ignore decode errors
      .then(() => setLoaded(true));
  }, [src]);

  return (
    <motion.div
      // container lets us keep the spinner in the same stacking context
      className={`relative ${className ?? ""}`}
      initial={{ opacity: 0 }} // always start invisible
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-600" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="block w-full h-full object-cover"
      />
    </motion.div>
  );
}

function Layout() {
  return (
    <div className="relative overflow-auto h-dvh bg-[#121212] text-white font-thin">
      <div className="fixed top-0 left-0 w-[140px]">
        <SideNav />
      </div>

      <div className="flex flex-row justify-end ml-[140px] px-5 pt-3 pb-10">
        <div className="max-w-[700px] w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <>
      <SideNavEntry
        href="/work"
        activeIcon={<FaRegSquareFull size={14} />}
        inactiveIcon={<FaSquareFull size={14} />}
        text="built work"
      />
      <SideNavEntry
        href="/"
        activeIcon={<FaRegSquareFull size={14} />}
        inactiveIcon={<FaSquareFull size={14} />}
        text="contact"
      />
    </>
  );
}

function SideNavEntry({
  href,
  activeIcon,
  inactiveIcon,
  text,
  className,
}: {
  href: string;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
  text: string;
  className?: string;
}) {
  const isActive = useMatch(href);

  return (
    <div className={`flex items-center ${className}`}>
      <NavLink
        to={href}
        className="w-14 h-14 p-3 flex items-center justify-center relative overflow-hidden hover:bg-neutral-900 transition-all duration-200"
      >
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="activeIcon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex-shrink-0"
            >
              {activeIcon}
            </motion.div>
          ) : (
            <motion.div
              key="inactiveIcon"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="flex-shrink-0"
            >
              {inactiveIcon}
            </motion.div>
          )}
        </AnimatePresence>
      </NavLink>

      {isActive && (
        <p className="text-xs">
          <u>{text}</u>
        </p>
      )}
    </div>
  );
}

export function TrackingWrapper({ children }: { children: React.ReactNode }) {
  const MEASUREMENT_ID = "G-RW1SEYQ6C9";
  const isProd = import.meta.env.PROD;

  const location = useLocation();

  const initOnce = useRef(false);
  useEffect(() => {
    if (initOnce.current) return;
    if (!isProd) return;
    initOnce.current = true;
    ReactGA.initialize(MEASUREMENT_ID);
  }, [isProd]);

  useEffect(() => {
    if (!isProd) return;
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [isProd, location]);

  return <>{children}</>;
}

export default App;
