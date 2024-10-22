import { RiStarFill, RiUserSearchFill } from '@remixicon/react'
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
  const tableHeader = ['No.', 'Reviewer', 'Rating', "Feeling if didn't exist"]
  const ifNotExistMapPassage = {
    'Extremely Upset': '😭 Extremely Upset',
    'Somewhat Upset': '🫠 Somewhat Upset',
    Neutral: '🙂 Neutral',
    Unknown: '❓ Unknown Feeling',
  }
  if (!impactGardenMetrics) {
    return (
      <div className="flex flex-col w-full bg-slate-50 rounded-md px-8 py-6 gap-y-4">
        <div className="text-lg font-semibold">Reviewers List</div>
        <div className="text-center py-4 text-gray-500">
          No reviewer data available
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col w-full bg-slate-50 rounded-md px-8 py-6 gap-y-4">
      <RiUserSearchFill size={30} color="#6895D2" />
      <div className="text-lg font-semibold">Reviewers List</div>
      <p className="text-sm font-normal text-gray-600">
        List of reviewers who have evaluated this project, along with their
        ratings and feelings if the project didn't exist.
      </p>
      <div className="overflow-x-auto max-h-[calc(100vh-30rem)] mt-2">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden bg-white px-4 py-6 rounded-md">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="font-medium sticky top-0 bg-white z-10">
                <tr>
                  {tableHeader.map((header, index) => (
                    <th
                      key={`${header}-${index}`}
                      className="px-6 py-2 font-bold text-xs"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {impactGardenMetrics?.map((impactGardenMetric, index) => (
                  <tr key={impactGardenMetric.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-7 w-7">
                          <Image
                            className="h-7 w-7 rounded-full"
                            src={impactGardenMetric.pfp}
                            alt="Profile Picture"
                            width={25}
                            height={25}
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-neutral-900">
                            {impactGardenMetric.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600">
                      <div className="flex items-center gap-x-1">
                        {Number(impactGardenMetric.likely_to_recommend) / 2}
                        <RiStarFill size={15} color="#FFC55A" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600">
                      {ifNotExistMapPassage[
                        impactGardenMetric.feeling_if_didnt_exist as keyof typeof ifNotExistMapPassage
                      ] ?? ifNotExistMapPassage.Unknown}
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
