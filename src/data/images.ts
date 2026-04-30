import brocconi from "../assets/sketches/brocconi_671_809.png";
import catholicChurch from "../assets/sketches/catholic_church_710_864.png";
import kunsthausZurich from "../assets/sketches/kunsthaus_zurich_595_788.png";
import stBenedict from "../assets/sketches/st_benedict_612_831.png";
import thermeVals from "../assets/sketches/therme_vals_287_327.png";
import exteriorFrontDark from "../assets/montrose/exterior_front_dark_2550_1650.jpeg";
import exteriorFrontWithChildren from "../assets/montrose/exterior_front_with_children_2550_1650.jpeg";
import exteriorRear from "../assets/montrose/exterior_rear_2550_1650.jpeg";
import interiorPews from "../assets/montrose/interior_pews_2550_1650.jpeg";
import interiorPlayRoom from "../assets/montrose/interior_play_room_2550_1650.jpeg";
import interiorService from "../assets/montrose/interior_service_2550_1650.jpeg";
import type { ImageMetadata } from "astro";

export type SiteImage = {
  src: ImageMetadata;
  alt: string;
  caption: string;
  widths: number[];
  sizes: string;
  format: "jpeg" | "png";
};

const sketchWidths = [360, 540];
const projectWidths = [640, 960, 1400, 2000];

export const sketchImages = [
  {
    src: brocconi,
    alt: "brocconi sketch",
    caption: "study sketch / brocconi",
    widths: sketchWidths,
    sizes: "(min-width: 900px) 360px, 80vw",
    format: "png",
  },
  {
    src: catholicChurch,
    alt: "catholic church sketch",
    caption: "study sketch / catholic church",
    widths: sketchWidths,
    sizes: "(min-width: 900px) 360px, 80vw",
    format: "png",
  },
  {
    src: kunsthausZurich,
    alt: "kunsthaus zurich sketch",
    caption: "study sketch / kunsthaus zurich",
    widths: sketchWidths,
    sizes: "(min-width: 900px) 360px, 80vw",
    format: "png",
  },
  {
    src: stBenedict,
    alt: "st benedict sketch",
    caption: "study sketch / st benedict",
    widths: sketchWidths,
    sizes: "(min-width: 900px) 360px, 80vw",
    format: "png",
  },
  {
    src: thermeVals,
    alt: "therme vals sketch",
    caption: "study sketch / therme vals",
    widths: [240],
    sizes: "(min-width: 900px) 240px, 80vw",
    format: "png",
  },
] satisfies SiteImage[];

export const projectImages = [
  {
    src: exteriorFrontWithChildren,
    alt: "montrose sanctuary exterior featuring children playing",
    caption: "front approach",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
  {
    src: interiorPews,
    alt: "montrose sanctuary interior pews",
    caption: "sanctuary interior",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
  {
    src: exteriorRear,
    alt: "montrose sanctuary exterior rear",
    caption: "rear elevation",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
  {
    src: interiorPlayRoom,
    alt: "montrose sanctuary children's play room",
    caption: "children's room",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
  {
    src: exteriorFrontDark,
    alt: "montrose sanctuary exterior front at night",
    caption: "evening exterior",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
  {
    src: interiorService,
    alt: "montrose sanctuary interior during service",
    caption: "gathering",
    widths: projectWidths,
    sizes: "(min-width: 900px) 450px, 100vw",
    format: "jpeg",
  },
] satisfies SiteImage[];
