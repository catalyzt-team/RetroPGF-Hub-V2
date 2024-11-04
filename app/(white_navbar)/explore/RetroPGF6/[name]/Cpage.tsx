'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import ProjectDetailSection from './_component/_Project/ProjectDetailSection'
import OverviewSection from './_component/_Project/OverviewSection'
import FundingSection from './_component/_Project/FundingSection'
import GithubSection from './_component/_Project/GithubSection'
import ContractSection from './_component/_Project/ContractSection'
// import AppealSection from './_component/_Project/AppealSection'
// import ImpactMetricSection from './_component/_Project/ImpactMetricSection'
import ScrollSpy from '@/app/component/ScrollSpy'
import { iRetroPGF6Project } from '../RetroType6'
// import ContributionSection from './_component/_Project/ContributionSection'
import PackageSection from './_component/_Project/PackageSection'
import LinkSection from './_component/_Project/LinkSection'
import ImpactStatementSection from './_component/_Project/ImpactStatementSection'
import { EASProjectMetadata } from '@/app/types/realtime-api-agora'
import ImpactGardenSection from './_component/_Project/ImpactGardenSection'

interface iCpage {
  data: iRetroPGF6Project
}
export default function Cpage({ data }: iCpage) {
  const overViewRef = useRef<HTMLElement | null>(null)
  const packageRef = useRef<HTMLElement | null>(null)
  const fundingRef = useRef<HTMLElement | null>(null)
  const githubRef = useRef<HTMLElement | null>(null)
  const contractRef = useRef<HTMLElement | null>(null)
  const linkSectionRef = useRef<HTMLElement | null>(null)
  const impactRef = useRef<HTMLElement | null>(null)
  const impactGardenRef = useRef<HTMLElement | null>(null)
  const [sections, setSections] = useState(() => {
    const initialSections = [
      { name: 'Overview', ref: overViewRef },
      { name: 'Impact Statement', ref: impactRef },
      { name: 'Funding Sources', ref: fundingRef },
      { name: 'GitHub', ref: githubRef },
      { name: 'Contract Address', ref: contractRef },
      { name: 'Package', ref: packageRef },
      { name: 'Link', ref: linkSectionRef },
    ]

    if (data.applicationCategory === 'GOVERNANCE_INFRA_AND_TOOLING') {
      return [
        ...initialSections.slice(0, 2),
        { name: 'Impact Garden', ref: impactGardenRef },
        ...initialSections.slice(2),
      ]
    }
    return initialSections
  })

  // const insertAtPosition = 2
  // useEffect(() => {
  //   if (data.impactMetrics) {
  //     setSections((prevSections) => {
  //       const impactMetricsExists = prevSections.find(
  //         (section) => section.name === 'Impact Metrics'
  //       )
  //       if (!impactMetricsExists) {
  //         return [
  //           ...prevSections.slice(0, insertAtPosition),
  //           { name: 'Impact Metrics', ref: impactRef },
  //           ...prevSections.slice(insertAtPosition),
  //         ]
  //       }
  //       return prevSections
  //     })
  //   }
  // }, [data.impactMetrics])
  const [loading, setLoading] = useState(true)
  const load = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }
  load()
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center animate-pulse h-[40em]">
        <Image
          src="/static/loading/small_sunny.svg"
          width={55}
          height={55}
          alt="loading"
        />
      </div>
    )
  return (
    <div className="flex justify-center lg:w-full ">
      <div className="flex flex-col mt-4 gap-4 lg:gap-0 ">
        <div className="lg:mt-4 lg:max-w-[80.5rem]">
          <ProjectDetailSection data={data} />
        </div>
        <div className="flex lg:mt-8 gap-10 justify-center ">
          {/* Scroll Spy */}
          <div className="lg:max-w-[60rem] lg:flex-grow flex flex-col gap-4 lg:gap-8 animate-slowfade ">
            <OverviewSection data={data} overViewRef={overViewRef} />
            <ImpactStatementSection data={data} impactSectionRef={impactRef} />
            {data.applicationCategory === 'GOVERNANCE_INFRA_AND_TOOLING' && (
              <ImpactGardenSection
                data={data}
                impactGardenRef={impactGardenRef}
              />
            )}
            <FundingSection data={data} fundingRef={fundingRef} />
            <GithubSection data={data} githubRef={githubRef} />
            <ContractSection data={data} contractRef={contractRef} />
            <PackageSection data={data} packageRef={packageRef} />
            <LinkSection data={data} linkSectionRef={linkSectionRef} />
          </div>
          <div className="hidden lg:block max-w-72 min-w-72 rounded-lg ">
            <ScrollSpy sections={sections} />
          </div>
        </div>
      </div>
    </div>
  )
}
