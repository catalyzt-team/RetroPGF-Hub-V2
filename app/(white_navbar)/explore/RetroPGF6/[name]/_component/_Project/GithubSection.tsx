import Image from 'next/image'
import Link from 'next/link'
import { iRetroPGF6Project } from '../../../RetroType6'
import { formatGithubLink } from '@/app/lib/utils'
import { RiArrowRightUpLine, RiGithubFill } from '@remixicon/react'

interface iGithubSection {
  data: iRetroPGF6Project
  githubRef: React.MutableRefObject<HTMLElement | null>
}
export default function GithubSection({ data, githubRef }: iGithubSection) {
  return (
    <section
      id="GitHub"
      ref={githubRef}
      className="flex flex-col gap-5 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">GitHub</h3>
      <hr className="hidden sm:block border-t-gray-100" />

      <div className="flex flex-wrap  gap-4 ">
        {data.github.length === 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no github repository for this project.
          </p>
        )}
        {data.github.length !== 0 &&
          Array.isArray(data.github) &&
          data.github.map((item, i) => {
            // Check if the item is an object or a string
            if (typeof item === 'object' && item !== null) {
              return (
                <div
                  className="flex flex-col flex-wrap gap-3 rounded-lg bg-slate-50 px-8 py-6 min-w-80 flex-grow flex-1"
                  key={item.url}
                >
                  <RiGithubFill size={35} color="#000" />
                  <Link
                    href={item.url}
                    target="_blank"
                    className={`flex items-center g flex-grow text-base  hover:text-primaryRed`}
                    key={i}
                  >
                    <div className="flex flex-col ">
                      <div className="flex items-center gap-x-2  mb-1">
                        <div className="font-semibold text-lg font-rubik">
                          {item.name !== null && item.name !== ''
                            ? item.name
                            : formatGithubLink(item.url)}
                        </div>
                        <RiArrowRightUpLine size={20} />
                      </div>
                      <div className="text-sm text-gray-500  line-clamp-2">
                        {item.description}
                      </div>
                    </div>
                    {/* {formatGithubLink(item.url)} */}
                  </Link>
                </div>
              )
            }
          })}
      </div>
    </section>
  )
}
