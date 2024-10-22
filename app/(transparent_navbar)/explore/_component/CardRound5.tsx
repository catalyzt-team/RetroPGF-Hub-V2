'use client'

import { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination, Controller } from 'swiper/modules'
import Link from 'next/link'
import ChevronRight from '@carbon/icons-react/lib/ChevronRight'
import ArrowLeft from '@carbon/icons-react/lib/ArrowLeft'
import ArrowRight from '@carbon/icons-react/lib/ArrowRight'
import { cleanParamsName } from '@/app/lib/utils'
import { iRetroPGF5Project } from '@/app/(white_navbar)/explore/RetroPGF5/RetroType5'
import RetroCard5 from '@/app/component/Card/RetroCardRound5'

interface iCardRound5 {
  title: string
  round5: iRetroPGF5Project[]
  cateRound5: Map<string, number>
}

export default function CardRound5({ title, round5, cateRound5 }: iCardRound5) {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const [state, setState] = useState({
    start: true,
    end: false,
    round5: round5,
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl flex items-center justify-center font-semibold text-gray-900">
          <div>{title} </div>
          <div className="ml-4 flex items-center text-[0.75rem] bg-red-50 font-medium text-red-700 px-2.5 py-3 h-6 rounded-full">
            {' '}
            <div className="animate-pulse w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            Live
          </div>
        </h2>

        <Link
          href={{
            pathname: `/explore/RetroPGF5`,
          }}
          className="lg:hidden flex gap-2"
        >
          <p className="text-sm font-semibold text-gray-600 hover:underline ">
            See all{' '}
          </p>
          <ChevronRight size={20} className="fill-gray-600" />
        </Link>
      </div>

      <div className="hidden lg:flex justify-between">
        <div className="flex flex-wrap gap-2">
          {Array.from(cateRound5).map(([category, count]) => (
            <Link
              href={`/explore/RetroPGF5/?category=${category}`}
              key={category}
              className={` lg:block h-8
                     hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                     rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900 border
                     `}
            >
              <p className=" text-sm font-normal ">
                {category} ({count})
              </p>
            </Link>
          ))}
        </div>

        <Link
          href={{
            pathname: `/explore/RetroPGF5`,
          }}
          className=" lg:block h-8
                hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
                rounded-full px-3 py-1.5 cursor-pointer transition-colors self-center shrink-0 text-slate-900 border
                "
        >
          <p className=" text-sm font-normal ">See all</p>
        </Link>
      </div>

      <div className="relative">
        {round5.length === 0 ? (
          <h6 className="text-xl text-gray-600 font-semibold text-center">
            0 Item Found
          </h6>
        ) : (
          <>
            <Swiper
              onSwiper={setSwiper}
              slidesPerView="auto"
              pagination={true}
              modules={[Pagination, Controller]}
              initialSlide={0}
              direction="horizontal"
              className="mt-4 swiper-container"
              onActiveIndexChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  start: e.isBeginning,
                  end: e.isEnd,
                }))
              }}
            >
              {round5.map((item, i) => (
                <SwiperSlide className="mb-10 lg:mb-12" key={i}>
                  <RetroCard5
                    title={item.name}
                    category={item.category ?? ''}
                    description={item.description ?? ''}
                    teamSize={item.team?.length ?? 0}
                    opRecieve={item.allocation}
                    rank={item.rank}
                    round="RetroPGF 5"
                    // vote={0}
                    icon={item.profileAvatarUrl ?? ''}
                    banner={item.projectCoverImageUrl ?? ''}
                    isEligible={true}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {!state.start && (
              <button
                title="Previous"
                className="
                        rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                        hidden lg:block absolute top-1/2 transform -translate-y-1/2 -left-6 cursor-pointer z-50"
                onClick={() => swiper?.slidePrev()}
              >
                <ArrowLeft size={24} className="fill-gray-900" />
              </button>
            )}

            {!state.end && (
              <button
                title="Next"
                className="
                    rounded-full p-1 bg-slate-100 hover:bg-slate-200 
                    hidden lg:block absolute top-1/2 transform -translate-y-1/2 -right-8 cursor-pointer z-50"
                onClick={() => swiper?.slideNext()}
              >
                <ArrowRight size={24} className="fill-gray-900" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
