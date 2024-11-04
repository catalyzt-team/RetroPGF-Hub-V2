import {
  RiEmotionSadFill,
  RiEmotionNormalFill,
  RiEmotionUnhappyFill,
} from '@remixicon/react'
import FeelingChart from './FeelingChart'
import { useEffect, useMemo, JSX, useState } from 'react'
import { ImpactMetrics } from '../../../../RetroType6'

export const titleMap: {
  [key: string]: { title: string; color: string; icon: JSX.Element }
} = {
  '🙂 Neutral': {
    title: `Not A Problem If This Doesn't Exist!`,
    color: '#D9D9D9',
    icon: <RiEmotionNormalFill size={25} color="black" />,
  },
  '🫠 Somewhat Upset': {
    title: `Some Problem If This Doesn't Exist!`,
    color: '#F6AD55',
    icon: <RiEmotionUnhappyFill size={25} color="#F6AD55" />,
  },
  '😭 Extremely Upset': {
    title: `Big Problem If This Doesn't Exist!`,
    color: '#F56565',
    icon: <RiEmotionSadFill size={25} color="#F56565" />,
  },
}
export default function FeelingIfNotExist({
  impactGardenMetrics,
}: {
  impactGardenMetrics?: ImpactMetrics
}) {
  const [feelingArray, setFeelingArray] = useState([
    { name: '🙂 Neutral', y: 0 },
    { name: '🫠 Somewhat Upset', y: 0 },
    { name: '😭 Extremely Upset', y: 0 },
  ])
  const citizenAttestors = impactGardenMetrics?.count_citizen_attestations ?? 0
  const delegateAttestors =
    impactGardenMetrics?.count_delegate_attestations ?? 0

  useEffect(() => {
    if (!impactGardenMetrics) return
    const updatedArray = (
      [
        'neutral',
        'somewhat_upset',
        'extremely_upset',
      ] as (keyof typeof impactGardenMetrics.percentage_distributions.citizens)[]
    ).map((feeling, index) => ({
      name: ['🙂 Neutral', '🫠 Somewhat Upset', '😭 Extremely Upset'][index],
      y:
        (impactGardenMetrics.percentage_distributions.citizens[feeling] ?? 0) *
          citizenAttestors +
        (impactGardenMetrics.percentage_distributions.top_delegates?.[
          feeling
        ] ?? 0) *
          delegateAttestors,
    }))
    if (updatedArray) {
      setFeelingArray(updatedArray)
    }
  }, [impactGardenMetrics, citizenAttestors, delegateAttestors])

  const maxFeelingTopic = useMemo(() => {
    return feelingArray.reduce((acc, cur) => (acc.y > cur.y ? acc : cur))
  }, [feelingArray])

  const maxFeelingTopicTitle = useMemo(() => {
    return titleMap[maxFeelingTopic.name as keyof typeof titleMap].title
  }, [maxFeelingTopic])
  return (
    <div className="flex grow bg-slate-50 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-row gap-x-12 ">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full font-rubik">
          {titleMap[maxFeelingTopic.name as keyof typeof titleMap].icon}
          <div className="text-md font-semibold">{maxFeelingTopicTitle}</div>
          {feelingArray.map((item) => (
            <div key={item.name} className="text-sm font-normal text-gray-600">
              <span className="font-medium">{item.name}</span>: {item.y}{' '}
              attestors if this doesn't exist.
            </div>
          ))}
        </div>
        <div className="flex flex-grow"></div>
        {impactGardenMetrics && <FeelingChart feelingArray={feelingArray} />}
      </div>
    </div>
  )
}
