import Image from 'next/image'
import { Book, LogoTwitter, Partnership, ThumbsUp } from '@carbon/icons-react'
import {
  RiArrowRightUpLine,
  RiGlobalLine,
  RiTeamLine,
  RiTwitterXLine,
} from '@remixicon/react'
import { iRetroPGF6Project } from '../../../RetroType6'
import Link from 'next/link'
import { numberWithCommas } from '@/app/lib/utils'
import {
  handleApplicationCategoryRound6,
  handleProjectCategoryRound,
} from '@/app/lib/common'

interface iProjectDetailSection {
  data: iRetroPGF6Project
}

export const truncateProjectId = (projectId: string) => {
  if (projectId.length <= 10) return projectId
  return `${projectId.slice(0, 8)}...${projectId.slice(-8)}`
}
export default function ProjectDetailSection({ data }: iProjectDetailSection) {
  return (
    <>
      <div className=" flex flex-col bg-white rounded-lg overflow-hidden border animate-slowfade">
        <div className="block relative w-full h-52 lg:h-80 mb-16">
          <Image
            src={data.projectCoverImageUrl || '/random/OP-Banner.png'}
            alt="background"
            fill
            className="w-fit object-cover rounded-t-lg rounded-b-xl"
          />
        </div>

        <div className="relative flex flex-col gap-4 p-4 sm:p-4 lg:p-6">
          <div className="absolute -top-32 left-2 lg:left-6 rounded-[0.25rem] flex flex-shrink-0 z-20">
            <div className="relative w-28 h-28 lg:w-32 lg:h-32 overflow-hidden">
              <Image
                src={data.profileAvatarUrl || '/random/OP-Logo.png'}
                alt="avatar image"
                className="object-cover bg-white rounded-xl p-1.5"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 md:px-0 md:pt-0 lg:p-0 ">
            <h3 className="flex items-center text-3xl lg:text-4xl font-semibold text-gray-800">
              {data.name}
              {/* <div className="flex-grow"></div>
              <div className="hidden md:flex items-center px-10 py-3 rounded-xl text-xl bg-red-50">
                {numberWithCommas(data.reward ?? 20000)}
                0.00
                <Image
                  src="/static/superchainLogo/optimism.svg"
                  alt="OP Token"
                  width={25}
                  height={25}
                  className="ml-2"
                />
              </div> */}
            </h3>
            <div className="flex gap-2">
              <div className=" text-base font-semibold text-gray-600">
                {handleProjectCategoryRound(data.category ?? '', 'text-sm')}
              </div>
              <div className=" text-base font-semibold text-gray-600">
                {handleApplicationCategoryRound6(
                  data.applicationCategory ?? '',
                  'text-sm'
                )}
              </div>
            </div>
            {/* <div className="hidden lg:block bg-gray-100 text-gray-600 text-sm truncate w-fit px-3 py-1.5 rounded-full">
              {truncateProjectId('0xsdfjksdpfjsdijfpodsjfposdjf')}
            </div> */}

            {/* <div className="flex flex-col gap-1">
              <h6 className="text-base font-semibold text-gray-600">
                Pricing Model: {data.pricingModel}
              </h6>
              {data.pricingModel && (
                <p className="text-base font-normal text-gray-600">
                  {data.pricingModel}
                </p>
              )}
            </div> */}
            {/* This will show when project reward is available */}
            {/* <div className="flex w-fit items-center md:hidden px-5 py-3 mb-4 rounded-xl text-base font-medium bg-red-50">
              {numberWithCommas(0)}
              <Image
                src="/static/superchainLogo/optimism.svg"
                alt="OP Token"
                width={25}
                height={25}
                className="ml-2"
              />
            </div> */}
            {(data.socialLinks.website.length > 0 ||
              data.socialLinks.farcaster.length > 0 ||
              data.socialLinks.twitter !== null ||
              data.socialLinks.twitter !== '' ||
              data.socialLinks.mirror !== null ||
              data.socialLinks.mirror !== '') && (
              <div className="flex flex-wrap gap-3 my-1 md:my-3 lg:my-4">
                {data.socialLinks.website.length > 0 &&
                  data.socialLinks.website.map((item, i) => (
                    <Link
                      href={item}
                      key={i}
                      target="_blank"
                      className="flex flex-shrink items-center gap-2 text-gray-500 bg-slate-100 px-3 py-1.5 rounded-full hover:text-primaryRed"
                    >
                      <div className="p-1 rounded-full bg-white">
                        <RiGlobalLine size={16} />
                      </div>
                      <h6 className="text-xs font-normal truncate max-w-40 ">
                        {item}
                      </h6>
                      <RiArrowRightUpLine size={16} />
                    </Link>
                  ))}
                {data.socialLinks.farcaster.length > 0 &&
                  data.socialLinks.farcaster.map((item, i) => (
                    <Link
                      href={item}
                      key={i}
                      target="_blank"
                      className="flex flex-shrink items-center gap-2 text-gray-500 bg-slate-100 px-3 py-1.5 rounded-full hover:text-primaryRed"
                    >
                      <div className="p-1 rounded-full bg-white">
                        <RiTeamLine size={16} />
                      </div>
                      <h6 className="text-xs font-normal truncate max-w-40">
                        {item}
                      </h6>
                      <RiArrowRightUpLine size={16} />
                    </Link>
                  ))}
                {data.socialLinks.twitter !== null &&
                  data.socialLinks.twitter !== '' && (
                    <Link
                      href={data.socialLinks.twitter || ''}
                      key={data.socialLinks.twitter}
                      target="_blank"
                      className="flex flex-shrink items-center gap-2 text-gray-500 bg-slate-100 px-3 py-1.5 rounded-full hover:text-primaryRed"
                    >
                      <div className="p-1 rounded-full bg-white">
                        <RiTwitterXLine size={16} />
                      </div>
                      <h6 className="text-xs font-normal truncate max-w-40">
                        {data.socialLinks.twitter}
                      </h6>
                      <RiArrowRightUpLine size={16} />
                    </Link>
                  )}
                {data.socialLinks.mirror !== null &&
                  data.socialLinks.mirror !== '' && (
                    <Link
                      href={data.socialLinks.mirror || ''}
                      key={data.socialLinks.mirror}
                      target="_blank"
                      className="flex flex-shrink items-center gap-2 text-gray-500 bg-slate-100 px-3 py-1.5 rounded-full hover:text-primaryRed"
                    >
                      <div className="p-1 rounded-full bg-white">
                        <Book size={16} />
                      </div>
                      <h6 className="text-xs font-normal truncate max-w-40">
                        {data.socialLinks.mirror}
                      </h6>
                      <RiArrowRightUpLine size={16} />
                    </Link>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
