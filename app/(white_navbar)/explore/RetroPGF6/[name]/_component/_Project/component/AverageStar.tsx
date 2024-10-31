import { RiStarFill } from '@remixicon/react'

interface iAverageStarProps {
  impactGardenMetrics: any
}
export default function AverageStar({
  impactGardenMetrics,
}: iAverageStarProps) {
  const averageScore: number = 0

  return (
    <div className="flex grow bg-slate-50 w-80 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiStarFill size={30} color="#FFC55A" />
          <div className="text-md font-semibold">
            {averageScore.toFixed(2)}/10 Rating
          </div>
          <div className="text-sm font-normal text-gray-600">
            Badgeholders and delegates likely to recommend this project to
            someone else.
          </div>
        </div>
      </div>
    </div>
  )
}
