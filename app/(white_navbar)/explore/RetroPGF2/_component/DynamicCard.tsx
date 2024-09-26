import Trophy from '@carbon/icons-react/lib/Trophy'
import Events from '@carbon/icons-react/lib/Events'
import Image from 'next/image'
import Link from 'next/link'
import { handleCategoryRound2 } from '@/app/lib/common'
import { CategoryRound2 } from '../RetroType2'
import { cleanParamsName, numberWithCommas } from '@/app/lib/utils'

export default function DynamicCard({
  round = '3',
  icon,
  banner,
  title = '',
  description = '',
  category = 'Education',
  votes = 0,
  opRecieve = 0,
  rank = 0
}: {
  round?: string
  icon?: string
  banner?: string
  title?: string
  description?: string
  category?: CategoryRound2
  votes?: number
  opRecieve?: number
  rank : number
}) {
  return (
    <div
      className={`flex flex-col flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm max-h-[20rem] min-h-[12rem] relative bg-white overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-16 lg:h-20 overflow-hidden">
        <Image
          src={banner || '/random/OP-Banner.png'}
          alt="background image"
          // Not sure about the aspect ratio, so using object-fit
          className="opacity-75 object-cover z-10"
          fill
        />
      </div>

      {/* Round Indicator */}
      <div className="absolute top-1 right-1 bg-white px-1 py-0.5 rounded-[0.25rem] z-20">
        <p className="text-gray-600 text-[0.5rem] font-semibold leading-4 tracking-[0.05rem]">
          RetroPGF {round}
        </p>
      </div>

      {/* Avatar */}
      <div className="absolute top-10 lg:top-12 left-4 rounded-[0.25rem] bg-white flex flex-shrink-0 z-20 overflow-hidden">
        <Image
          src={icon || '/random/OP-Logo.png'}
          alt="icon image"
          className={`h-12 w-12 ${icon ? "bg-white" : "bg-[#FF0420]"}`}
          width={48}
          height={48}
        />
      </div>

      <div className="mt-20 lg:mt-[5.5rem]"></div>
      <div className="w-full h-full">
        <div className="p-4 flex flex-col justify-start items-start gap-3 h-full overflow-hidden">
          <div className="flex flex-col gap-0.5">
            <Link
              href={`/explore/RetroPGF2/${cleanParamsName(title)}`}
              className="text-sm font-bold text-gray-800 z-20 hover:underline line-clamp-1"
            >
              {title}
            </Link>
            <p className="text-sm font-normal text-gray-600 line-clamp-2 break-all">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {handleCategoryRound2(category)}
          </div>
          <div className="flex-grow"></div>
          <div className="flex gap-2">
            <Events size={20} />
            <div className="flex gap-1">
              <p className="text-sm font-semibold text-gray-800">
                {Math.ceil(votes).toString()}
              </p>
              <p className="text-sm font-light text-gray-600">Votes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Trophy size={20} />
            <div className="flex gap-1">
              <p className="text-sm font-semibold text-gray-800">
                {numberWithCommas(opRecieve.toFixed(2)||0)} OP
              </p>
              <p className="text-sm font-light text-gray-600">#{rank}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
