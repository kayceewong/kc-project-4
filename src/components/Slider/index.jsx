import { GamePreview } from '@/components/GamePreview'
import SwiperCore, { Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import css from './styles.module.css'
import 'swiper/css'

export function Slider({ slides }) {
  SwiperCore.use([Autoplay])

  return (
    <Swiper
      breakpoints={{
        551: { slidesPerView: 2 },
        800: { slidesPerView: 3 },
        1000: { slidesPerView: 4 },
        1601: { slidesPerView: 5 },
        2000: { slidesPerView: 8 }
      }}
      freeMode
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, FreeMode]}
      className={css.slider}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <GamePreview game={slide} fullsize />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
