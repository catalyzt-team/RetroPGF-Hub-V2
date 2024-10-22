import {
  RiEmotionSadFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
} from '@remixicon/react'
import FeelingChart from './FeelingChart'
import { ImpactGardenMetrics } from '../../../../RetroType6'
import { useEffect, useMemo, JSX, useState } from 'react'

export const titleMap: {
  [key: string]: { title: string; color: string; icon: JSX.Element }
} = {
  '🙂 Neutral': {
    title: `Not A Problem If This Doesn't Exist!`,
    color: '#D9D9D9',
    icon: <RiEmotionNormalFill size={30} color="black" />,
  },
  '🫠 Somewhat Upset': {
    title: `Some Problem If This Doesn't Exist!`,
    color: '#F6AD55',
    icon: <RiEmotionUnhappyFill size={30} color="#F6AD55" />,
  },
  '😭 Extremely Upset': {
    title: `Big Problem If This Doesn't Exist!`,
    color: '#F56565',
    icon: <RiEmotionSadFill size={30} color="#F56565" />,
  },
}
export default function FeelingIfNotExist({
  impactGardenMetrics,
}: {
  impactGardenMetrics: ImpactGardenMetrics[] | null
}) {
  const [feelingArray, setFeelingArray] = useState([
    { name: '🙂 Neutral', y: 0 },
    { name: '🫠 Somewhat Upset', y: 0 },
    { name: '😭 Extremely Upset', y: 0 },
  ])

  useEffect(() => {
    const updatedArray = impactGardenMetrics?.reduce(
      (acc, { feeling_if_didnt_exist }) => {
        const index = {
          Neutral: 0,
          'Somewhat Upset': 1,
          'Extremely Upset': 2,
        }[feeling_if_didnt_exist]

        if (index !== undefined) {
          acc[index].y++
        }
        return acc
      },
      [
        { name: '🙂 Neutral', y: 0 },
        { name: '🫠 Somewhat Upset', y: 0 },
        { name: '😭 Extremely Upset', y: 0 },
      ]
    )
    if (updatedArray) {
      setFeelingArray(updatedArray)
    }
  }, [impactGardenMetrics])

  const maxFeelingTopic = useMemo(() => {
    return feelingArray.reduce((acc, cur) => (acc.y > cur.y ? acc : cur))
  }, [feelingArray])

  const maxFeelingTopicTitle = useMemo(() => {
    return titleMap[maxFeelingTopic.name as keyof typeof titleMap].title
  }, [maxFeelingTopic])
  return (
    <div className="flex grow bg-slate-50 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-row gap-x-12 ">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          {titleMap[maxFeelingTopic.name as keyof typeof titleMap].icon}
          <div className="text-md font-semibold">{maxFeelingTopicTitle}</div>
          {feelingArray.map((item) => (
            <div key={item.name} className="text-sm font-normal text-gray-600">
              <span className="font-medium">{item.name}</span>: {item.y}{' '}
              reviewers if this doesn't exist.
            </div>
          ))}
        </div>
        {impactGardenMetrics?.length !== 0 && (
          <FeelingChart feelingArray={feelingArray} />
        )}
      </div>
      {/* <div className="flex-grow"></div> */}
    </div>
  )
}
