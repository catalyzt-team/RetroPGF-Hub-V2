import { formatText } from './ContributionSection'
import { iRetroPGF6Project } from '../../../RetroType6'
import LinkIcon from '@carbon/icons-react/lib/Link'
import {
  containsOnlyDigits,
  ConvertStringToTime,
  formatGrant,
  formatName,
  numberWithCommas,
} from '@/app/lib/utils'
import {
  RiCashFill,
  RiGovernmentFill,
  RiHandCoinFill,
  RiSeedlingFill,
} from '@remixicon/react'

interface iFundingSection {
  data: iRetroPGF6Project
  fundingRef: React.MutableRefObject<HTMLElement | null>
}

export default function FundingSection({ data, fundingRef }: iFundingSection) {
  return (
    <section
      id="Funding Sources"
      ref={fundingRef}
      className="flex flex-col gap-6 bg-white rounded-lg p-4 lg:p-6 border"
    >
      <h3 className="text-2xl font-semibold">Funding Sources</h3>
      <hr className="hidden sm:block border-t-gray-100" />
      {data.grantsAndFunding.ventureFunding.length == 0 &&
        data.grantsAndFunding.grants.length == 0 &&
        data.grantsAndFunding.retroFunding?.length == 0 &&
        data.grantsAndFunding.revenue.length == 0 && (
          <p className="text-base font-normal text-gray-600">
            There is no funding sources or revenue information for this project.
          </p>
        )}

      {data.grantsAndFunding.ventureFunding.length != 0 &&
        data.grantsAndFunding.ventureFunding.map((item, i) => (
          <div className="flex px-8 py-6 bg-slate-50 rounded-lg gap-6" key={i}>
            <RiHandCoinFill size={25} color="#f5c542" />
            <div className="flex flex-col w-full ">
              <div className="flex flex-wrap gap-3 items-center">
                <p className="mb-1 text-base font-semibold font-rubik">
                  Venture Funding
                </p>
                <div className="flex flex-grow"></div>
                <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                  {containsOnlyDigits(item.amount)
                    ? Number(item.amount).toLocaleString('en-US', {
                        maximumFractionDigits: 2,
                      }) + ' OP'
                    : formatGrant(item.amount) + ' USD'}
                </p>
              </div>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}

      {data.grantsAndFunding.grants.length != 0 &&
        data.grantsAndFunding.grants.map((item, i) => (
          <div
            className="flex px-8 py-6 bg-slate-50 rounded-lg gap-6"
            key={item.details}
          >
            <RiGovernmentFill size={25} color="#b3a98b" />
            <div className="flex flex-col w-full">
              <div className="flex flex-wrap gap-3 items-center">
                <p className="mb-1 text-lg font-semibold font-rubik">
                  {formatName(item.grant ?? '')}
                </p>
                <p className="flex flex-grow"></p>
                <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                  {/* OP Grant Case */}
                  {item.grant &&
                    containsOnlyDigits(item.amount) &&
                    numberWithCommas(item.amount) + ' OP'}

                  {/* Only Number USD Grant Case */}
                  {item.grant === null &&
                    containsOnlyDigits(item.amount) &&
                    numberWithCommas(item.amount) + ' USD'}

                  {/* Not Number USD Grant Case */}
                  {item.grant === null &&
                    !containsOnlyDigits(item.amount) &&
                    formatGrant(item.amount) + ' USD'}
                </p>
              </div>
              {item.date && (
                <p className="mb-1 text-sm text-gray-600 font-rubik">
                  {ConvertStringToTime(item.date)}
                </p>
              )}
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}

      {data.grantsAndFunding.retroFunding?.length != 0 &&
        data.grantsAndFunding.retroFunding?.map((item, i) => (
          <div className="flex px-8 py-6 bg-slate-50 rounded-lg gap-6" key={i}>
            <RiSeedlingFill size={25} color="#99c23b" />
            <div className="flex flex-col w-full ">
              <div className="flex flex-wrap gap-3 items-center ">
                <p className="mb-1 text-lg font-semibold font-rubik">
                  Retro Funding
                </p>
                <p className="flex flex-grow"></p>
                <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                  {containsOnlyDigits(item.amount)
                    ? numberWithCommas(item.amount) + ' OP'
                    : formatGrant(item.amount) + ' USD'}
                </p>
              </div>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      {data.grantsAndFunding.revenue.length != 0 &&
        data.grantsAndFunding.revenue.map((item, i) => (
          <div className="flex px-8 py-6 bg-slate-50 rounded-lg gap-6" key={i}>
            <RiCashFill size={25} color="#f5c542" />
            <div className="flex flex-col w-full ">
              <div className="flex flex-wrap gap-3 items-center">
                <p className="mb-1 text-lg font-semibold font-rubik">
                  {'Revenue'}
                </p>
                <p className="flex flex-grow"></p>
                <p className="mb-1 text-base font-medium text-gray-600 font-rubik">
                  {containsOnlyDigits(item.amount)
                    ? numberWithCommas(item.amount) + ' OP'
                    : formatGrant(item.amount) + ' USD'}
                </p>
              </div>
              {item.details && (
                <p className="text-sm text-gray-500">{item.details}</p>
              )}
            </div>
          </div>
        ))}
    </section>
  )
}
