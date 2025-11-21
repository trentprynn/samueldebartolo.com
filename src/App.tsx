import "./App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Modal from "react-modal";

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
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";

function App() {
  return (
    <BrowserRouter>
      <TrackingWrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/press" element={<Press />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </TrackingWrapper>
    </BrowserRouter>
  );
}

function Press() {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <a
        href="https://aia-arizona.org/award/sojourn-montrose/"
        target="_blank"
        className="lowercase"
      >
        2025 AIA Arizona: Distinguished Architecture / Sojourn Montrose
      </a>
    </div>
  );
}

function Home() {
  type SketchImage = {
    src: string;
    alt: string;
  };

  const sketchImages: SketchImage[] = [
    {
      src: "/assets/sketches/brocconi_680_907.png",
      alt: "Brocconi sketch",
    },
    {
      src: "/assets/sketches/catholic_church_807_879.png",
      alt: "Catholic Church sketch",
    },
    {
      src: "/assets/sketches/kunsthaus_zurich_907_1210.png",
      alt: "Kunsthaus Zurich sketch",
    },
    {
      src: "/assets/sketches/st_benedict_681_907.png",
      alt: "St Benedict sketch",
    },
    {
      src: "/assets/sketches/therme_vals_299_399.png",
      alt: "Therme Vals sketch",
    },
  ];

  const [currentImage, setCurrentImage] = useState<SketchImage | null>(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return;
    didMount.current = true;

    const STORAGE_KEY = "lastSketchSrc";
    const lastSrc = localStorage.getItem(STORAGE_KEY);

    let nextIndex = 0;

    if (lastSrc) {
      const idx = sketchImages.findIndex((img) => img.src === lastSrc);
      if (idx !== -1) {
        nextIndex = (idx + 1) % sketchImages.length; // next (wrap)
      } else {
        // unknown src – reset cycle
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    const selected = sketchImages[nextIndex];
    setCurrentImage(selected);
    localStorage.setItem(STORAGE_KEY, selected.src);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-2xl">samuel debartolo</h1>
        <h2 className="text-xs font-semibold">studio</h2>

        <a href="tel:+16026530533" className="pt-10 text-sm">
          602.327.0390
        </a>
        <a href="mailto:studio@samueldebartolo.com" className="text-sm">
          studio@samueldebartolo.com
        </a>
      </div>

      {currentImage && (
        <div className="mt-4">
          <LazyImage
            src={currentImage.src}
            alt={currentImage.alt}
            width={300}
            height={500}
          />
        </div>
      )}
    </div>
  );
}

function Work() {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-thin">sojourn montrose</h1>
        <p className="mt-5 max-w-200">
          while finishing my graduate thesis I began to aid a small
          houston-based church in developing a property for their weekly
          gathering. the goal was to lightly touch an existing historic church
          while also creating a beautiful and sacred internal experience for
          worship. the design strips the building back to its raw materials and
          lets the work breath with updated light and air qualities.
        </p>
      </div>

      <div className="flex flex-row flex-wrap gap-4 mt-8">
        <LazyImage
          src="/assets/montrose/exterior_front_with_children_2550_1650.jpeg"
          alt="Montrose Sanctuary exterior featuring children playing"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/interior_pews_2_2550_1650.jpeg"
          alt="Montrose Sanctuary interior pews after renovation"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/exterior_rear_2550_1650.jpeg"
          alt="Montrose Sanctuary exterior rear after renovation"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/interior_play_room_2550_1650.jpeg"
          alt="Montrose Sanctuary children's play room after renovation"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/exterior_front_dark_2550_1650.jpeg"
          alt="Montrose Sanctuary exterior front at night after renovation"
          width={300}
          height={195}
        />
      </div>

      {/*
      <div className="flex flex-wrap gap-4 mt-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_with_children_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior featuring children playing"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_old_2550_1650.jpeg"
            alt="Montrose Sanctuary front exterior before renovation"
            width={300}
            height={195}
          />

          <LazyImage
            src="/assets/montrose/exterior_front_bright_2550_1650.jpeg"
            alt="Montrose Sanctuary front exterior after renovation"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_pews_old_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews before renovation"
            width={300}
            height={195}
          />

          <LazyImage
            src="/assets/montrose/interior_pews_2_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews after renovation"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_rear_old_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews before renovation"
            width={300}
            height={195}
          />

          <LazyImage
            src="/assets/montrose/exterior_rear_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior rear after renovation"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_pews_with_people_2_2550_1650.jpeg"
            alt="Montrose Sanctuary interior after renovation with people gathered"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <LazyImage
              src="/assets/montrose/interior_pews_with_people_1_2550_1650.jpeg"
              alt="Montrose Sanctuary interior after renovation with people gathered"
              width={300}
              height={195}
            />
          </div>
          <div className="flex-1" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1" />
          <div className="flex-1">
            <LazyImage
              src="/assets/montrose/interior_play_room_2550_1650.jpeg"
              alt="Montrose Sanctuary children's play room after renovation"
              width={300}
              height={195}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <LazyImage
            src="/assets/montrose/interior_hallway_with_child_2550_1650.jpeg"
            alt="Montrose Sanctuary interior hallway featuring child after renovation"
            width={300}
            height={195}
          />

          <LazyImage
            src="/assets/montrose/interior_pews_1_2550_1650.jpeg"
            alt="Montrose Sanctuary interior pews after renovation"
            width={300}
            height={195}
          />
        </div>

        <div className="flex flex-row gap-4">
          <LazyImage
            src="/assets/montrose/exterior_front_dark_2550_1650.jpeg"
            alt="Montrose Sanctuary exterior front at night after renovation"
            width={300}
            height={195}
          />
        </div>
      </div>
      */}
    </>
  );
}

export function LazyImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LazyLoadImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        effect="blur"
        threshold={25}
        onClick={() => setOpen(true)}
        className="cursor-zoom-in"
      />

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        overlayClassName="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        className="outline-none"
        contentLabel={alt || "Image preview"}
      >
        <div className="relative" onClick={() => setOpen(false)}>
          <img
            src={src}
            alt={alt}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      </Modal>
    </>
  );
}

function Layout() {
  return (
    <>
      <NavBar />

      <main className="flex flex-row justify-center mt-5 p-5">
        <div className="max-w-[700px]">
          <Outlet />
        </div>
      </main>
    </>
  );
}

function NavBar() {
  return (
    <div className="flex flex-row justify-center gap-12">
      <SideNavEntry href="/" text="home" />
      <SideNavEntry href="/work" text="work" />
      <SideNavEntry href="/press" text="press" />
    </div>
  );
}

function SideNavEntry({ href, text }: { href: string; text: string }) {
  const isActive = useMatch(href);

  return (
    <NavLink
      to={href}
      className="h-[42px] p-3 hover:bg-neutral-900 transition-all duration-200"
    >
      <p className={`text-base  ${isActive ? "font-semibold underline" : ""}`}>
        {text}
      </p>
    </NavLink>
  );
}

function TrackingWrapper({ children }: { children: React.ReactNode }) {
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
