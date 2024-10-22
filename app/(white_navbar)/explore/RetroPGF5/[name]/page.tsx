import BreadCump from './_component/BreadCump'
import CustomError from '@/app/component/Error'
import { cleanParamsName } from '@/app/lib/utils'
import { getRealTimeRetroPGF5 } from '@/app/lib/realtime'
import { iRetroPGF5Project } from '../RetroType5'
import Cpage from './Cpage'
import { getJsonRound5 } from '../page'

interface pageProps {
  params: {
    name: string
  }
}

export const dynamic = 'force-dynamic'

async function FindRound5Data(
  decodedString: string
): Promise<iRetroPGF5Project | undefined> {
  const data = await getJsonRound5()
  const projectData = data.find((elem) => {
    return cleanParamsName(elem.name) === decodedString
  })

  return projectData
}

export default async function page({ params }: pageProps) {
  try {
    const decodedString = decodeURIComponent(params.name)
    const projectData = await FindRound5Data(decodedString)
    if (!projectData) {
      return (
        <CustomError
          titleError="500 Failed to get project"
          subTitle="Cant find project that you looking for"
          desc="Something went wrong with finding the project that you looking for"
        />
      )
    }

    return (
      <div className="bg-gray-50 min-h-[calc(100vh-4.5rem)] h-full py-4 lg:py-10">
        <div className="mx-4 sm:mx-6 lg:mx-20">
          <BreadCump projectName={projectData.name} />
          <Cpage data={projectData} />
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching data:', error)
    let errorMessage = 'An unexpected error occurred'
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error</h1>
          <p className="text-red-500">{errorMessage}</p>
        </div>
      </div>
    )
  }
}
