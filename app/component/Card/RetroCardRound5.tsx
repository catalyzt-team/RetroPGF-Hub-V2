import Trophy from '@carbon/icons-react/lib/Trophy'
import Events from '@carbon/icons-react/lib/Events'
import Image from 'next/image'
import Link from 'next/link'
import { handleProjectCategoryRound } from '@/app/lib/common'
import { cleanParamsName } from '@/app/lib/utils'

interface iRetroCard5 {
  marginX?: string
  icon?: string
  category?: string
  description?: string
  teamSize?: number
  opRecieve?: number
  rank?: number
  round?: string
  title?: string
  //   vote?: number
  banner?: string
  isEligible?: boolean
}

const formatDescriptionExploreCard = (
  description: string | undefined
): string => {
  if (!description) {
    return '' // or any default string you wish to return when description is undefined
  }
  if (description.length > 100) {
    return description.slice(0, 100) + '...'
  }
  return description
}

export default function RetroCard5({
  marginX = 'mx-3',
  icon,
  category,
  description,
  teamSize,
  opRecieve,
  rank,
  round,
  title,
  //   vote,
  banner,
  isEligible,
}: iRetroCard5) {
  return (
    <div
      className={`flex flex-col gap-2 flex-grow-1 flex-shrink-0 border rounded-lg shadow-sm h-[17rem] w-[14.25rem] relative ${marginX} overflow-hidden`}
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full max-h-14 overflow-hidden">
        <Image
          src={banner || '/random/OP-Banner.png'}
          alt="background image"
          // not sure that this image background is all the same or not
          className="opacity-50 object-cover z-10 "
          width={228}
          height={48}
        />
      </div>

      {/* Eligibility Status */}
      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-[0.25rem]">
        {isEligible === true ? (
          <div className="flex items-center text-[0.75rem] bg-green-50 border border-green-500 font-medium text-green-700 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            Eligible
          </div>
        ) : (
          <div className="flex items-center text-[0.75rem] bg-red-50 border border-red-500 font-medium text-red-700 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>Rejected
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="absolute top-6 left-4 rounded-[0.25rem] flex flex-shrink-0 overflow-hidden">
        <Image
          src={icon || '/random/OP-Logo.png'}
          alt="icon image"
          className={icon ? 'bg-white' : 'bg-[#FF0420]'}
          width={48}
          height={48}
        />
      </div>

      <div className="mt-14"></div>
      <div className="w-full h-full">
        <div className="p-4 flex flex-col justify-start items-start gap-3 h-full">
          <div className="flex flex-col gap-0.5">
            <Link
              href={`/explore/RetroPGF5/${cleanParamsName(title!)}`}
              className="line-clamp-1 text-sm font-bold text-gray-800 z-30 hover:underline"
            >
              {title}
            </Link>
            <p className="text-sm font-normal text-gray-600 line-clamp-2">
              {formatDescriptionExploreCard(description)}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {handleProjectCategoryRound(category!, 'text-xs')}
          </div>
          <div className="flex flex-grow"></div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2">
              <Events size={20} />
              <div className="flex gap-1">
                <p className="text-sm font-semibold text-gray-800">
                  {/* {Math.ceil(vote || 0).toString()} */}
                  {teamSize}
                </p>
                <p className="text-sm font-light text-gray-600">People</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Trophy size={20} />
            <div className="flex gap-1">
              <p className="text-sm font-semibold text-gray-800">
                {' '}
                {opRecieve?.toLocaleString('en-US', {
                  maximumFractionDigits: 2,
                })}{' '}
                OP
              </p>
              <p className="text-sm font-light text-gray-600">#{rank}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
