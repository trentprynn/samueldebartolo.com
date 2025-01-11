import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  NavLink,
} from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { FaCircle, FaCircleNotch } from "react-icons/fa6";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/montrose" element={<MontroseSanctuary />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="flex items-center justify-end h-80">
      <h1 className="text-2xl">samuel debartolo</h1>
    </div>
  );
}

function MontroseSanctuary() {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">montrose sanctuary</h1>
        <p className="mt-2 text-xs font-thin">october 2023 - present</p>
      </div>

      <div className="flex flex-wrap gap-8 mt-4">
        <LazyImage
          src="/assets/montrose/before_3992_3100.jpg"
          alt="Montrose Sanctuary exterior before renovation"
          className="object-cover w-48 md:w-72"
          width={3992}
          height={3100}
        />
        <LazyImage
          src="/assets/montrose/render_one_3992_3100.jpg"
          alt="Montrose Sanctuary external render"
          className="object-cover w-48 md:w-72"
          width={3992}
          height={3100}
        />
        <LazyImage
          src="/assets/montrose/render_two_2782_2160.jpg"
          alt="Montrose Sanctuary interior render"
          className="object-cover w-48 md:w-72"
          width={2782}
          height={2160}
        />
      </div>

      <div className="mt-4">
        <p>
          A sensitive renovation of a 1960s historic church in the heart of
          Houston, Texas. The design seeks to distill the essence of sacred
          worship and foster authentic community connection, all within the
          quiet discipline of a restrained budget. The project embraces what is
          essential, allowing the space to breathe and resonate with those who
          gather, cultivating an atmosphere of reverence and simplicity.
        </p>
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
        <div className="absolute inset-0 flex items-center justify-center bg-white/70">
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
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <div className="flex-none w-14 h-dvh overflow-hidden">
          <SideNav />
        </div>

        <div className="flex-1 h-dvh overflow-auto px-5 pt-3 pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function SideNav() {
  return (
    <div className="h-full flex flex-col justify-between">
      <SideNavEntry
        href="/montrose"
        activeIcon={<img src="/assets/montrose/3_windows_icon_587_589.png" />}
        inactiveIcon={<img src="/assets/montrose/block_587_589.png" />}
      />

      <SideNavEntry
        href="/"
        activeIcon={<FaCircleNotch size={30} />}
        inactiveIcon={<FaCircle size={30} />}
      />
    </div>
  );
}

function SideNavEntry({
  href,
  activeIcon,
  inactiveIcon,
}: {
  href: string;
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}) {
  return (
    <NavLink
      to={href}
      className="relative object-cover w-14 h-14 p-3 overflow-hidden hover:bg-zinc-100 flex items-center justify-center"
    >
      {({ isActive }) => (
        <>
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.div
                key="activeIcon"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
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
              >
                {inactiveIcon}
              </motion.div>
            )}
          </AnimatePresence>

          {isActive && <div className="w-1 h-4 bg-black absolute right-0" />}
        </>
      )}
    </NavLink>
  );
}

export default App;
