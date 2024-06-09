import { useRef, useState } from "react";

import { Swiper } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

import city_3840_2160 from "./assets/city_3840_2160.jpg";
import front_1920_1280 from "./assets/front_1920_1280.jpg";
import hall_1728_1152 from "./assets/hall_1728_1152.jpg";
import top_1920_1080 from "./assets/top_1920_1080.png";
import trees_4800_2700 from "./assets/trees_4800_2700.jpg";
import view_4800_2700 from "./assets/view_4800_2700.jpg";
import village_6000_4000 from "./assets/village_6000_4000.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";

function App() {
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);
  const onAutoplayTimeLeft = (
    swiper: Swiper,
    timeLeft: number,
    percentage: number
  ) => {
    progressCircle.current?.style.setProperty(
      "--progress",
      `${1 - percentage}`
    );
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
    }

    if (autoPlayEnabled !== swiper.autoplay.running) {
      setAutoPlayEnabled(swiper.autoplay.running);
    }
  };

  return (
    <div style={{ height: "100dvh" }}>
      <SwiperReact
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <img
            src={city_3840_2160}
            width="3840"
            height="2160"
            alt="Image of city"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={top_1920_1080}
            width="1920"
            height="1280"
            alt="Top down view of sand"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={hall_1728_1152}
            width="1728"
            height="1152"
            alt="Dark interior hallway"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={front_1920_1280}
            width="1920"
            height="1280"
            alt="Tucson building front"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={view_4800_2700}
            width="4800"
            height="2700"
            alt="Look out across walkway"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={trees_4800_2700}
            width="4800"
            height="2700"
            alt="Site plan with trees"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={village_6000_4000}
            width="6000"
            height="4000"
            alt="Image of village"
          />
        </SwiperSlide>

        {autoPlayEnabled && (
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        )}
      </SwiperReact>
    </div>
  );
}

export default App;
