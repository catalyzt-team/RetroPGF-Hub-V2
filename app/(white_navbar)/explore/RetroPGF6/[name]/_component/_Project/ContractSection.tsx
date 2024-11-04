import { mapChainId, getNameByChainId } from '@/app/lib/utils'
import Image from 'next/image'
import { iRetroPGF6Project } from '../../../RetroType6'
import { EASProjectMetadata } from '@/app/types/realtime-api-agora'

interface iContract {
  data: iRetroPGF6Project
  contractRef: React.MutableRefObject<HTMLElement | null>
}
export default function ContractSection({ data, contractRef }: iContract) {
  return (
    <section
      id="Contract Address"
      ref={contractRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Contract Address</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.contracts.length !== 0 && (
        <div className="text-gray-500">
          Project contract addresses on different chains are listed below. All
          contracts are verified for ownership on-chain, and off-chain
          verification is conducted by Open Source Observer (OSO).
        </div>
      )}
      {data.contracts.length == 0 && (
        <p className="text-base font-normal text-gray-600">
          There is no contract address for this project.
        </p>
      )}
      {data.contracts.length !== 0 &&
        data.contracts.map(
          (
            item: {
              chainId: number
              deploymentTxHash: string
              address: string
            },
            i: number
          ) => (
            <div
              className="flex flex-col flex-wrap gap-3 rounded-lg bg-slate-50 px-8 py-6  flex-grow"
              key={item.deploymentTxHash}
            >
              <div className="flex flex-row flex-wrap gap-3 items-center">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/static/superchainLogo/${mapChainId(
                      item.chainId
                    )}.webp`}
                    alt="chain"
                    className="rounded-full"
                    width={25}
                    height={25}
                  />
                  <p className="font-medium font-rubik">
                    {getNameByChainId(item.chainId)}
                  </p>
                </div>
                <div className="text-base text-gray-500 font-rubik truncate max-w-64 md:max-w-none">
                  {item.address}
                </div>
              </div>
            </div>
          )
        )}
    </section>
  )
}
