"use client"
import { Checkmark, SortAscending } from "@carbon/icons-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FilterStateType } from "../CommunityTytpe";

export default function SortByBtn({
    filter,
    setFilter
}:{
    filter: FilterStateType;
    setFilter: React.Dispatch<React.SetStateAction<FilterStateType>>
})  {

    function handleChangeSort(char: "b" | "mp" | "n") {
        setFilter(prev => ({...prev, sort: char}))
    }

return (

    <> 
    <div className="text-right">
      <Menu 
      
      as="div" className="relative inline-block text-left">

        <div>
          <Menu.Button className="">
            <div
              className={` h-10
            hover:bg-secondaryRed hover:text-primaryRed hover:border hover:border-primaryRed
            border rounded-full px-3 py-2 cursor-pointer transition-colors 
            text-slate-900 flex items-center gap-2 self-center shrink-0}
            `}
            >
              <SortAscending size={24} className="fill-gray-500" />
              <p className=" text-sm font-normal self-center">Best</p>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-4 z-20 left-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <h6 className="text-sm font-bold text-center text-gray-900">
              Sort By
            </h6>

            <div className="mt-4">

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${filter.sort === "b" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group w-full items-center rounded-md px-2 py-2 text-sm flex justify-between hover:bg-gray-50`}
                      onClick={() => handleChangeSort("b")}
                  >
                    <h6>Best</h6>
                    {filter.sort === "b" && 
                    <Checkmark  size={24}/>
                    }
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${filter.sort === "mp" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm font-normal hover:bg-gray-50`}
                      onClick={() => handleChangeSort("mp")}
                  >
                    <h6>Most popular</h6>
                    {filter.sort === "mp" && 
                   <Checkmark  size={24} />
                    }
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${filter.sort === "n" ? 'bg-gray-100 hover:bg-gray-200' : 'text-gray-900'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm font-normal hover:bg-gray-50`}
                      onClick={() => handleChangeSort("n")}
                  >
                    <h6>New</h6>
                    {filter.sort === "n" && 
                    <Checkmark  size={24} />
                    }
                  </button>
                )}
              </Menu.Item>
            </div>

          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </>

    )

}
