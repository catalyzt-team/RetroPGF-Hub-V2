import ChevronDown from '@carbon/icons-react/lib/ChevronDown'
import { Disclosure, Transition } from '@headlessui/react'
import { applicationCategory } from '../../Text'
import Checkbox from '@/app/component/Checkbox/Checkbox'
import { CheckBoxStateType } from '../../ExploreRoundType'

interface IApplicationCategoryDisclosure {
  checkBox: CheckBoxStateType
  handleChangeApplicationCategory: (value: string) => void
}
export default function ApplicationCategoryDisclosure({
  checkBox,
  handleChangeApplicationCategory,
}: IApplicationCategoryDisclosure) {
  const applicationCategoryMap: { [key: string]: string } = {
    'Governance Analytics': 'GOVERNANCE_ANALYTICS',
    'Governance Infra & Tooling': 'GOVERNANCE_INFRA_AND_TOOLING',
    'Governance Leadership': 'GOVERNANCE_LEADERSHIP',
  }
  return (
    <>
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center w-full justify-between rounded-lg text-left text-sm font-medium focus:outline-none ">
              <h6 className="text-xs font-medium text-gray-400 self-center">
                Application Category
              </h6>
              <ChevronDown
                size={24}
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-gray-600`}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm text-gray-500 flex gap-1 flex-col gap-y-1.5">
                {applicationCategory.map((item, i) => (
                  <div key={i}>
                    <Checkbox
                      key={i}
                      label={item.value}
                      value={item.name}
                      className="cursor-pointer"
                      checked={checkBox.applicationCategory.includes(
                        applicationCategoryMap[item.name]
                      )}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleChangeApplicationCategory(
                          applicationCategoryMap[item.name]
                        )
                      }}
                    />
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  )
}
