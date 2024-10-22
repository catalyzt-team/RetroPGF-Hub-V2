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
import { iRetroPGF5Project } from '../RetroType5'
// import ContributionSection from './_component/_Project/ContributionSection'
import PackageSection from './_component/_Project/PackageSection'
import LinkSection from './_component/_Project/LinkSection'
import ImpactStatementSection from './_component/_Project/ImpactStatementSection'

interface iCpage {
  data: iRetroPGF5Project
}
export default function Cpage({ data }: iCpage) {
  const overViewRef = useRef<HTMLElement | null>(null)
  const packageRef = useRef<HTMLElement | null>(null)
  const fundingRef = useRef<HTMLElement | null>(null)
  const githubRef = useRef<HTMLElement | null>(null)
  const contractRef = useRef<HTMLElement | null>(null)
  const linkSectionRef = useRef<HTMLElement | null>(null)
  const impactRef = useRef<HTMLElement | null>(null)
  const [sections, setSections] = useState([
    { name: 'Overview', ref: overViewRef },
    { name: 'Impact Statement', ref: impactRef },
    { name: 'Funding Sources', ref: fundingRef },
    { name: 'GitHub', ref: githubRef },
    { name: 'Contract Address', ref: contractRef },
    { name: 'Package', ref: packageRef },
    { name: 'Link', ref: linkSectionRef },
  ])

  const insertAtPosition = 2
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
  console.log(data)
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
    <div className="flex mt-4 lg:mt-8 gap-10 justify-center">
      {/* Scroll Spy */}
      <div className="w-full lg:flex-grow flex flex-col gap-4 lg:gap-8 animate-slowfade max-w-[56rem]">
        <section
          className="w-full h-full flex flex-col gap-4 lg:gap-8 lg:flex-grow"
          id="Overview"
          ref={overViewRef}
        >
          <ProjectDetailSection data={data} />
          <OverviewSection data={data} />
        </section>
        <ImpactStatementSection data={data} impactSectionRef={impactRef} />
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
  )
}
