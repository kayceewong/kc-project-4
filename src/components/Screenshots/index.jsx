import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, FreeMode, Pagination, Lazy } from 'swiper/core'
import Image from 'next/image'
import css from './styles.module.css'

import 'swiper/css'
import 'swiper/css/pagination'

SwiperCore.use([Autoplay, FreeMode, Pagination, Lazy])

export function Screenshots({ screenshots }) {
  return (
    <div className={css.container}>
      <Swiper
        style={{
          '--swiper-pagination-color': 'hsl(247, 82%, 66%)'
        }}
        lazy
        slidesPerView="auto"
        pagination={{
          type: 'progressbar'
        }}
        navigation
        className={css.slider}
        autoplay={{ delay: 3000 }}
      >
        {screenshots?.map((sc, idx) => (
          <SwiperSlide key={idx}>
            <div className={css.image}>
              <Image
                src={sc.image}
                alt=""
                layout="responsive"
                width={1000}
                height={563}
                className={css.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
