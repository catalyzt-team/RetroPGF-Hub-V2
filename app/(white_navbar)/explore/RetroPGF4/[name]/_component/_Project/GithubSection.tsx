import { iRetroPGF4Project } from '../../../RetroType4'
import Image from 'next/image'
import star from '@/public/static/githubCardSection/star'
// import watch from '@/public/static/githubCardSection/watch'
import fork from '@/public/static/githubCardSection/fork'
import Link from 'next/link'
import { formatGithubLink } from '@/app/lib/utils'

export default function GithubSection({
  data,
  githubRef,
}: {
  data: iRetroPGF4Project
  githubRef: React.MutableRefObject<HTMLElement | null>
}) {
  return (
    <section
      id="GitHub"
      ref={githubRef}
      className="flex flex-col gap-5 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">GitHub</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="flex flex-row flex-wrap gap-4">
        {data.github.length == 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no github repository for this project.
          </p>
        )}
        {data.github.length != 0 &&
          data.github.map((item, i) => (
            <div
              className={`flex flex-col gap-2 rounded-lg bg-slate-50 px-6 py-4 min-w-72 flex-grow h-36"`}
              key={i}
            >
              <Image
                src="/logo/github.svg"
                alt="github logo"
                className="rounded-full mb-1 bg-white"
                width={30}
                height={24}
              />
              <Link
                href={item.githubLink}
                target="_blank"
                className="text-base font-medium line-clamp-2"
              >
                {formatGithubLink(item.githubLink)}
              </Link>
              <div className="flex flex-row flex-grow"></div>
              <div className="flex flex-row justify-start items-center gap-x-4">
                <div className="flex flex-row justify-start items-center text-sm  text-gray-600 gap-1">
                  {star()}
                  <div>{item.star ?? '-'} Stars</div>
                </div>

                <div className="flex flex-row justify-start items-center text-sm  text-gray-600 gap-1">
                  {fork()}
                  <div>{item.fork ?? '-'} Forks</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
