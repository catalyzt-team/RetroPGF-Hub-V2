import Link from 'next/link'
import { iRetroPGF6Project } from '../../../RetroType6'
import { handleProjectCategoryRound } from '@/app/lib/common'
import { ArrowRight, ArrowUpRight } from '@carbon/icons-react'
import Image from 'next/image'
import List from '@carbon/icons-react/lib/List'
import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
import { cleanParamsName } from '@/app/lib/utils'

const OpTokenPath = '/static/superchainLogo/optimism.svg'

interface ListCardProps {
  currentItems: iRetroPGF6Project[]
}
export default function ListCard({ currentItems }: ListCardProps): JSX.Element {
  return (
    <>
      {currentItems.length !== 0 ? (
        <div className="relative overflow-x-hidden  ">
          <table className="w-full text-sm text-left rtl:text-right table-fixed rounded-xl">
            <thead className="text-gray-700 text-base font-semibold ">
              <tr>
                <th scope="col" className="py-4 px-3 w-[50%]">
                  <h6 className="text-base/semibold text-gray-700">Project</h6>
                </th>
                <th scope="col" className="py-4 px-3 w-[25%]">
                  <h6 className="text-base/semibold text-gray-700">
                    Categories
                  </h6>
                </th>
                {/* <th scope="col" className="py-4 px-3 w-[20%] ">
                  <h6 className="text-base/semibold text-gray-700">
                    OP Rewards
                  </h6>
                </th> */}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, i) => (
                <tr className="border rounded-3xl " key={item.name}>
                  <th className="p-5 flex gap-y-2 gap-x-6">
                    <div className="relative min-w-16 min-h-16 max-w-16 max-h-16 self-center">
                      <Image
                        src={item.profileAvatarUrl ?? '/random/OP-Logo.png'}
                        alt="avatar image"
                        className="rounded-lg"
                        fill
                      />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href={`/explore/RetroPGF6/${cleanParamsName(
                          item.name
                        )}`}
                        className="flex gap-1 pb-2  items-center cursor-pointer hover:underline w-fit"
                      >
                        <h6 className="text-sm font-bold text-gray-900">
                          {item.name}
                        </h6>
                        <ArrowUpRight size={16} className="fill-gray-600" />
                      </Link>
                      <p className="text-sm font-normal text-gray-500 line-clamp-2 ">
                        {item.description}
                      </p>
                    </div>
                  </th>
                  <td className="py-4 px-3 ">
                    <div className="flex flex-col flex-wrap gap-2 ">
                      {handleProjectCategoryRound(
                        item.category as string,
                        'text-sm'
                      )}
                    </div>
                  </td>
                  {/* <td className="py-4 px-3">
                    <div className="flex flex-row flex-wrap gap-2 ">
                      <h6 className="text-sm font-medium text-gray-500">
                        {item.reward}
                      </h6>
                      <Image
                        src={OpTokenPath}
                        alt="opToken"
                        width={20}
                        height={20}
                      />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-xl font-medium text-gray-500 text-center w-full">
          0 Items Found
        </h6>
      )}
    </>
  )
}
