import { useMemo } from 'react'
import Trophy from '@carbon/icons-react/lib/Trophy'
import { User } from '@carbon/icons-react'
import { Star } from '@carbon/icons-react'
import Events from '@carbon/icons-react/lib/Events'
import Image from 'next/image'
import Link from 'next/link'
import {
  handleApplicationCategoryRound6,
  handleProjectCategoryRound,
} from '@/app/lib/common'
import { cleanParamsName, numberWithCommas } from '@/app/lib/utils'
import { app } from '../../../../lib/firebase'

interface iDynamicCard {
  banner?: string
  icon?: string
  round?: string
  title?: string
  description?: string
  category?: string
  applicationCategory?: string
  teamSize?: number
  isEligible?: boolean
  reward?: number
}
export default function DynamicCard({
  banner,
  icon,
  round = '6',
  title = '',
  description = '',
  category = '',
  applicationCategory = '',
  teamSize = 0,
  isEligible = true,
  reward = 0,
}: iDynamicCard) {
  const categoryElement = useMemo(
    () => handleProjectCategoryRound(category, 'text-xs'),
    [category]
  )
  const applicationCategoryElement = useMemo(
    () => handleApplicationCategoryRound6(applicationCategory, 'text-xs'),
    [applicationCategory]
  )

  return (
    <Link
      href={`/explore/RetroPGF6/${cleanParamsName(title)}`}
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

      {/* Eligibility Status */}
      <div className="absolute top-1 right-1 px-1 py-0.5 rounded-[0.25rem] z-20">
        {isEligible === true ? (
          <div className="flex items-center text-[0.75rem] bg-green-50 border border-green-500 font-medium text-green-700 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
            Eligible
          </div>
        ) : (
          <div className="flex items-center text-[0.75rem] bg-red-50 border border-red-500 font-medium text-red-700 px-1.5 py-0.5 rounded-lg">
            {' '}
            <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
            Rejected
          </div>
        )}
      </div>

      {/* Avatar */}
      <div className="absolute top-10 lg:top-12 left-4 rounded-[0.25rem] bg-white flex flex-shrink-0 z-20 overflow-hidden">
        <Image
          src={icon || '/random/OP-Logo.png'}
          alt="avatar image"
          className={`h-12 w-12 ${icon ? 'bg-white' : 'bg-[#FF0420]'}`}
          width={48}
          height={48}
        />
      </div>
      <div className="mt-20 lg:mt-[5.5rem]"></div>
      <div className="w-full h-full">
        <div className="p-4 flex flex-col justify-start items-start gap-3 h-full overflow-hidden">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-bold text-gray-800 z-20 hover:underline line-clamp-1">
              {title}
            </p>
            <p className="text-sm font-normal text-gray-600 line-clamp-2 break-all">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {applicationCategoryElement}
            {categoryElement}
            {/* {openSourceElement} */}
          </div>
          <div className="flex-grow"></div>

          {/* This is for result announced */}
          {/* <div className="flex justify-center items-center gap-2 bg-red-50 rounded-md px-4 py-2.5 w-full group">
            <div className="flex flex-row justify-center items-center gap-x-2 group-hover:scale-105 transition-all ease-linear">
              <p className="text-sm font-semibold text-gray-800">
                {numberWithCommas(reward || 0)}
              </p>
              <p className="text-sm font-light text-gray-600">
                <Image src={OpTokenPath} alt="OpToken" width={18} height={18} />
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  )
}
