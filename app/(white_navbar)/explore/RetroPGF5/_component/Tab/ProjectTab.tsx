'use client'

import React, { FC, useEffect, useMemo, useState } from 'react'
import { CheckBoxStateType, ExploreRoundState } from '../ExploreRoundType'
import { category, itemsPerPage, max, min, isOpenSource } from '../Text'
import InputAndFilterBtn from './component/InputAndFilterBtn'
import CheckBoxFilter from './component/CheckBoxFilter'
import { iRetroPGF5Project } from '../../RetroType5'
import { Pagination } from 'react-headless-pagination'
import DynamicCard from '../DynamicCard'
import ListCard from './component/ListCard'
import DialogFilter from './Filter/DialogFilter'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { isLetter } from '@/app/lib/utils'

interface ProjectTabProps {
  projectData: iRetroPGF5Project[]
}

export default function ProjectTab({
  projectData,
}: ProjectTabProps): JSX.Element {
  const searchParams = useSearchParams()
  const [search, setSearch] = useState('')
  const [state, setState] = useState<ExploreRoundState>({
    drawer: false,
    sort: 'Project Name (A-Z)',
    view: 'g',
    filter: true,
  })
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [checkBox, setCheckBox] = useState<CheckBoxStateType>({
    category: [],
    applicationCategory: [],
    priceModel: [],
    receiveOP: [],
    eligibility: 'Eligible',
  })

  function handleClearFilter() {
    setCheckBox({
      category: [],
      applicationCategory: [],
      priceModel: [],
      receiveOP: [],
      eligibility: 'Eligible',
    })
    setMinVal(min)
    setMaxVal(max)
    setSearch('')
    setState((prev) => ({ ...prev, sort: 'Project Name (A-Z)' }))
  }

  function handleChangeCategory(value: string) {
    setCheckBox((prev) => {
      let temp = { ...prev }

      let index = temp.category.findIndex((elem) => elem === value)
      // add new category
      if (index === -1) {
        temp.category.push(value)
      } else {
        // remove category
        temp.category.splice(index, 1)
      }

      return temp
    })
  }

  function handleChangeApplicationCategory(value: string) {
    setCheckBox((prev) => {
      let temp = { ...prev }
      const updatedApplicationCategory = temp.applicationCategory.includes(
        value
      )
        ? temp.applicationCategory.filter((elem) => elem !== value)
        : [...temp.applicationCategory, value]

      return { ...prev, applicationCategory: updatedApplicationCategory }
    })
  }

  function handleChangePriceModel(value: string) {
    setCheckBox((prev) => {
      let temp = { ...prev }
      const updatedPriceModel = temp.priceModel.includes(value)
        ? temp.priceModel.filter((elem) => elem !== value)
        : [...temp.priceModel, value]

      return { ...prev, priceModel: updatedPriceModel }
    })
  }

  const handlePageClick = (page: number) => {
    setCurrentPage((prev) => page)
  }

  function handleChangeSort(char: string) {
    setState((prev) => ({ ...prev, sort: char }))
  }

  useEffect(() => {
    const searchCategory = decodeURIComponent(
      searchParams.get('category') || ''
    )
    category.forEach((elem) => {
      if (elem.name === searchCategory) {
        setCheckBox((prev) => {
          let tempSub =
            category.find((elem) => elem.name === searchCategory)
              ?.subCategory || []
          return { ...prev, category: [searchCategory], subCategory: tempSub }
        })
      }
    })
  }, [searchParams])

  useEffect(() => {
    setCurrentPage(0)
  }, [search, checkBox])

  const filterJson = useMemo(() => {
    return projectData.filter((item) => {
      const searchCondition =
        search !== ''
          ? typeof item.name === 'string' &&
            item.name.toLowerCase().includes(search.toLowerCase())
          : true

      let categoryCondition: boolean
      if (checkBox.category.length !== 0) {
        categoryCondition = checkBox.category.some(
          (elem) => elem === item.category
        )
      } else {
        categoryCondition = true
      }

      let applicationCategoryCondition: boolean
      if (checkBox.applicationCategory.length !== 0) {
        applicationCategoryCondition = checkBox.applicationCategory.some(
          (elem) => elem === item.applicationCategory
        )
      } else {
        applicationCategoryCondition = true
      }

      let priceModelCondition: boolean
      if (checkBox.priceModel.length !== 0) {
        priceModelCondition = checkBox.priceModel.some((elem) => {
          const str =
            typeof item.pricingModel === 'object'
              ? item.pricingModel?.type
              : item.pricingModel ?? ''
          return elem === str
        })
      } else {
        priceModelCondition = true
      }
      return (
        searchCondition &&
        categoryCondition &&
        applicationCategoryCondition &&
        priceModelCondition
      )
    })
    // return projectData
  }, [projectData, search, checkBox])

  const pageCount = useMemo(() => {
    return Math.ceil(filterJson.length / itemsPerPage)
  }, [filterJson])

  const currentItems = useMemo(() => {
    let sortedItems = filterJson

    if (state.sort === 'Project Name (A-Z)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.name ?? '').toLowerCase()
        const nameB = (b.name ?? '').toLowerCase()

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)

          // Check if both characters are letters
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])

          if (isALetter && isBLetter) {
            // Both characters are letters, compare them normally
            if (charCodeA !== charCodeB) {
              return charCodeA - charCodeB
            }
          } else if (isALetter) {
            // Character in nameA is a letter, prioritize it
            return -1
          } else if (isBLetter) {
            // Character in nameB is a letter, prioritize it
            return 1
          }
        }

        // If both names are equal so far, the shorter name should come first
        return nameA.length - nameB.length
      })
    } else if (state.sort === 'Project Name (Z-A)') {
      sortedItems.sort((a, b) => {
        const nameA = (a.name ?? '').toLowerCase()
        const nameB = (b.name ?? '').toLowerCase()

        for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
          const charCodeA = nameA.charCodeAt(i)
          const charCodeB = nameB.charCodeAt(i)

          // Check if both characters are letters
          const isALetter = isLetter(nameA[i])
          const isBLetter = isLetter(nameB[i])

          if (!isALetter && isBLetter) {
            // Special character in nameA, prioritize it
            return -1
          } else if (isALetter && !isBLetter) {
            // Special character in nameB, prioritize it
            return 1
          } else if (isALetter && isBLetter) {
            // Both characters are letters
            if (charCodeA !== charCodeB) {
              // Compare letters in descending order (Z-A)
              return charCodeB - charCodeA
            }
          }
        }

        // If both names are equal so far, the shorter name should come first
        return nameB.length - nameA.length // Sort by length if everything else is equal
      })
    }

    return sortedItems.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    )
  }, [currentPage, filterJson, state.sort])

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
    <>
      {/* // this file include
        // - search input
        // - sort by button
        // - change view (list, grid) data
        // - filter btn
        // - badge */}

      <InputAndFilterBtn
        state={state}
        checkBox={checkBox}
        search={search}
        setState={setState}
        setSearch={setSearch}
        setCheckBox={setCheckBox}
        handleClearFilter={handleClearFilter}
        handleChangeCategory={handleChangeCategory}
        handleChangeSort={handleChangeSort}
      />
      <div className=" relative animate-slideup">
        {state.view === 'g' ? (
          <div className="mt-[2.5rem] animate-slideleft flex gap-6">
            {state.filter && (
              <CheckBoxFilter
                checkBox={checkBox}
                handleClearFilter={handleClearFilter}
                handleChangeCategory={handleChangeCategory}
                handleChangeApplicationCategory={
                  handleChangeApplicationCategory
                }
                handleChangePriceModel={handleChangePriceModel}
                minVal={minVal}
                setMinVal={setMinVal}
                maxVal={maxVal}
                setMaxVal={setMaxVal}
              />
            )}

            <div
              className={`
                            w-full grid h-fit gap-6 
                            ${
                              state.filter
                                ? 'grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4'
                                : 'grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'
                            }
                            `}
            >
              {currentItems.length !== 0 ? (
                currentItems.map((item, i) => (
                  <React.Fragment key={i}>
                    <DynamicCard
                      icon={item.profileAvatarUrl ?? ''}
                      banner={item.projectCoverImageUrl ?? ''}
                      category={item.category ?? ''}
                      applicationCategory={item.applicationCategory}
                      description={item.description ?? ''}
                      title={item.name}
                      teamSize={item.team?.length ?? 0}
                      // teamSize={1}
                      round="5"
                      isEligible={true}
                      reward={item.allocation ?? 0}
                      // votes={0}
                      rank={item.rank ?? 0}
                    />
                  </React.Fragment>
                ))
              ) : (
                <h6 className="col-span-1 lg:col-span-2 xl:col-span-3 text-lg font-medium text-gray-500 text-center w-full">
                  0 Project Found
                </h6>
              )}
            </div>
          </div>
        ) : (
          <div className="animate-slideright flex gap-0 lg:gap-6 mt-8">
            {state.filter && (
              <div className="mt-14">
                <CheckBoxFilter
                  checkBox={checkBox}
                  handleClearFilter={handleClearFilter}
                  handleChangeCategory={handleChangeCategory}
                  handleChangeApplicationCategory={
                    handleChangeApplicationCategory
                  }
                  handleChangePriceModel={handleChangePriceModel}
                  minVal={minVal}
                  setMinVal={setMinVal}
                  maxVal={maxVal}
                  setMaxVal={setMaxVal}
                />
              </div>
            )}
            <div className="hidden md:block">
              <ListCard currentItems={currentItems} />
            </div>
            <div className=" grid grid-cols-1 min-[450px]:grid-cols-2 md:hidden flex-col gap-4">
              {currentItems.map((item, i) => (
                <React.Fragment key={i}>
                  <DynamicCard
                    category={item.category ?? ''}
                    description={item.description ?? ''}
                    title={item.name}
                    // opRecieve={0}
                    round="4"
                    isEligible={true}
                    // votes={0}
                    // rank={0}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {currentItems.length !== 0 && (
          <div className="mt-12 text-sm font-medium text-gray-500">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={handlePageClick}
              className="flex flex-wrap justify-end"
              truncableText="..."
              truncableClassName="border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50"
              edgePageCount={2}
              middlePagesSiblingCount={1}
              totalPages={pageCount}
            >
              <Pagination.PrevButton className="px-2 border min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Previous
              </Pagination.PrevButton>

              <div className="flex justify-center">
                <div className="flex flex-wrap lg:items-center justify-start lg:justify-center list-none">
                  <Pagination.PageButton
                    as={<div />}
                    activeClassName="bg-gray-100 cursor-pointer hover:bg-gray-50 list-none"
                    inactiveClassName="list-none"
                    className=" border min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] flex items-center justify-center cursor-pointer hover:bg-gray-50 list-none"
                    dataTestIdInactive="list-none"
                  />
                </div>
              </div>

              <Pagination.NextButton className="px-2 border  min-h-[2rem] max-h-[2rem] text-sm font-medium text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                Next
              </Pagination.NextButton>
            </Pagination>
          </div>
        )}
        <DialogFilter
          onClose={() => setState((prev) => ({ ...prev, drawer: false }))}
          open={state.drawer}
          checkBox={checkBox}
          handleChangeCategory={handleChangeCategory}
          handleChangeApplicationCategory={handleChangeApplicationCategory}
          handleClearFilter={handleClearFilter}
          handleChangePriceModel={handleChangePriceModel}
        />
      </div>
    </>
  )
}
