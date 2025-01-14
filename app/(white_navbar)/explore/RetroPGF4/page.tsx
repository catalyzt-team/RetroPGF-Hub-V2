import {
  BadgeholderMetrics,
  iRetroPGF4Project,
} from '@/app/(white_navbar)/explore/RetroPGF4/RetroType4'
import Cpage from './Cpage'
import BreadCumpExplore from './_component/BreadCumpExplore'
import fs from 'fs'
import path from 'path'

export async function getJsonRound4(): Promise<iRetroPGF4Project[]> {
  const directoryPath = path.join(
    process.cwd(),
    'public/static/rpgf4/rpgf4.json'
  )
  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: iRetroPGF4Project[] = JSON.parse(fileContents)
  return jsonData
}

export async function getJsonBadgeholderMetric(): Promise<
  BadgeholderMetrics[]
> {
  const directoryPath = path.join(
    process.cwd(),
    'public/static/rpgf4/rpgf4_badgeholder_metrics.json'
  )
  const fileContents = await fs.promises.readFile(directoryPath, 'utf8')
  const jsonData: BadgeholderMetrics[] = JSON.parse(fileContents)
  return jsonData
}

export default async function page() {
  const round4 = await getJsonRound4()
  const badgeholderData = await getJsonBadgeholderMetric()

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <div className="bg-gradient-to-b from-[#ffdede]">
          <div className="flex flex-col mx-2 sm:mx-4 md:mx-6 lg:mx-20 gap-6">
            <div className="mt-10">
              <BreadCumpExplore secondText={'RetroPGF 4'} />
            </div>

            <div className="mt-4 inline-flex">
              <h6 className="font-rubik text-3xl md:text-5xl font-semibold text-gray-800 mb-3">
                Retro Funding 4
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mx-4 md:mx-6 lg:mx-20">
          <Cpage round4={round4} badgeholderData={badgeholderData} />
        </div>
      </div>
    </>
  )
}
