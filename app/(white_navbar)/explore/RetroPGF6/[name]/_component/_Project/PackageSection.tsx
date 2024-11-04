import Link from 'next/link'
import { iRetroPGF6Project } from '../../../RetroType6'
import { RiArchiveLine } from '@remixicon/react'

interface iPackageSection {
  data: iRetroPGF6Project
  packageRef: React.MutableRefObject<HTMLElement | null>
}

function extractPackageName(url: string): string {
  const regex = /\/package\/([^\/]+)/
  const match = url.match(regex)
  return match ? decodeURIComponent(match[1]) : ''
}
export default function PackageSection({ data, packageRef }: iPackageSection) {
  return (
    <section
      id="Package"
      ref={packageRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Package</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.packages?.length == 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no package for this project.
        </p>
      )}
      {data.packages?.length !== 0 &&
        data.packages?.map((item, i) => (
          <div
            key={item.name}
            className="flex flex-col flex-wrap gap-3 rounded-lg bg-slate-50 px-8 py-6 min-w-80 flex-grow flex-1"
          >
            <RiArchiveLine size={25} color="#000" />
            <div className="flex flex-col w-full">
              <Link
                key={i}
                href={item.url ? item.url : '#'}
                target="_blank"
                className="font-semibold text-lg font-rubik mb-1 hover:text-primaryRed"
              >
                {item.name ? item.name : extractPackageName(item.url)}
              </Link>
            </div>
            {/* <div>
              <p className="text-sm text-gray-500">
                {item.description} {item.name} {item.url}
              </p>
            </div> */}
          </div>
        ))}
    </section>
  )
}
