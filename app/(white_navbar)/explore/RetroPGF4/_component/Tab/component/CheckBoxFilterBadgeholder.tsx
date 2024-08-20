'use client'
import { CheckBoxStateBadgeholderType } from '../../ExploreRoundType'
import { Disclosure, Transition } from '@headlessui/react'
import ChevronDown from '@carbon/icons-react/lib/ChevronDown'
import { FC } from 'react'
import MultiplyOpenSourceDisclosure from './MultiplyOpenSourceDisclosure'
import BadgeholderStatusDisclosure from './BadgeholderStatusDisclosure'

interface CheckBoxFilterBadgeholderProps {
  checkBox: CheckBoxStateBadgeholderType
  handleClearFilter: () => void
  handleChangeStatus: (status: string) => void
  handleChangeMultiplyOpenSource: (string: string) => void
}

export default function CheckBoxFilterBadgeholder({
  checkBox,
  handleClearFilter,
  handleChangeStatus,
  handleChangeMultiplyOpenSource,
}: CheckBoxFilterBadgeholderProps) {
  return (
    <>
      <div className="hidden lg:flex flex-col gap-4 border  min-w-60 max-w-60 h-fit rounded-lg p-4  animate-slideleft z-10 pb-4">
        <div className="flex items-center justify-between gap-1 ">
          <h6 className="text-sm font-bold text-gray-900 ">Filter</h6>
          <button onClick={handleClearFilter} className="underline">
            <h6 className="text-xs font-normal text-gray-900 ">
              Clear Filters
            </h6>
          </button>
        </div>
        <hr className="h-[0.0625rem] bg-gray-200" />
        <BadgeholderStatusDisclosure
          checkBox={checkBox}
          handleChangeStatus={handleChangeStatus}
        />
        <MultiplyOpenSourceDisclosure
          checkBox={checkBox}
          handleChangeMultiplyOpenSource={handleChangeMultiplyOpenSource}
        />
      </div>
    </>
  )
}
