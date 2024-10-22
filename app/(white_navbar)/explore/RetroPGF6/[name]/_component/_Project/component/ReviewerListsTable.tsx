import { RiStarFill } from '@remixicon/react'
import {
  BadgeholderImpactGarden,
  DelegateImpactGarden,
  ImpactGardenMetrics,
} from '../../../../RetroType6'
import Image from 'next/image'
interface iReviewerListsTable {
  impactGardenMetrics: ImpactGardenMetrics[] | null
  delegateUsers: DelegateImpactGarden[]
  badgeholderUsers: BadgeholderImpactGarden[]
}

export default function ReviewerListsTable({
  impactGardenMetrics,
  delegateUsers,
  badgeholderUsers,
}: iReviewerListsTable) {
  const tableHeader = ['Reviewer', 'Rating', "Feeling if didn't exist"]
  const ifNotExistMapPassage = {
    'Extremely Upset': '😭 Extremely Upset',
    'Somewhat Upset': '🫠 Somewhat Upset',
    Neutral: '🙂 Neutral',
  }
  return (
    <div className="flex flex-col w-full bg-slate-50 rounded-md px-8 py-6 gap-y-4">
      <div className="text-lg font-semibold">Reviewers List</div>
      <div className="overflow-x-auto  h-64">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light text-surface bg-white rounded-md">
              <thead className="font-medium sticky top-0 bg-slate-50 z-10">
                <tr>
                  {tableHeader.map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 bg-slate-100 font-bold text-xs"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {impactGardenMetrics?.map((impactGardenMetric) => (
                  <tr key={impactGardenMetric.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={impactGardenMetric.pfp}
                            alt="Profile Picture"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-neutral-900">
                            {impactGardenMetric.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="flex items-center px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600 gap-x-1">
                      <div>
                        {Number(impactGardenMetric.likely_to_recommend) / 2}
                      </div>
                      <RiStarFill size={15} color="#FFC55A" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600">
                      {
                        ifNotExistMapPassage[
                          impactGardenMetric.feeling_if_didnt_exist as keyof typeof ifNotExistMapPassage
                        ]
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
