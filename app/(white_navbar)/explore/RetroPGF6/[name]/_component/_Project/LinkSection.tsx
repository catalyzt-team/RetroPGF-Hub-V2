import { iRetroPGF6Project } from '../../../RetroType6'
import {
  RiArrowRightFill,
  RiArrowRightUpLine,
  RiLinksFill,
} from '@remixicon/react'
import Link from 'next/link'
interface iLinkSection {
  data: iRetroPGF6Project
  linkSectionRef: React.MutableRefObject<HTMLElement | null>
}
export default function LinkSection({ data, linkSectionRef }: iLinkSection) {
  return (
    <section
      id="Link"
      ref={linkSectionRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Link</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.links?.length === 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no link for this project.
        </p>
      )}
      {data.links?.length !== 0 &&
        data.links?.map((item, i) => (
          <div
            className="flex px-8 py-6 bg-slate-50 rounded-lg gap-6 break-all"
            key={i}
          >
            <RiLinksFill size={25} color="#000" />
            <div className="flex flex-col w-full">
              <Link
                href={item.url || ''}
                target="_blank"
                className="flex items-center gap-x-2 mb-1 text-lg font-semibold font-rubik line-clamp-2 hover:text-primaryRed"
              >
                <span>{item.name ? item.name : item.url}</span>
                <RiArrowRightUpLine size={20} />
              </Link>
              <div>
                {item.description && (
                  <p className="text-sm text-gray-500">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
    </section>
  )
}
