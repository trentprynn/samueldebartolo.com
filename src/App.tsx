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
import {
  FaSquareFull,
  FaRegSquareFull,
  FaCircle,
  FaCircleNotch,
} from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Home() {
  type SketchImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  const [currentImage, setCurrentImage] = useState<SketchImage | null>(null);
  const didMount = useRef(false);

  // List of all available images
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
    <div className="flex flex-col justify-end items-end md:flex-row md:items-start pt-[5rem] gap-6">
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
      <div className="flex flex-col order-1 pt-24 md:order-2">
        <h1 className="text-2xl">samuel debartolo</h1>
      </div>
    </div>
  );
}

function Work() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-thin text-end">sojourn montrose</h1>
      </div>

      <div className="flex flex-wrap gap-8 mt-4 justify-end">
        <div className="flex flex-col gap-2">
          <LazyImage
            src="/assets/montrose/past_01_2685_2085.png"
            alt="Montrose Sanctuary exterior before renovation - img one"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <LazyImage
            src="/assets/montrose/past_02_2685_2085.png"
            alt="Montrose Sanctuary exterior before renovation - img two"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <p>past</p>
        </div>

        <div className="flex flex-col gap-2">
          <LazyImage
            src="/assets/montrose/present_01_2685_2085.png"
            alt="Montrose Sanctuary exterior during renovation - img one"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <LazyImage
            src="/assets/montrose/present_02_2685_2085.png"
            alt="Montrose Sanctuary exterior during renovation - img two"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <p>present</p>
        </div>

        <div className="flex flex-col gap-2">
          <LazyImage
            src="/assets/montrose/future_01_2685_2085.png"
            alt="Montrose Sanctuary exterior during renovation - img one"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <LazyImage
            src="/assets/montrose/future_02_2685_2085.png"
            alt="Montrose Sanctuary exterior during renovation - img two"
            className="object-cover w-52 md:w-72"
            width={2685}
            height={2085}
          />
          <p>future</p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="flex flex-col justify-end items-end md:flex-row md:items-start pt-[5rem] gap-6">
      <div className="order-2 md:order-1"></div>
      <div className="flex flex-col order-1 pt-24 md:order-2">
        <h1 className="text-2xl">samuel debartolo</h1>
        <a href="tel:+16026530533" className="pt-12">
          602.327.0390
        </a>
        <a href="mailto:samueldebartolo@me.com">samueldebartolo@me.com</a>
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
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-600" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <div className="relative overflow-hidden bg-[#121212] text-white font-thin min-h-dvh">
      <div className="absolute left-0 top-0 h-full">
        <SideNav />
      </div>

      <div className="h-dvh overflow-auto px-5 pt-3 pb-10 md:ml-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            /* No exit => old content is removed instantly */
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <div className="h-full flex flex-col">
      <SideNavEntry
        href="/work"
        activeIcon={<FaRegSquareFull size={14} />}
        inactiveIcon={<FaSquareFull size={14} />}
        text="built work"
      />
      <SideNavEntry
        href="/contact"
        activeIcon={<FaRegSquareFull size={14} />}
        inactiveIcon={<FaSquareFull size={14} />}
        text="contact"
      />
      {/* spacer */}
      <SideNavEntry
        href="/"
        activeIcon={<FaCircleNotch size={14} />}
        inactiveIcon={<FaCircle size={14} />}
        className="mt-auto"
        text="home"
      />
    </div>
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

export default App;
