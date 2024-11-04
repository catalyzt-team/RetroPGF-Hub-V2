import { RiUserFill } from '@remixicon/react'
import { ImpactMetrics } from '../../../../RetroType6'

interface iAmountAttestationProps {
  impactGardenMetrics?: ImpactMetrics
}
export default function AmountAttestation({
  impactGardenMetrics,
}: iAmountAttestationProps) {
  const attestationCount: number =
    impactGardenMetrics?.count_total_attestations || 0
  const badgeholderCount: number =
    impactGardenMetrics?.count_citizen_attestations || 0
  const delegateCount: number =
    impactGardenMetrics?.count_delegate_attestations || 0
  return (
    <div className="flex grow bg-slate-50 w-80 min-h-44 rounded-lg px-8 py-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col justify-center gap-y-3 text-lg font-medium h-full">
          <div className="flex-grow"></div>
          <RiUserFill size={25} color="#6895D2" />
          <div className="text-md font-semibold font-rubik">
            {attestationCount} Attestors
          </div>
          <div className="text-sm font-normal text-gray-600">
            {badgeholderCount} badgeholders and {delegateCount} delegates (top
            100 rank) have made attestations.
          </div>
        </div>
      </div>
    </div>
  )
}
