import { RiUserFill } from '@remixicon/react'
import { ImpactGardenMetrics } from '../../../../RetroType6'

interface iAmountAttestationProps {
  impactGardenMetrics: ImpactGardenMetrics[] | null
}
export default function AmountAttestation({
  impactGardenMetrics,
}: iAmountAttestationProps) {
  const attestationCount: number = impactGardenMetrics?.length || 0
  return (
    <div className="flex grow bg-slate-50 w-80 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiUserFill size={30} color="#6895D2" />
          <div className="text-md font-semibold">
            {attestationCount} Reviewers
          </div>
          <div className="text-sm font-normal text-gray-600">
            Attestations from the badgeholders, top 100 delegates, and others.
          </div>
        </div>
      </div>
    </div>
  )
}
