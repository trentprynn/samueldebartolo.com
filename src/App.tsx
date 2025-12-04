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
            <Route index element={<Contact />} />
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
    <div className="flex flex-col gap-6">
      <a
        href="https://aia-arizona.org/award/sojourn-montrose/"
        target="_blank"
        className="lowercase"
      >
        aia arizona distinguished architecture / sojourn montrose
      </a>

      <a
        href="https://www.chron.com/news/houston-texas/article/montrose-church-sold-19404243.php"
        target="_blank"
        className="lowercase"
      >
        houston chronicle article on sojourn montrose
      </a>

      <a
        href="https://repository.rice.edu/items/4e6c2904-35f1-4b2d-b865-f88d476db349"
        target="_blank"
        className="lowercase"
      >
        rice architecture thesis publication
      </a>

      <a
        href="https://everyshelter.org/tukul-book/"
        target="_blank"
        className="lowercase"
      >
        every shelter publication / examinations in relief architecture
      </a>

      <a
        href="https://capla.arizona.edu/studio/spring-2021-richard-kennedy-fourth-year-prize"
        target="_blank"
        className="lowercase"
      >
        uofa bachelor of architecture prize
      </a>
    </div>
  );
}

function Contact() {
  type SketchImage = {
    src: string;
    alt: string;
  };

  const sketchImages: SketchImage[] = [
    {
      src: "/assets/sketches/brocconi_671_809.png",
      alt: "Brocconi sketch",
    },
    {
      src: "/assets/sketches/catholic_church_710_864.png",
      alt: "Catholic Church sketch",
    },
    {
      src: "/assets/sketches/kunsthaus_zurich_595_788.png",
      alt: "Kunsthaus Zurich sketch",
    },
    {
      src: "/assets/sketches/st_benedict_612_831.png",
      alt: "St Benedict sketch",
    },
    {
      src: "/assets/sketches/therme_vals_287_327.png",
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
    <div className="flex flex-row flex-wrap gap-12">
      <div className="">
        <h1 className="text-2xl">samuel debartolo</h1>
        <h2 className="text-xs font-semibold">studio</h2>

        <div className="mt-8">
          <p className="text-sm">
            <a href="tel:+16023270390">602.327.0390</a>
          </p>

          <p className="text-sm">
            <a href="mailto:studio@samueldebartolo.com">
              studio@samueldebartolo.com
            </a>
          </p>
        </div>
      </div>

      {currentImage ? (
        <LazyImage
          src={currentImage.src}
          alt={currentImage.alt}
          width={300}
          height={400}
        />
      ) : (
        <div className="w-[300px] h-[400px]" />
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
          src="/assets/montrose/interior_pews_2550_1650.jpeg"
          alt="Montrose Sanctuary interior pews"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/exterior_rear_2550_1650.jpeg"
          alt="Montrose Sanctuary exterior rear"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/interior_play_room_2550_1650.jpeg"
          alt="Montrose Sanctuary children's play room"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/exterior_front_dark_2550_1650.jpeg"
          alt="Montrose Sanctuary exterior front at night"
          width={300}
          height={195}
        />

        <LazyImage
          src="/assets/montrose/interior_service_2550_1650.jpeg"
          alt="Montrose Sanctuary interior during service"
          width={300}
          height={195}
        />
      </div>
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
  alt: string;
  width: number;
  height: number;
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
        className="cursor-zoom-in block object-fill"
      />

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        overlayClassName="fixed inset-0 bg-neutral-900 flex items-center justify-center z-50"
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
    <div className="p-6">
      <div className="flex flex-row justify-start sm:justify-center">
        <NavBar />
      </div>

      <div className="flex flex-row justify-start sm:justify-center">
        <div className="max-w-[700px] mt-10 md:mt-16">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="flex flex-row gap-12">
      <SideNavEntry href="/" text="contact" />
      <SideNavEntry href="/work" text="work" />
      <SideNavEntry href="/press" text="press" />
    </div>
  );
}

function SideNavEntry({ href, text }: { href: string; text: string }) {
  const isActive = useMatch(href);

  return (
    <NavLink to={href}>
      <p className={`text-base  ${isActive ? "font-bold" : ""}`}>{text}</p>
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
