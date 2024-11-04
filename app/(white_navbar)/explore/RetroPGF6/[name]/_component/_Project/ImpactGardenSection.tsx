import { useEffect, useState } from 'react'
import { iRetroPGF6Project } from '../../../RetroType6'
import AmountAttestation from './component/AmountAttestation'
import AverageStar from './component/AverageStar'
import FeelingIfNotExist from './component/FeelingIfNotExist'
import Link from 'next/link'
import ReviewerListsTable from './component/ReviewerListsTable'

interface iImpactGardenSectionProps {
  data: iRetroPGF6Project
  impactGardenRef: React.MutableRefObject<HTMLElement | null>
}

const ImpactGardenSection = ({
  data,
  impactGardenRef,
}: iImpactGardenSectionProps) => {
  const formatTestimonials = (testimonials: string) => {
    if (!testimonials) {
      return ''
    }
    return testimonials.slice(0, 105) + '/?tab=insights'
  }
  return (
    <section
      id="Impact Garden"
      ref={impactGardenRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold ">Impact Garden</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      <div className="text-gray-500">
        These metrics are collected based on attestations from the badgeholders,
        top 100 delegates, and other community members.{' '}
        <Link
          className=" font-medium text-primaryRed self-start"
          href={formatTestimonials(data.testimonials)}
          target="_blank"
          rel="noopener noreferrer"
        >
          View More &gt;
        </Link>
      </div>
      <div className="flex flex-row flex-grow flex-wrap gap-5  ">
        <AmountAttestation impactGardenMetrics={data.impactMetrics} />
        <AverageStar impactGardenMetrics={data.impactMetrics} />
        <FeelingIfNotExist impactGardenMetrics={data.impactMetrics} />
        {/* <ReviewerListsTable
          impactGardenMetrics={impactGardenMetrics}
          delegateUsers={delegateUsers}
          badgeholderUsers={badgeholderUsers}
        /> */}
      </div>
    </section>
  )
}
export default ImpactGardenSection
