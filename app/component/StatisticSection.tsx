import StatsBox from '@/app/component/Statistic/RetroPGF3/StatsBox'
import BallotDistributionChart from '@/app/component/Statistic/RetroPGF3/BallotDistributionChart'
import BallotEachCategory from '@/app/component/Statistic/RetroPGF3/BallotEachCategory'
import TypeOfProject from '@/app/component/Statistic/RetroPGF3/TypeOfProject'
import AllocationDistribution from '@/app/component/Statistic/RetroPGF3/AllocationDistribution'
import AllocationDistributionR2 from '@/app/component/Statistic/RetroPGF2/AllocationDistribution'
import CategoryDistribution from './Statistic/RetroPGF2/CategoryDistribution'
import AllocationEachCategory from '@/app/component/Statistic/RetroPGF2/AllocationEachCategory'
import AllocationDistributionEducation from '@/app/component/Statistic/RetroPGF2/AllocationDistributionEducation'
import AllocationDistributionInfrastructure from '@/app/component/Statistic/RetroPGF2/AllocationDistributionInfrastructure'
import AllocationDistributionTooling from '@/app/component/Statistic/RetroPGF2/AllocationDistributionTooling'
import { ArrowDown, ArrowUp, Star, Growth, Rocket } from '@carbon/icons-react'
import { FC } from 'react'

interface StatisticProps {
  data: any
  round: number
}

const StatisticSection: FC<StatisticProps> = ({ data, round }) => {
  const round1 = [
    {
      title: 'Min Ballot 1',
      value: '0 Ballot',
      icon: <ArrowDown size={25} />,
    },
  ]
  const round2 = [
    {
      title: 'Least Awarded',
      value: '594.26 OP',
      icon: <Rocket size={25} />,
    },
    {
      title: 'Average Awarded',
      value: '51,282.05 OP',
      icon: <Growth size={25} />,
    },
    {
      title: 'Median Awarded',
      value: '23,641.12 OP',
      icon: <Star size={25} />,
    },
    {
      title: 'Max Awarded',
      value: '557,301 OP',
      icon: <Growth size={25} />,
    },
    {
      title: 'Total Nomination',
      value: '195 Projects',
      icon: <ArrowUp size={25} />,
    },
  ]
  const round3 = [
    {
      title: 'Min Ballot',
      value: '0 Ballot',
      icon: <ArrowDown size={25} />,
    },
    {
      title: 'Max Ballot',
      value: '109 Ballots',
      icon: <ArrowUp size={25} />,
    },
    {
      title: 'Average Ballot',
      value: '2 Ballots',
      icon: <Star size={25} />,
    },

    {
      title: 'Least Awarded',
      value: '0 OP',
      icon: <Rocket size={25} />,
    },
    {
      title: 'Max Awarded',
      value: '663,853 OP',
      icon: <Growth size={25} />,
    },
  ]
  console.log(round)
  return (
    <div>
      {/* round3 */}
      <div className="flex flex-row flex-wrap gap-5 mt-2">
        {round === 3 &&
          round3.map((item, index) => (
            <StatsBox
              key={index}
              icon={item.icon}
              value={item.value}
              title={item.title}
            />
          ))}
        {round === 3 && (
          <div className="flex flex-wrap mt-8 gap-y-3">
            <AllocationDistribution />
            <BallotEachCategory />
            <BallotDistributionChart />
            <TypeOfProject />
          </div>
        )}
      </div>
      <div>
        {round === 2 && (
          <div className="flex flex-row flex-wrap gap-5 mt-2">
            {round2.map((item, index) => (
              <StatsBox
                key={index}
                icon={item.icon}
                value={item.value}
                title={item.title}
              />
            ))}
          </div>
        )}
        {round === 2 && (
          <div className="flex flex-wrap mt-8 gap-y-3">
            <AllocationDistributionR2 />
            <CategoryDistribution />
            <AllocationEachCategory />
            <AllocationDistributionEducation />
            <AllocationDistributionInfrastructure />
            <AllocationDistributionTooling />
          </div>
        )}
      </div>
    </div>
  )
}
export default StatisticSection
